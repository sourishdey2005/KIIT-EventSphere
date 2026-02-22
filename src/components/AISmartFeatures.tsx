import React from 'react';
import { motion } from 'motion/react';
import { Bot, BellRing, PieChart, QrCode } from 'lucide-react';

const smartFeatures = [
  {
    title: 'Smart Event Recommendations',
    icon: Bot,
    desc: 'AI-driven suggestions based on your interests and past participation.',
  },
  {
    title: 'Automated Reminders',
    icon: BellRing,
    desc: 'Never miss a deadline with smart notifications and calendar alerts.',
  },
  {
    title: 'Participation Analytics',
    icon: PieChart,
    desc: 'Deep insights into event performance and student engagement trends.',
  },
  {
    title: 'QR Attendance System',
    icon: QrCode,
    desc: 'Fast, secure, and paperless check-ins for every campus event.',
  },
];

export default function AISmartFeatures() {
  return (
    <section className="py-24 bg-background-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold mb-4"
          >
            Built with Intelligence
          </motion.h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Leveraging modern technology to make campus life smarter and more efficient.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {smartFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-slate-900 border border-slate-800 hover:border-primary/50 transition-colors group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <feature.icon size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
