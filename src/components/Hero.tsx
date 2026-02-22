import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronRight, Play, Users, Calendar, ShieldCheck } from 'lucide-react';

const images = [
  "https://res.cloudinary.com/dodhvvewu/image/upload/v1771785761/8570ced1-ad32-4be0-9997-00acffa2b4b5_kstigy.png",
  "https://res.cloudinary.com/dodhvvewu/image/upload/v1771786635/4cfc3370-ac61-4134-a9f4-30a7b33b20eb_q7w2jy.png"
];

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10 animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/3 right-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '3s' }} />
      <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-orange-400/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '4s' }} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:opacity-[0.05] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
            <ShieldCheck size={14} />
            KIITians
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Powering Every <br />
            <span className="gradient-text">Event at KIIT</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-10 max-w-xl leading-relaxed">
            One unified platform for students, societies, and administrators to create, manage, and experience campus events seamlessly.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="gradient-button px-8 py-4 rounded-2xl flex items-center justify-center gap-2 group">
              Get Started
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 rounded-2xl border border-border hover:bg-muted transition-colors flex items-center justify-center gap-2">
              <Play size={18} fill="currentColor" />
              Explore Events
            </button>
          </div>

          <div className="mt-12 flex items-center gap-6 opacity-60 grayscale hover:grayscale-0 transition-all">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  src={`https://picsum.photos/seed/${i + 10}/100/100`}
                  className="w-10 h-10 rounded-full border-2 border-background"
                  alt="User"
                  referrerPolicy="no-referrer"
                />
              ))}
            </div>
            <p className="text-sm font-medium">Joined by 10,000+ students</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 glass rounded-3xl p-4 shadow-2xl animate-float overflow-hidden h-[300px] sm:h-[450px]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                alt="KIIT EventSphere Dashboard Mockup"
                className="rounded-2xl w-full h-full object-cover shadow-lg"
                referrerPolicy="no-referrer"
              />
            </AnimatePresence>
          </div>
          
          {/* Decorative Ring */}
          <div className="absolute -inset-4 border-2 border-primary/20 rounded-[40px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
