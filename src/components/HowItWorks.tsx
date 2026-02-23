import React from 'react';
import { motion } from 'motion/react';
import { PlusCircle, UserPlus, QrCode, BarChart3 } from 'lucide-react';

const steps = [
  {
    title: 'Society Creates Event',
    description: 'Admins set up event details, dates, and registration limits.',
    icon: PlusCircle,
  },
  {
    title: 'Students Register',
    description: 'Students browse and join events with a single click.',
    icon: UserPlus,
  },
  {
    title: 'QR Check-in',
    description: 'Instant attendance tracking using dynamic QR codes.',
    icon: QrCode,
  },
  {
    title: 'Analytics & Insights',
    description: 'Get detailed reports on participation and engagement.',
    icon: BarChart3,
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-muted-foreground">The seamless flow of event management on EventSphere.</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border -translate-y-1/2 hidden lg:block" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-background border-4 border-primary flex items-center justify-center mb-6 shadow-lg group hover:scale-110 transition-transform">
                  <step.icon size={32} className="text-primary" />
                </div>
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center border-4 border-background">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
