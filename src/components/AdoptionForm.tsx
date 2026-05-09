import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, CheckCircle2, Loader2 } from "lucide-react";
import { Cat, AdoptionRequest } from "../types";
import { db } from "../lib/firebase";
import { collection, setDoc, doc, serverTimestamp } from "firebase/firestore";
import { handleFirestoreError, OperationType } from "../lib/firebaseUtils";

interface AdoptionFormProps {
  cat: Cat;
  isOpen: boolean;
  onClose: () => void;
}

export const AdoptionForm = ({ cat, isOpen, onClose }: AdoptionFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    applicantName: "",
    applicantEmail: "",
    applicantPhone: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const requestId = crypto.randomUUID();
    const path = `adoptionRequests/${requestId}`;

    try {
      const request: AdoptionRequest = {
        catId: cat.id,
        catName: cat.name,
        applicantName: formData.applicantName,
        applicantEmail: formData.applicantEmail,
        applicantPhone: formData.applicantPhone,
        message: formData.message,
        status: "pending",
        createdAt: serverTimestamp()
      };

      await setDoc(doc(db, "adoptionRequests", requestId), request);
      setIsSuccess(true);
      setTimeout(() => {
        onClose();
        setIsSuccess(false);
        setFormData({ applicantName: "", applicantEmail: "", applicantPhone: "", message: "" });
      }, 3000);
    } catch (error) {
      handleFirestoreError(error, OperationType.WRITE, path);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-on-surface/40 backdrop-blur-sm"
          />
          <motion.div 
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            className="relative bg-surface w-full max-w-lg rounded-[2.5rem] shadow-2xl overflow-hidden border border-outline-variant/10"
          >
            {isSuccess ? (
              <div className="p-12 text-center">
                <motion.div
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle2 className="w-10 h-10 text-primary" />
                </motion.div>
                <h2 className="font-headline text-3xl font-bold text-on-surface mb-2">Application Sent!</h2>
                <p className="font-body text-on-surface-variant">We've received your request to adopt <strong>{cat.name}</strong>. Our team will contact you soon.</p>
              </div>
            ) : (
              <>
                <div className="p-8 border-b border-outline-variant/10 flex justify-between items-center bg-surface-container-low">
                  <div>
                    <h2 className="font-headline text-2xl font-bold text-on-surface">Adopt {cat.name}</h2>
                    <p className="text-secondary text-xs font-bold uppercase tracking-widest mt-1">{cat.breed}</p>
                  </div>
                  <button 
                    onClick={onClose}
                    className="p-2 hover:bg-surface-container-high rounded-full transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="p-8 space-y-6">
                  <div className="space-y-4">
                    <div className="group">
                      <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 ml-1">Full Name</label>
                      <input 
                        required
                        type="text"
                        value={formData.applicantName}
                        onChange={(e) => setFormData({...formData, applicantName: e.target.value})}
                        placeholder="John Doe"
                        className="w-full bg-surface-container px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-on-surface"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="group">
                        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 ml-1">Email Address</label>
                        <input 
                          required
                          type="email"
                          value={formData.applicantEmail}
                          onChange={(e) => setFormData({...formData, applicantEmail: e.target.value})}
                          placeholder="john@example.com"
                          className="w-full bg-surface-container px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-on-surface"
                        />
                      </div>
                      <div className="group">
                        <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 ml-1">Phone Number</label>
                        <input 
                          required
                          type="tel"
                          value={formData.applicantPhone}
                          onChange={(e) => setFormData({...formData, applicantPhone: e.target.value})}
                          placeholder="+1 (555) 000-0000"
                          className="w-full bg-surface-container px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-on-surface"
                        />
                      </div>
                    </div>
                    <div className="group">
                      <label className="block text-xs font-bold text-on-surface-variant uppercase tracking-wider mb-2 ml-1">Why do you want to adopt {cat.name}?</label>
                      <textarea 
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us a bit about your home and experience with cats..."
                        className="w-full bg-surface-container px-6 py-4 rounded-2xl outline-none focus:ring-2 focus:ring-primary/20 transition-all font-body text-on-surface resize-none"
                      />
                    </div>
                  </div>
                  <button 
                    disabled={isSubmitting}
                    className="w-full bg-primary text-on-primary py-5 rounded-full font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <Loader2 className="w-5 h-5 animate-spin" />
                    ) : (
                      <>Submit Application <Send className="w-4 h-4" /></>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
