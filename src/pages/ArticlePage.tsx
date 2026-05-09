import { motion } from "motion/react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data/blogPosts";
import ReactMarkdown from "react-markdown";
import { Clock, Calendar, ArrowLeft, Share2, Facebook, Twitter } from "lucide-react";

export const ArticlePage = () => {
  const { id } = useParams();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="font-headline text-3xl font-bold mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-primary font-bold">Back to Blog</Link>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="pb-20"
    >
      <div className="w-full h-[60vh] relative">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent"></div>
        <Link to="/blog" className="absolute top-10 left-4 md:left-16 bg-white/90 backdrop-blur-md p-3 rounded-full shadow-xl hover:scale-105 transition-transform flex items-center gap-2 font-bold text-sm text-on-surface">
          <ArrowLeft className="w-4 h-4" /> Back to Blog
        </Link>
      </div>

      <div className="max-w-[800px] mx-auto px-4 -mt-32 relative z-10">
        <div className="bg-surface rounded-[2rem] p-8 md:p-16 shadow-2xl border border-outline-variant/10">
          <div className="flex flex-wrap gap-4 mb-8">
            <span className="bg-secondary/15 text-secondary px-4 py-1 rounded-full font-bold text-xs uppercase tracking-wider">
              {post.category}
            </span>
            <div className="flex items-center gap-4 text-on-surface-variant font-medium text-xs">
              <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.readTime}</span>
              <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> {post.date}</span>
            </div>
          </div>

          <h1 className="font-headline text-4xl md:text-5xl font-bold text-on-surface mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 mb-12 pb-12 border-b border-outline-variant/20">
            <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary">
              {post.author[0]}
            </div>
            <div>
              <p className="font-headline font-bold text-on-surface">{post.author}</p>
              <p className="font-body text-xs text-on-surface-variant">Contributor & Cat Enthusiast</p>
            </div>
          </div>

          <div className="prose prose-lg max-w-none font-body text-on-surface-variant leading-relaxed">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          <div className="mt-16 pt-12 border-t border-outline-variant/20">
            <h3 className="font-headline font-bold text-on-surface mb-6">Share this article</h3>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-6 py-3 bg-surface-container-high rounded-full font-bold text-sm hover:bg-primary/10 hover:text-primary transition-all">
                <Share2 className="w-4 h-4" /> Share
              </button>
              <button className="p-3 bg-surface-container-high rounded-full hover:bg-primary/10 hover:text-primary transition-all">
                <Twitter className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-primary-container/20 rounded-[2rem] p-8 md:p-12 text-center">
            <h2 className="font-headline text-2xl font-bold text-on-surface mb-4">Want more cat stories?</h2>
            <p className="font-body text-on-surface-variant mb-6 text-sm">Join 50,000+ feline lovers in our weekly newsletter.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input placeholder="Your email" className="px-6 py-3 rounded-full bg-surface-container flex-grow outline-none border-none" />
                <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-bold">Join</button>
            </div>
        </div>
      </div>
    </motion.div>
  );
};
