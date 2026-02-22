import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Play, Users, Calendar, ShieldCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl -z-10 animate-pulse" style={{ animationDelay: '2s' }} />
      
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
            Exclusively for @kiit.ac.in students
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
          <div className="relative z-10 glass rounded-3xl p-4 shadow-2xl animate-float">
            <img
              src="https://res.cloudinary.com/dodhvvewu/image/upload/v1771785761/8570ced1-ad32-4be0-9997-00acffa2b4b5_kstigy.png"
              alt="EventSphere Dashboard Mockup"
              className="rounded-2xl w-full shadow-lg"
              referrerPolicy="no-referrer"
            />
            
            {/* Floating Elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-6 -right-6 glass p-4 rounded-2xl shadow-xl hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center text-green-600">
                  <Calendar size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold">New Registration</p>
                  <p className="text-[10px] opacity-60">Kritansh just joined!</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
              className="absolute -bottom-6 -left-6 glass p-4 rounded-2xl shadow-xl hidden sm:block"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                  <Users size={20} />
                </div>
                <div>
                  <p className="text-xs font-bold">50+ Societies</p>
                  <p className="text-[10px] opacity-60">Active this week</p>
                </div>
              </div>
            </motion.div>
          </div>
          
          {/* Decorative Ring */}
          <div className="absolute -inset-4 border-2 border-primary/20 rounded-[40px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
