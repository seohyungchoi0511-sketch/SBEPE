
import React from 'react';

interface CompanyPageProps {
  onNavigate: (view: 'home' | 'company' | 'ceo' | 'projects' | 'news') => void;
}

const CompanyPage: React.FC<CompanyPageProps> = ({ onNavigate }) => {
  return (
    <div className="relative bg-[#FDFDFD] pt-32 pb-40 min-h-screen overflow-hidden">
      {/* Precision Blueprint Grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)', backgroundSize: '50px 50px' }} />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Navigation */}
        <div className="mb-20">
          <button
            onClick={() => onNavigate('home')}
            className="group flex items-center gap-3 text-slate-400 hover:text-blue-600 transition-all"
          >
            {/* 버튼 또한 사각형으로 변경 */}
            <div className="w-10 h-10 rounded-none bg-white shadow-sm border border-slate-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <span className="text-sm">←</span>
            </div>
            <span className="font-bold text-[11px] uppercase tracking-[0.2em]">Return to Core</span>
          </button>
        </div>

        {/* Hero Title */}
        <div className="relative mb-24">
          <div className="flex items-center gap-4 mb-6">
            <span className="h-[2px] w-12 bg-blue-600 rounded-none" />
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">Company Profile</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-4">
            서울건축환경기술사사무소<br />
            <span className="text-slate-300">CORE IDENTITY</span>
          </h2>
        </div>

        {/* Compact Certificates (Changed to Sharp Rectangle) */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-40">
          <div className="group relative w-48 md:w-56 aspect-[3/4] bg-white rounded-none shadow-lg border border-slate-200 overflow-hidden transform -rotate-2 hover:rotate-0 transition-all duration-500">
            <img
              src="/images/certificates/SBEPE1.jpg"
              alt="Registration Certificate"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300 pointer-events-none" />
          </div>
          <div className="group relative w-auto max-w-xs bg-white rounded-none shadow-lg border border-slate-200 overflow-hidden transform rotate-2 hover:rotate-0 transition-all duration-500">
            <img
              src="/images/certificates/SBEPE2.jpg"
              alt="National Agency License"
              className="block w-full h-auto max-h-[400px] object-contain"
            />
            <div className="absolute inset-0 bg-blue-900/0 group-hover:bg-blue-900/10 transition-colors duration-300 pointer-events-none" />
          </div>
        </div>

        {/* --- Narrative Section: Sequential Chapters --- */}
        <div className="max-w-5xl mx-auto space-y-32">

          {/* Chapter 01: Foundation & History (Changed to rounded-none) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <span className="text-[64px] font-black text-slate-100 leading-none block mb-2">01</span>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">설립 및 연혁</h3>
              <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-2">The Foundation</p>
            </div>
            <div className="md:col-span-8 p-10 bg-slate-50 border border-slate-100 rounded-none">
              <p className="text-lg text-slate-700 leading-relaxed break-keep">
                <span className="font-bold text-slate-900">(주)서울건축환경기술사사무소</span>는 2002년 6월 기술사법 제6조 1항에 의하여 건설분야 기술사사무소로 설립되었습니다. 서울고등법원, 서울중앙지방법원, 서울남부지방법원의 건설 감정업무를 수행하며 대한민국 건설 공학의 신뢰를 쌓아왔으며, 2023년 전문성을 더욱 강화하기 위해 별내역 파라곤스퀘어로 이전하며 새로운 도약을 시작했습니다.
              </p>
            </div>
          </div>

          {/* Chapter 02: Honors & Awards (Changed to rounded-none) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4 md:order-last text-right">
              <span className="text-[64px] font-black text-slate-100 leading-none block mb-2">02</span>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">국가적 공신력</h3>
              <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-2">Merit & Recognition</p>
            </div>
            <div className="md:col-span-8 p-10 bg-white shadow-2xl shadow-blue-500/5 border border-blue-50 rounded-none relative overflow-hidden">
              <p className="text-lg text-slate-700 leading-relaxed break-keep relative z-10">
                2006년 2월, 과학기술진흥과 국가산업기술발전에 기여한 공로를 인정받아 <span className="text-blue-600 font-bold">제5회 기술사의 날 부총리 겸 과학기술부 장관상</span>을 수상하였습니다. 이어 2007년 서울지방국토관리청장 표창, 2008년 경기도 남양주시장 표창 등을 수훈하며 지역사회와 국가 건설 기술 발전에 기여하는 공공의 가치를 증명해 왔습니다.
              </p>
            </div>
          </div>

          {/* Chapter 03: Vision & Business (Changed to rounded-none) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4">
              <span className="text-[64px] font-black text-slate-100 leading-none block mb-2">03</span>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">사업 분야 및 비전</h3>
              <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-2">Vision & Expertise</p>
            </div>
            <div className="md:col-span-8 p-10 bg-slate-50 border border-slate-100 rounded-none space-y-8">
              <p className="text-lg text-slate-700 leading-relaxed break-keep">
                건설감정의 선두주자로서 당사는 법원감정, 건설사업관리, VE 등 고도의 전문성이 요구되는 분야에 역량을 집중하고 있습니다. 창립 10주년을 넘어 이제는 <span className="text-blue-600 font-bold">글로벌 종합 엔지니어링 그룹</span>으로 도약하기 위해 공학적 진실과 기술적 정의를 실현해 나가고 있습니다.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {['법원감정', '건설크레임', '하자진단 및 조사', '건설사업관리', '가치관리(VE)'].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="w-1 h-1 rounded-none bg-blue-600" />
                    <span className="text-sm font-bold text-slate-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Chapter 04: Social Leadership (Changed to rounded-none) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
            <div className="md:col-span-4 md:order-last text-right">
              <span className="text-[64px] font-black text-slate-100 leading-none block mb-2">04</span>
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight">사회적 책무와 리더십</h3>
              <p className="text-[10px] text-blue-600 font-bold uppercase tracking-widest mt-2">Social Values</p>
            </div>
            <div className="md:col-span-8 p-10 bg-white shadow-2xl shadow-blue-500/5 border border-blue-50 rounded-none space-y-8">
              <p className="text-lg text-slate-700 leading-relaxed break-keep">
                유병호 대표기술사는 소비자분쟁조정위원회 위원, 건설개혁시민연대 상임대표 등을 역임하며 <span className="text-blue-600 font-bold">'사회 참여형 기술사'</span>로서의 행보를 이어가고 있습니다. 소비자 주권운동과 부실공사 방지 시민운동을 통해 공학적 전문성이 사회적 정의로 발현될 수 있도록 헌신하고 있습니다.
              </p>
              <div className="flex flex-wrap gap-2">
                {['법원행정처 전문심리위원', '남양주시 평생학습실무위원', '부실공사방지 운동'].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 rounded-none text-[10px] font-bold text-slate-500 border border-slate-100">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer Accent */}
        <div className="mt-40 text-center">
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-none" />
          <p className="text-[10px] font-black text-slate-200 uppercase tracking-[1em]">
            Precision Engineering Ethics
          </p>
        </div>

      </div>
    </div>
  );
};

export default CompanyPage;
