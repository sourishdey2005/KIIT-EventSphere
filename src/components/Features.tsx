import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Landmark, Settings, CheckCircle2 } from 'lucide-react';

const features = [
  {
    title: 'Smart Student Experience',
    icon: GraduationCap,
    color: 'bg-blue-500',
    description: 'Everything a student needs to stay updated with campus life.',
    items: ['Browse events', 'One-click registration', 'Auto calendar sync', 'QR entry pass'],
  },
  {
    title: 'Society Admin Dashboard',
    icon: Landmark,
    color: 'bg-orange-500',
    description: 'Powerful tools for societies to manage their presence and events.',
    items: ['Create & manage events', 'View participants', 'Export lists', 'Analytics insights'],
  },
  {
    title: 'Administrative Control',
    icon: Settings,
    color: 'bg-indigo-500',
    description: 'Complete oversight for university administrators and deans.',
    items: ['Approve societies', 'Monitor engagement', 'Platform analytics', 'Security controls'],
  },
];

export default function Features() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mb-4"
          >
            Everything You Need to Manage Campus Events
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1, duration: 0.8 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A comprehensive suite of tools designed to streamline event management for everyone in the university ecosystem.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="bg-background border rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all group"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground mb-8 text-sm leading-relaxed">
                {feature.description}
              </p>
              <ul className="space-y-3">
                {feature.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium">
                    <CheckCircle2 size={18} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
