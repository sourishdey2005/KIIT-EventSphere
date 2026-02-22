import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';

const stats = [
  { label: 'Students', value: 10000, suffix: '+' },
  { label: 'Societies', value: 50, suffix: '+' },
  { label: 'Events', value: 500, suffix: '+' },
  { label: 'Campus Coverage', value: 100, suffix: '%' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-accent opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <h3 className="text-4xl md:text-6xl font-bold tracking-tighter">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-sm md:text-base font-medium opacity-80 uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
