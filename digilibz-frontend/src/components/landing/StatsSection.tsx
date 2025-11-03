'use client';
import { useEffect, useState } from 'react';

interface Stat {
  value: number;
  suffix?: string;
  label: string;
}

export default function StatsSection() {
  const stats: Stat[] = [
    { value: 10000, suffix: '+', label: 'Books Available' },
    { value: 5000, suffix: '+', label: 'Active Users' },
    { value: 50000, suffix: '+', label: 'Books Borrowed' },
    { value: 98, suffix: '%', label: 'Satisfaction Rate' },
  ];

  return (
    <section className="py-20 bg-linear-to-r from-primary-600 to-primary-800 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_center,white_0%,transparent_70%)] blur-3xl"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <AnimatedStat key={index} stat={stat} delay={index * 150} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedStat({ stat, delay }: { stat: Stat; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = stat.value;
    const duration = 2000; // 2 seconds
    const increment = end / (duration / 16);

    const timeout = setTimeout(() => {
      const step = () => {
        start += increment;
        if (start < end) {
          setCount(Math.floor(start));
          requestAnimationFrame(step);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(step);
    }, delay);

    return () => clearTimeout(timeout);
  }, [stat.value, delay]);

  return (
    <div
      className="text-center transform transition-all duration-500 hover:scale-105 animate-fadeInUp"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="text-4xl md:text-5xl font-bold text-white mb-2 drop-shadow-lg">
        {count.toLocaleString()}
        {stat.suffix}
      </div>
      <div className="text-primary-100 font-medium tracking-wide">{stat.label}</div>
    </div>
  );
}
