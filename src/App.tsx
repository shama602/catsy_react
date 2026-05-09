import { motion, AnimatePresence } from "motion/react";
import { 
  Plus, 
  ChevronRight, 
  ArrowRight, 
  CheckCircle2, 
  Heart, 
  Mail, 
  Share2, 
  Menu, 
  PawPrint,
  Clock,
  Calendar,
  Users,
  Target,
  Award,
  Search,
  Filter,
  Eye,
  Camera,
  History,
  Info
} from "lucide-react";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, useNavigate } from "react-router-dom";
import { AdoptPage } from "./pages/AdoptPage";
import { ArticlePage } from "./pages/ArticlePage";
import { blogPosts } from "./data/blogPosts";
import { cats } from "./data/cats";

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// --- Components ---

const Header = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-surface sticky top-0 z-50 shadow-[0_4px_20px_-2px_rgba(164,60,41,0.08)]">
      <div className="flex justify-between items-center w-full px-4 md:px-16 py-4 max-w-[1280px] mx-auto">
        <Link to="/" className="flex items-center gap-1 scale-95 active:scale-90 transition-transform duration-200 cursor-pointer">
          <PawPrint className="text-primary w-8 h-8" />
          <span className="font-headline text-2xl font-bold text-primary">Catsy</span>
        </Link>
        <nav className="hidden md:flex items-center gap-10">
          <Link to="/" className={`${isActive('/') ? 'text-primary border-b-2 border-primary font-bold' : 'text-on-surface-variant font-medium'} text-sm hover:text-secondary transition-colors duration-300`}>Home</Link>
          <Link to="/blog" className={`${isActive('/blog') ? 'text-primary border-b-2 border-primary font-bold' : 'text-on-surface-variant font-medium'} text-sm hover:text-secondary transition-colors duration-300`}>Blog</Link>
          <Link to="/gallery" className={`${isActive('/gallery') ? 'text-primary border-b-2 border-primary font-bold' : 'text-on-surface-variant font-medium'} text-sm hover:text-secondary transition-colors duration-300`}>Gallery</Link>
          <Link to="/about" className={`${isActive('/about') ? 'text-primary border-b-2 border-primary font-bold' : 'text-on-surface-variant font-medium'} text-sm hover:text-secondary transition-colors duration-300`}>About</Link>
          <Link to="/adopt" className="bg-primary text-on-primary px-10 py-3 rounded-full font-bold text-sm scale-95 active:scale-90 transition-transform duration-200">
            Adopt Now
          </Link>
        </nav>
        <button aria-label="Open Menu" className="md:hidden p-2">
          <Menu className="text-on-surface-variant" />
        </button>
      </div>
    </header>
  );
};

