"use client";
import { Monitor, Smartphone, Code2, Rocket } from 'lucide-react';

export default function Services() {
  const services = [
    { title: 'Web Development', desc: 'Building responsive and modern websites.', icon: <Monitor size={32} strokeWidth={1.5} /> },
    { title: 'UI/UX Design', desc: 'Designing clean and user friendly interfaces.', icon: <Smartphone size={32} strokeWidth={1.5} /> },
    { title: 'Frontend Development', desc: 'Creating interactive and dynamic user interfaces.', icon: <Code2 size={32} strokeWidth={1.5} /> },
    { title: 'Performance Optimization', desc: 'Improving website speed and overall performance.', icon: <Rocket size={32} strokeWidth={1.5} /> }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="flex flex-col items-center mb-12">
          <h2 className="text-sm font-bold text-black uppercase tracking-widest mb-1">WHAT I DO</h2>
          <div className="w-16 h-1 bg-purple-600 rounded"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <div key={idx} className="bg-white rounded-xl p-8 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-gray-50 flex flex-col items-center text-center hover:-translate-y-1 transition-transform">
              <div className="text-purple-600 mb-5">
                {service.icon}
              </div>
              <h3 className="font-bold text-black text-sm mb-3">{service.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
