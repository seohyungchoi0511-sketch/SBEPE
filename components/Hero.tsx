
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-32 pb-24 overflow-hidden bg-white">
      {/* Background Static Image */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-slate-50" 
          style={{ 
            backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=80')`
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        <div className="absolute inset-0 bg-blue-50/30" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-4xl space-y-8">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.3] tracking-tight">
            쟁점을 구조화하고<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-500">근거로 설득합니다.</span>
          </h2>

          <p className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed font-light tracking-wide">
            서울건축환경기술사사무소는 하도급 분쟁 조사부터 공사비 검토까지<br />
            건설분쟁 전 과정을 공학적 전문성으로 종합 지원합니다.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
