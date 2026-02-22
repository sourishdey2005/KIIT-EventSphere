import React from 'react';
import { motion } from 'motion/react';
import { Lock, ShieldCheck, UserCheck, Key } from 'lucide-react';

const securityFeatures = [
  { icon: ShieldCheck, title: 'Verified Domains', desc: 'Only @kiit.ac.in students allowed.' },
  { icon: UserCheck, title: 'Approved Admins', desc: 'Only verified society heads can manage.' },
  { icon: Key, title: 'JWT Auth', desc: 'Secure token-based authentication system.' },
  { icon: Lock, title: 'Role-Based Access', desc: 'Custom dashboards for every user type.' },
];

export default function Security() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="w-full aspect-square max-w-md mx-auto relative">
              <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse" />
              <div className="absolute inset-10 bg-primary/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-48 h-48 bg-background rounded-3xl shadow-2xl flex items-center justify-center border-4 border-primary">
                  <Lock size={80} className="text-primary animate-bounce" />
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Secure & Role-Based Access</h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              Security is at the heart of EventSphere. We ensure that only authorized members of the KIIT community can access the platform, keeping your data and events safe.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {securityFeatures.map((feature) => (
                <div key={feature.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <feature.icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{feature.title}</h4>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
