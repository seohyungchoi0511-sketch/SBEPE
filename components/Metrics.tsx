
import React from 'react';

const METRICS = [
  { label: "창립 연도", value: "2002", sub: "Since" },
  { label: "감정 처리", value: "300+", sub: "Cases" },
  { label: "핵심 분야", value: "6", sub: "Areas" },
  { label: "지원 단계", value: "3", sub: "Steps" },
];

const Metrics: React.FC = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {METRICS.map((m, idx) => (
            <div key={idx} className="p-10 rounded-none bg-slate-50 border border-slate-100 flex flex-col items-center text-center group hover:bg-white hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-3">{m.label}</span>
              <div className="text-5xl md:text-6xl font-black text-slate-900 mb-3 tracking-tighter group-hover:text-blue-600 transition-colors">
                {m.value}
              </div>
              <span className="px-3 py-1 rounded-none bg-blue-100 text-[10px] text-blue-600 font-bold uppercase tracking-wider">{m.sub}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;