const Hero = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-16 py-16">
      <div className="relative grid md:grid-cols-2 gap-16 items-center bg-surface-container rounded-[2rem] overflow-hidden p-8 md:p-16">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary-container opacity-10 rounded-full blur-[80px]"></div>
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-secondary-container opacity-10 rounded-full blur-[80px]"></div>
        
        <div className="relative z-10 flex flex-col gap-6">
          <span className="inline-block bg-primary-container/15 text-on-primary-container px-4 py-1.5 rounded-full font-bold text-xs uppercase tracking-wider w-fit">
            Featured Story
          </span>
          <h1 className="font-headline text-5xl md:text-6xl text-on-surface leading-tight font-bold">
            The Joy of a <span className="text-primary">Sun-Drenched</span> Nap
          </h1>
          <p className="font-body text-lg text-on-surface-variant max-w-lg leading-relaxed">
            Discover why cats are the ultimate masters of relaxation and how creating a cozy space in your home can improve their health and happiness through proper solar enrichment.
          </p>
          <div className="flex flex-wrap gap-4 mt-2">
            <Link to="/article/sun-drenched-nap" className="bg-primary text-on-primary px-8 py-4 rounded-full font-bold text-sm shadow-lg shadow-primary/20 hover:opacity-90 transition-opacity flex items-center justify-center">
              Read Article
            </Link>
            <Link to="/gallery" className="border-2 border-secondary text-secondary px-8 py-4 rounded-full font-bold text-sm hover:bg-secondary/5 transition-colors inline-block text-center pt-3.5">
              See Gallery
            </Link>
          </div>
        </div>
        
        <div className="relative">
          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-primary/10">
            <img 
              alt="Ginger cat sleeping in sun" 
              className="w-full h-full object-cover" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCOliK-7mhJEEnpYWSEYJfZcZTQXzfZKazwZ4nh9q-RNpnoq3Vmj42HPtW1iGH3FQaatuTObdAy_x5gYlWKjo0B0G726-OAD7JxRvBUP0br1xD9vlShxD525-xtLJZV_EXwti700cPlp2kQV8cwFmM2RMSUHdp6Vp4kvm2bPkg7l31LFENinUcbxOBlDHbdgrX7HfLNiSbiDZ1VQOp36qVw51yNsCBb4rnA745KQqC84J9_mYO2O1VfDRRcqzKsUUkR7DT4g_hXYcft" 
            />
          </div>
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-surface-container-lowest p-6 rounded-2xl shadow-xl max-w-[200px] border border-outline-variant/30"
          >
            <div className="flex items-center gap-3">
              <div className="bg-secondary/10 p-2 rounded-full">
                <Heart className="text-secondary w-6 h-6 fill-secondary" />
              </div>
              <div>
                <p className="font-headline text-2xl font-bold leading-none text-on-surface">4.9k</p>
                <p className="font-body text-xs text-on-surface-variant font-medium">Purr-fect Likes</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CareTips = () => {
  const tips = [
    { title: "Proper Hydration", content: "Provide fresh water daily and consider a feline fountain, as many cats prefer running water." },
    { title: "Vertical Space", content: "Cats love climbing. Install shelves or cat trees to increase their territory and confidence." },
    { title: "Mental Stimulation", content: "Use puzzle feeders and daily play sessions to prevent boredom and behavioral issues." },
    { title: "Regular Vet Checkups", content: "Annual exams are crucial for early detection of health issues, especially in senior cats." }
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-16 py-16">
      <div className="bg-surface-container-high rounded-[2rem] p-8 md:p-16 border border-outline-variant/20">
        <h2 className="font-headline text-3xl font-bold text-on-surface mb-4">Quick Cat Care Tips for New Owners</h2>
        <p className="font-body text-on-surface-variant mb-10 max-w-2xl">
          Looking for fast answers to essential cat care? Here are the top tips every feline parent should know to keep their pet healthy and happy.
        </p>
        <div className="grid md:grid-cols-2 gap-6">
          {tips.map((tip, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-surface-container-lowest rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <CheckCircle2 className="text-primary w-6 h-6 shrink-0 mt-1" />
              <p className="font-body text-on-surface leading-relaxed">
                <strong className="font-bold">{tip.title}:</strong> {tip.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AdoptionGrid = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-16 py-16 bg-surface-container-low/30 my-16">
      <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8">
        <div className="text-left">
          <h2 className="font-headline text-3xl font-bold text-on-surface">Meet the Purr-sonalities Available for Adoption</h2>
          <p className="font-body text-on-surface-variant mt-2">Discover charming residents looking for their forever sunny window and a loving home.</p>
        </div>
        <Link to="/adopt" className="bg-secondary text-white px-8 py-3 rounded-full font-bold text-sm hover:opacity-90 flex items-center gap-2">
          View All for Adoption <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[280px]">
        <div className="md:col-span-2 md:row-span-2 group cursor-pointer relative overflow-hidden rounded-[2rem] shadow-md hover:shadow-2xl transition-all duration-500">
          <img 
            alt="Duke of Whiskers" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-4X50WyJno9Tynpcwp4a51IcwQ40u3jUHR4ETFX76EUoM9bY4BDqhHQ2luY6o3BCaTq5VT4xH0K3EvlBYvA1GPKulGlj-818rGmWv5kZ1sqtL57r_NePMEfOZ3qq2w0d_h2y_3SICWVCPgFzf1srtaYVql6OJqoqPzhLfWtyCS2q0UmjopyjIym3UR2CQgMfFivHqW6xPs-1iuh6LTZusZ6Rf0q5c3lr02YIom-VHOxLwxj0QIrhWF9J8XS8QUVLXfugOJthCofKA" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-10 text-white w-full">
            <span className="bg-secondary text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Senior King</span>
            <h3 className="font-headline text-2xl font-bold mt-3">Duke of Whiskers</h3>
            <p className="font-body text-sm opacity-90 mt-1 max-w-sm">Gentle, quiet, and a professional cuddler with a calm temperament.</p>
          </div>
        </div>
        
        <div className="md:col-span-2 group cursor-pointer relative overflow-hidden rounded-[2rem] shadow-md hover:shadow-xl transition-all duration-500">
          <img 
            alt="The Dynamic Duo" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBME0xFg-NnvrvdCTOlVNUTQ_KOFNzbXQjAld--QFl4DnGaSuAnDjXPdlHpZntDUXMAudCT7gQvXNldy-POzrfLqDVLHXaRY50ZRHjKtWcJfy_j5cT4cNG7BClL1r5LHO71mtc_UQ7oi8X6i8s57ZdUkmoPzbSi4e80CupCvSLitceywiDCK4oD5IXp9qSmhU3LvwWpecJMQAPqUQPwdA0S3PsuEwaFaUOlmLYU60-ruSuEB1yU-7w5fTmuzkBH_VPFNH1WU6LEZG68" 
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500"></div>
          <div className="absolute top-6 right-6">
            <span className="bg-primary text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">Adopted</span>
          </div>
          <div className="absolute bottom-6 left-6 text-white text-shadow">
            <h3 className="font-headline text-xl font-bold">The Dynamic Duo</h3>
          </div>
        </div>

        <div className="group cursor-pointer relative overflow-hidden rounded-[2rem] shadow-md hover:shadow-xl transition-all duration-500">
          <img 
            alt="Mochi" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHUODlOwJ6c4Eg-OVYurjc_0Ya_hTWtLUMDoKijh8YgbfJYKcoU-l7Y-haMMM-8IqiqpWEHJmZewjfypegNgyp6Rq5aVycKknal70mLl560MJZJpiHXSyhHwIRkBmucwvuiaDPndSN57tZ0GTaNFqIVBs4RgQbMUM_I7cVoJvymuLysX1UlAT4Sf2bCJDpEAVMt1jQJ_gV67yDS4S9H2on28XMug-qsi9HQHlLPj_uhWVbV1cCRt6X1YJvTtlylDRPzW8YHY6KjGUr" 
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-4 left-6 text-white">
            <h3 className="font-headline font-bold">Mochi</h3>
          </div>
        </div>

        <div className="group cursor-pointer relative overflow-hidden rounded-[2rem] shadow-md hover:shadow-xl transition-all duration-500">
          <img 
            alt="Oliver" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCI4vriiUiUPCW3d4SbUy0rNw74xKe1yqr7DNK9E2mT8ojA5I6sG2oyjP4YdV4JYrOuww36cDvP1S8ICMwb6oUBtcmPrZ29dMMn4WGESR_bu6jsuRZFfwUEEcAzBzc-Zq0vJIrbOZOl2mcTVpKbA25_4jIeMiLygUrPUVePyTnbqWxFxAfYnMbcSbRvUpurtPBojQWs8Yp_0dlIfdwbPrj3AewoyudBa-wYYUQExejN0agGjbnA6zHJR4K8Iwk5dZ6WO3XCXGL2M6rV" 
          />
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute bottom-4 left-6 text-white">
            <h3 className="font-headline font-bold">Oliver</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

const BlogSection = () => {
  const posts = [
    {
      title: "The Secrets to a Shiny Coat: Cat Nutrition Explained",
      excerpt: "Feeding your feline friend isn't just about calories; it's about the right Omega-3 fatty acids and nutrients that make their fur glow with health. Learn which ingredients to look for in premium cat food.",
      author: "Dr. Whiskers",
      category: "Nutrition",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbWvDt1nCEUnSdEfYPx1KjaVJTv5Aeyj5zrA6dNmhj-4XiZOv_pFjOGg09wnEDc_3-ENmCtfq9G_6qdJTMHvRKc8jJ2KlDj4IKkfnqMV7wZPyGjMGm4ced2WAkj6-fSSWepW5pZ9lwtjkpUBAWSc30rm3la2eh__A75fbdEK1u6YMKffOhJJHLw_8WefHe2U5L2mr0I5k9gWT6lT9iYmUREAwkqnaEQGEBenSuAaXcaJm9iv7zTxd2bCUjpKY62ifLaK9p-4jmBFj1",
      readTime: "5 min read",
      date: "May 12, 2024"
    },
    {
      title: "Creating a Feline Paradise in Small Spaces",
      excerpt: "How to transform even the smallest apartment into an enrichment heaven for your adventurous indoor cat. Discover DIY vertical space solutions and cat-safe botanical arrangements for indoor enrichment.",
      author: "Sarah Jenkins",
      category: "Lifestyle",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC958SebZ6jJoUKWvojXzQZoAwliEC72pI2J_WyL2PMfcu5otFdP8P-rpsh62o6TGfm9RpZByqPE0BczFS9qLpu8K0WLz7ebntrdPBhVrYW8wMUYr_oQOBP_Ex7RCKV3pEgIHLWStJjSimm4O1k9czd1JoHj0lnxWpzGlnnnSQ4C8spk-xiycMU2zktZhpPqa7xD2r0kw2GyX8UlyXoDvo1jiT35zNJOsJeaAkoaM6_ewxd-MwJVQ-v4k0eh01U94U4Ijdof9R4lWVG",
      readTime: "8 min read",
      date: "May 10, 2024"
    },
    {
      title: "The Healing Power of Purrs: Science Explained",
      excerpt: "Science proves that the frequency of a cat's purr can actually help reduce human stress, lower blood pressure, and even promote bone healing. Explore the bio-acoustic benefits of living with a feline companion.",
      author: "Mark Thompson",
      category: "Well-being",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ_HPfeUaYnCEWyWbesws84RaWkcRjfnSYEbTM0beiaO6ZOJsuV84HoaC5FybY-ozQJuomtMTe9rY8qFQssqqygtiDeHJAeEfqk9WksH1k0BwTlFGRz-4CIkGcpaihrPYy-VNrnki10SMJAJ3oU_KeLMFPLccHcgweNG63rbJ4rg3yFFEM6MlsfWFjeK6lS-dmXNnWVnsRiJiWHZplb_rLHTYwhpRSlyVfqcsPqzC1W_nkluHSBcsqWU8U7vkse7elueaTi1PA6Bsz",
      readTime: "4 min read",
      date: "May 08, 2024"
    }
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-16 py-16">
      <div className="flex flex-col sm:flex-row justify-between items-end mb-10 gap-4">
        <div>
          <h2 className="font-headline text-3xl font-bold text-on-surface">Latest Cat Care Guides & Blog Posts</h2>
          <p className="font-body text-on-surface-variant mt-2">Expert tips, feline nutrition tricks, and heartwarming adoption tales.</p>
        </div>
        <Link to="/blog" className="text-primary font-bold flex items-center gap-2 group hover:underline underline-offset-4">
          View All Posts <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <Link to={`/article/${post.id}`} key={index} className="bg-surface-container-lowest rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col border border-outline-variant/10 group">
            <div className="aspect-video relative overflow-hidden">
              <img alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={post.image} />
            </div>
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-secondary/15 text-secondary px-3 py-1 rounded-full font-bold text-xs uppercase">{post.category}</span>
                <span className="font-body text-xs text-on-surface-variant font-medium">By {post.author}</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-on-surface mb-3 line-clamp-2 group-hover:text-primary transition-colors">{post.title}</h3>
              <p className="font-body text-on-surface-variant text-sm line-clamp-3 mb-6 leading-relaxed flex-grow">{post.excerpt}</p>
              <div className="pt-4 border-t border-outline-variant/20 flex justify-between items-center text-on-surface-variant text-xs">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" /> {post.date}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    { q: "What should I feed my cat for a healthy life?", a: "A balanced diet rich in high-quality animal proteins is essential. Look for foods that list a specific meat (like salmon or chicken) as the first ingredient and avoid excessive fillers like corn or soy." },
    { q: "How can I help my indoor cat get enough exercise?", a: "Encourage active play with interactive toys like feather wands or laser pointers for 15-20 minutes daily. Providing vertical structures like cat trees also encourages climbing and healthy movement." },
    { q: "Why is my cat scratching the furniture?", a: "Scratching is a natural instinct for territory marking and claw maintenance. Provide sturdy scratching posts in various textures (sisal, cardboard) and place them near the furniture they currently prefer to redirect the behavior." },
    { q: "How do I introduce a new cat to my household?", a: "Start by keeping the new cat in a separate room. Gradually swap scents using blankets, then allow visual contact through a gate before supervised physical introductions to ensure a stress-free transition." }
  ];

  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-16 py-16 bg-surface-container/50 rounded-[3rem] my-16">
      <div className="text-center mb-12">
        <h2 className="font-headline text-3xl font-bold text-on-surface">Frequently Asked Questions About Cat Care</h2>
        <p className="font-body text-on-surface-variant mt-2">Direct answers to common feline queries for cat parents and enthusiasts.</p>
      </div>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/10">
            <h3 className="font-headline text-lg font-bold text-on-surface mb-2">{faq.q}</h3>
            <p className="font-body text-on-surface-variant leading-relaxed text-sm">{faq.a}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Newsletter = () => {
  return (
    <section className="max-w-[1280px] mx-auto px-4 md:px-16 py-16">
      <div className="bg-primary-container rounded-[2rem] p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl"></div>
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-on-primary-container/10 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 md:w-1/2">
          <h2 className="font-headline text-3xl font-bold text-on-primary-container">Join our Whisker Watch Newsletter</h2>
          <p className="font-body text-lg text-on-primary-container/80 mt-2 leading-relaxed">
            Get weekly updates on new arrivals, expert care tips, and exclusive kitty stories delivered straight to your inbox.
          </p>
        </div>
        <div className="relative z-10 w-full md:w-auto flex flex-col sm:flex-row gap-4">
          <input 
            aria-label="Email address" 
            className="bg-surface-container-lowest px-8 py-4 rounded-full border-none focus:ring-4 focus:ring-secondary/20 min-w-[300px] outline-none font-body text-on-surface" 
            placeholder="Enter your email" 
            type="email" 
          />
          <button className="bg-on-primary-container text-white px-10 py-4 rounded-full font-headline font-bold shadow-xl hover:bg-on-primary-container/90 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-surface-container-low mt-16 rounded-t-[3rem] shadow-[0_-4px_20px_-2px_rgba(0,0,0,0.03)] border-t border-outline-variant/10">
      <div className="w-full px-4 md:px-16 py-16 flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1280px] mx-auto text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-opacity cursor-pointer">
            <PawPrint className="text-primary w-6 h-6" />
            <span className="font-headline text-xl font-bold text-primary">Catsy</span>
          </div>
          <p className="font-body text-sm text-on-surface-variant max-w-sm leading-relaxed">
            © 2024 Catsy. All rights reserved. Purr-fectly crafted for cat lovers and owners worldwide.
          </p>
        </div>
        
        <nav className="flex flex-wrap justify-center gap-8">
          <Link to="/" className="font-body font-medium text-sm text-on-surface-variant hover:text-primary transition-colors">Home</Link>
          <Link to="/blog" className="font-body font-medium text-sm text-on-surface-variant hover:text-primary transition-colors">Blog</Link>
          <Link to="/gallery" className="font-body font-medium text-sm text-on-surface-variant hover:text-primary transition-colors">Gallery</Link>
          <Link to="/about" className="font-body font-medium text-sm text-on-surface-variant hover:text-primary transition-colors">About</Link>
          <a href="#" className="font-body font-medium text-sm text-on-surface-variant hover:text-primary transition-colors">Newsletter</a>
          <a href="#" className="font-body font-medium text-sm text-on-surface-variant hover:text-primary transition-colors">Privacy</a>
        </nav>
        
        <div className="flex gap-4">
          <a aria-label="Share" href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-all">
            <Share2 className="w-4 h-4" />
          </a>
          <a aria-label="Mail" href="#" className="w-10 h-10 rounded-full bg-surface flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-primary/5 transition-all">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </footer>
  );
};

// --- Pages ---

const HomePage = () => (
  <motion.div 
    initial={{ opacity: 0 }} 
    animate={{ opacity: 1 }} 
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="overflow-hidden"
  >
    <Hero />
    <CareTips />
    <AdoptionGrid />
    <BlogSection />
    <FAQ />
    <Newsletter />
  </motion.div>
);

const AboutPage = () => (
  <motion.div 
    initial={{ opacity: 0, x: 20 }} 
    animate={{ opacity: 1, x: 0 }} 
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.5 }}
    className="max-w-[1280px] mx-auto px-4 md:px-16 py-16"
  >
    <div className="bg-surface-container rounded-[3rem] p-10 md:p-20 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-3xl">
        <span className="text-primary font-bold uppercase tracking-widest text-xs mb-4 block">Our Story</span>
        <h1 className="font-headline text-5xl font-bold text-on-surface mb-8 leading-tight">
          Where Every Purr Finds a <span className="text-primary">Sun-Drenched</span> Home
        </h1>
        <p className="font-body text-lg text-on-surface-variant leading-relaxed mb-12">
          Catsy started with a simple belief: that every cat deserves more than just a roof over their head—they deserve a life filled with enrichment, sunbeams, and the perfect scratching post. 
          Founded by a team of feline behaviorists and lifelong cat lovers, we're dedicated to bridging the gap between adoption and thriving.
        </p>

        <div className="grid sm:grid-cols-2 gap-8 mb-16">
          <div className="flex gap-4">
            <div className="bg-primary/10 p-3 rounded-2xl h-fit">
              <Users className="text-primary w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-on-surface mb-2">Our Community</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                A global network of 50k+ feline fans sharing tips and stories every single day.
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="bg-secondary/10 p-3 rounded-2xl h-fit">
              <Target className="text-secondary w-6 h-6" />
            </div>
            <div>
              <h3 className="font-headline font-bold text-on-surface mb-2">Our Mission</h3>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                To reduce feline abandonment through education, enrichment, and better matching.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/20 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <Award className="text-secondary w-5 h-5" />
            <span className="font-headline font-bold text-on-surface">Certified Care Advocates</span>
          </div>
          <p className="font-body text-sm text-on-surface-variant italic leading-relaxed">
            "At Catsy, we don't just facilitate adoptions; we build lifelong partnerships between humans and their feline counterparts. Our holistic approach to cat care ensures that every home is a paradise."
          </p>
          <div className="mt-6 flex items-center gap-3">
            <div className="w-10 h-10 bg-primary-container rounded-full overflow-hidden">
               <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100&h=100" alt="Founder" />
            </div>
            <div>
              <p className="font-headline text-sm font-bold text-on-surface">Eleanor Paws</p>
              <p className="font-body text-xs text-on-surface-variant">Founder & Feline Behaviorist</p>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden lg:block absolute bottom-10 -right-20 w-[600px] h-[600px] opacity-10 pointer-events-none">
        <PawPrint className="w-full h-full text-primary" />
      </div>
    </div>
  </motion.div>
);

const BlogPage = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-[1280px] mx-auto px-4 md:px-16 py-16"
    >
      <div className="mb-16 text-center">
        <h1 className="font-headline text-5xl font-bold text-on-surface mb-4">The Feline Chronicles</h1>
        <p className="font-body text-on-surface-variant max-w-2xl mx-auto">Depth, science, and history—everything about the marvelous world of cats.</p>
      </div>

      <div className="flex justify-center mb-12 gap-4 flex-wrap">
        {["All", "Science", "History", "Behavior", "Lifestyle", "Health"].map(cat => (
          <button key={cat} className="px-6 py-2 rounded-full border border-primary/20 text-on-surface-variant font-bold text-sm hover:bg-primary/5 transition-colors">
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, idx) => (
          <Link to={`/article/${post.id}`} key={idx} className="bg-surface-container-lowest rounded-3xl overflow-hidden border border-outline-variant/10 group cursor-pointer hover:shadow-2xl transition-all duration-500">
            <div className="aspect-[16/10] overflow-hidden">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-8 flex flex-col h-full">
              <div className="flex justify-between items-center mb-4">
                <span className="text-secondary font-bold text-xs uppercase tracking-widest">{post.category}</span>
                <span className="text-on-surface-variant text-xs">{post.date}</span>
              </div>
              <h2 className="font-headline text-2xl font-bold text-on-surface mb-4 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="font-body text-sm text-on-surface-variant line-clamp-3 mb-6 leading-relaxed flex-grow">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between pt-6 border-t border-outline-variant/10">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center font-bold text-[10px] text-primary">{post.author[0]}</div>
                  <span className="text-xs font-bold text-on-surface">{post.author}</span>
                </div>
                <span className="text-xs text-on-surface-variant">{post.readTime}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

const GalleryPage = () => {
  const exhibits = [
    {
      title: "The Midnight Philosopher",
      story: "A study in nocturnal concentration. This subject spent four hours observing a rogue dust mote with the intensity of a grandmaster playing chess.",
      image: "https://images.unsplash.com/photo-1511044562460-24b483492067?auto=format&fit=crop&q=80&w=800&h=1000",
      artist: "Luna Shadow-Tail",
      year: "2024"
    },
    {
      title: "Abstract Zoomie #42",
      story: "Captured at 3:00 AM. The artist explores the boundaries of physics, velocity, and the structural integrity of the living room curtains.",
      image: "https://images.unsplash.com/photo-1513245533132-aa7f8e72620f?auto=format&fit=crop&q=80&w=800&h=600",
      artist: "Max Velocity",
      year: "2023"
    },
    {
      title: "Eternal Sunbeam",
      story: "A minimalist masterpiece. The subject achieves perfect thermal equilibrium using only a single patch of light and a linen pillow.",
      image: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&q=80&w=800&h=800",
      artist: "Solstice Paws",
      year: "2024"
    },
    {
      title: "The Judgemental Sphynx",
      story: "An exploration of texture and silence. You have failed the subject. They do not know how, but you have failed.",
      image: "https://images.unsplash.com/photo-1520315342629-6ea920342248?auto=format&fit=crop&q=80&w=800&h=1000",
      artist: "Ancient Whispers",
      year: "2022"
    },
    {
      title: "Kitchen Counter Explorer",
      story: "A vertical narrative. Defying the laws of 'Stay Down,' the subject reaches new heights in search of the forbidden tuna.",
      image: "https://images.unsplash.com/photo-1516750105099-4b8a83e217ee?auto=format&fit=crop&q=80&w=800&h=600",
      artist: "Sky-Climber",
      year: "2024"
    },
    {
      title: "Reflection of the Void",
      story: "Looking into the water bowl, the subject sees not water, but the vast, empty mysteries of the universe—mostly involving dinner time.",
      image: "https://images.unsplash.com/photo-1478098711619-5af0b412656d?auto=format&fit=crop&q=80&w=800&h=1000",
      artist: "Deep Paws",
      year: "2024"
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-[#1a1816] min-h-screen py-20"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-16">
        <div className="mb-24 text-center border-b border-white/10 pb-20">
          <span className="text-secondary font-headline uppercase tracking-[0.3em] text-sm mb-6 block">Exhibition: Feline Essence</span>
          <h1 className="font-headline text-6xl md:text-8xl font-bold text-white mb-10 leading-none">
            Museum of <span className="text-primary italic">Whiskers</span>
          </h1>
          <p className="font-body text-white/60 max-w-2xl mx-auto leading-relaxed text-lg">
            A curated multisensory journey through the silent language and profound presence of the modern cat.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-12 space-y-24">
          {exhibits.map((art, idx) => (
            <motion.div 
              key={idx} 
              className="break-inside-avoid relative group"
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="p-12 bg-[#25221f] border-[20px] border-[#2c2926] shadow-2xl relative overflow-hidden">
                {/* Spotlight effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <img src={art.image} alt={art.title} className="w-full grayscale group-hover:grayscale-0 transition-all duration-1000 select-none shadow-inner" />
              </div>
              
              <div className="mt-10 pl-6 border-l-2 border-primary/40 max-w-sm text-left">
                <h3 className="font-headline text-white text-2xl font-bold mb-3">{art.title}</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed mb-6 italic">
                  "{art.story}"
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="text-primary font-bold text-sm">{art.artist}</p>
                    <p className="text-white/30 text-xs">{art.year}</p>
                  </div>
                  <div className="px-3 py-1 border border-white/10 rounded-full">
                     <span className="text-white/20 text-[10px] uppercase tracking-widest font-bold">Exhibit #{idx + 100}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-40 text-center border-t border-white/5 pt-20">
          <button className="px-12 py-5 bg-white text-black font-headline font-bold text-lg rounded-full hover:bg-primary hover:text-white transition-all transform hover:scale-105 active:scale-95">
             Curate Your Own Collection
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// --- Main App ---

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-primary-container/30">
        <Header />
        <main>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/article/:id" element={<ArticlePage />} />
              <Route path="/adopt" element={<AdoptPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
