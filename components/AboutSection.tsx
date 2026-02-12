
import React from 'react';

const METRICS = [
  { label: "창립 연도", value: "2002", sub: "Since" },
  { label: "감정 처리", value: "300+", sub: "Cases" },
  { label: "핵심 분야", value: "9", sub: "Areas" },
  { label: "지원 단계", value: "4", sub: "Steps" },
];

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-5xl mx-auto">

          <div className="flex flex-col items-center text-center mb-16">
            <div className="flex items-center gap-6 mb-6 w-full">
              <span className="flex-grow h-px bg-slate-200" />
              <span className="text-xs font-bold text-blue-600 uppercase tracking-[0.5em] whitespace-nowrap">
                Key Performance Indicators
              </span>
              <span className="flex-grow h-px bg-slate-200" />
            </div>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {METRICS.map((item, idx) => (
              <div
                key={idx}
                className="group p-8 md:p-12 rounded-none bg-slate-50 border border-slate-100 flex flex-col items-center text-center transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2"
              >
                <span className="text-xs md:text-sm font-medium text-slate-400 uppercase tracking-widest mb-4">
                  {item.label}
                </span>
                <div className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors">
                  {item.value}
                </div>
                <div className="px-4 py-1.5 rounded-none bg-blue-100/50 text-[10px] md:text-xs text-blue-600 font-bold uppercase tracking-widest">
                  {item.sub}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center">
            <p className="text-xs font-bold text-slate-300 uppercase tracking-[0.6em] border-t border-slate-100 pt-8 inline-block px-12">
              Comprehensive Engineering & Forensic Services
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
