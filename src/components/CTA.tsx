import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-24 px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-r from-primary to-accent p-12 md:p-20 text-center text-white relative overflow-hidden shadow-2xl"
      >
        {/* Decorative Circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight">
            Ready to Transform <br /> Campus Events?
          </h2>
          <p className="text-lg md:text-xl opacity-90 mb-12 max-w-2xl mx-auto">
            Join thousands of students and dozens of societies already using EventSphere to power their campus life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-primary px-10 py-5 rounded-2xl font-bold text-lg hover:bg-slate-100 transition-colors flex items-center justify-center gap-2 group">
              Login as Student
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="bg-primary/20 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2">
              Society Admin Portal
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
