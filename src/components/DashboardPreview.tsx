import React from 'react';
import { motion } from 'motion/react';
import { LayoutDashboard, Calendar, BarChart, Users, Bell } from 'lucide-react';

export default function DashboardPreview() {
  return (
    <section id="dashboard" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Designed for Performance & Simplicity</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Experience a dashboard that brings clarity to campus chaos. Whether you're a student looking for the next big hackathon or a society head managing hundreds of registrations, our interface is built for you.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: LayoutDashboard, title: 'Intuitive Sidebar', desc: 'Quick access to all your tools and portals.' },
                { icon: Calendar, title: 'Interactive Calendar', desc: 'Never miss an event with auto-sync features.' },
                { icon: BarChart, title: 'Real-time Analytics', desc: 'Track participation and growth effortlessly.' },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-3xl p-4 shadow-2xl overflow-hidden border-2 border-primary/10">
              <img
                src="https://res.cloudinary.com/dodhvvewu/image/upload/v1771786635/4cfc3370-ac61-4134-a9f4-30a7b33b20eb_q7w2jy.png"
                alt="Dashboard Performance Mockup"
                className="rounded-2xl w-full shadow-lg"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
