
import React from 'react';

const SERVICES = [
  {
    id: "MOD-01",
    title: "하도급 분쟁 조사",
    description: "복잡하게 얽힌 계약 조건과 현장 실행 자료의 괴리를 공학적 관점에서 재구성하여 승소를 위한 실질적 논리를 구축합니다.",
    meta: "CONTRACT_LOGIC",
    tags: ["Evidence", "Audit"],
    spec: "ISO-9001 COMPLIANT"
  },
  {
    id: "MOD-02",
    title: "공기 및 공사비 검토",
    description: "지연의 진짜 원인이 누구에게 있는지, 설계 변경에 따른 추가 비용은 적정한지 '데이터'로 산정하여 분쟁의 기준점을 제시합니다.",
    meta: "COST_PRECISION",
    tags: ["CPM", "Budget"],
    spec: "DATA_VERIFIED"
  },
  {
    id: "MOD-03",
    title: "현장 기술검토·의견조정",
    description: "기술적 견해 차이로 멈춰선 현장에서 설계와 시공의 불일치를 판별하고, 이해관계자 모두가 납득할 수 있는 공학적 합의안을 도출합니다.",
    meta: "TECH_MEDIATION",
    tags: ["Compliance", "Site"],
    spec: "NEUTRAL_STAND"
  },
  {
    id: "MOD-04",
    title: "저온저장고 설비 기술분석",
    description: "냉각 시스템의 미세한 성능 편차까지 정밀 계측·검증하여 설계 기준, 시공 상태, 운전 조건을 종합 분석합니다.",
    meta: "GEO_SAFETY",
    tags: ["Geotechnical", "Risk"],
    spec: "REALTIME_MONITOR"
  },
  {
    id: "MOD-05",
    title: "소송 전 협상 지원",
    description: "소송의 장기화와 막대한 비용을 피하기 위해, 상대방의 기술적 오류를 날카롭게 지적하는 근거 자료로 조기 종결을 유도합니다.",
    meta: "STRATEGIC_PREB",
    tags: ["Settlement", "Legal"],
    spec: "WIN_LOGIC_SYNC"
  },
  {
    id: "MOD-06",
    title: "송무 지원 / 건설감정",
    description: "대한민국 법원 감정 실무의 정수를 담은 보고서로, 판결의 결정적 증거가 되는 감정 결과를 공학적 무결성으로 뒷받침합니다.",
    meta: "COURT_EXPERT",
    tags: ["Appraisal", "Forensic"],
    spec: "SUPREME_COURT_STD"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-[#F8FAFC] relative overflow-hidden">
      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header - Engineering Layout */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-12 mb-24 border-l-4 border-blue-600 pl-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-600 font-black text-[10px] uppercase tracking-[0.4em]">Operational Framework</span>
              <div className="h-px flex-grow bg-blue-100" />
            </div>
            {/* 타이틀 크기 축소: 5xl/7xl -> 4xl/6xl */}
            <h3 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter leading-[0.9] mb-8">
              PRECISION<br />
              <span className="text-blue-600">FORENSICS</span>
            </h3>
            {/* 설명 문구 크기 축소: lg/xl -> base/lg */}
            <p className="text-slate-500 font-bold text-base md:text-lg leading-relaxed break-keep">
              모호한 주장이 아닌, 공학적 준거와 실증 데이터를 통해<br />
              건설 분쟁의 핵심을 관통하는 6가지 분석 모듈입니다.
            </p>
          </div>
          <div className="hidden lg:block text-right">
            <div className="text-[120px] font-black text-slate-100 leading-none select-none">06</div>
            <p className="text-[11px] font-black text-slate-300 uppercase tracking-[0.6em] -mt-8">Certified Modules</p>
          </div>
        </div>

        {/* Blueprint Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-200 border border-slate-200 shadow-2xl">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              className="group relative bg-white p-12 md:p-16 transition-all duration-500 hover:z-20 overflow-hidden"
            >
              {/* Module Header 제거 (MOD 넘버 및 Active 표시 제거) */}
              <div className="mb-8" />

              {/* Module Title */}
              <div className="relative mb-8">
                <h4 className="text-2xl font-black text-slate-900 leading-tight tracking-tight break-keep group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h4>
                <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-8 h-px bg-slate-100 group-hover:bg-blue-600 transition-all duration-500 group-hover:w-12" />
              </div>

              {/* Module Content */}
              <p className="text-slate-500 text-sm font-bold leading-relaxed mb-12 break-keep opacity-80 group-hover:opacity-100 transition-opacity min-h-[80px]">
                {service.description}
              </p>

              {/* Tags & Meta */}
              <div className="flex flex-wrap items-center gap-4 pt-8 border-t border-slate-50">
                <div className="flex flex-wrap gap-2 flex-grow">
                  {service.tags.map((tag, i) => (
                    <span key={i} className="text-[9px] font-black text-slate-400 uppercase tracking-widest bg-slate-50 px-2 py-1 group-hover:text-blue-600 transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-[10px] font-mono font-bold text-slate-200 group-hover:text-blue-100 transition-colors">
                  {service.meta}
                </span>
              </div>

              {/* Hover Interaction: Technical Scan Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-blue-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out" />
              <div className="absolute bottom-0 left-0 w-1.5 h-0 bg-blue-600 group-hover:h-full transition-all duration-700 ease-in-out delay-100" />

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-12 h-12 border-r border-t border-slate-100 group-hover:border-blue-600 transition-colors pointer-events-none" />
            </div>
          ))}
        </div>

        {/* Section Footer */}
        <div className="mt-20 flex flex-col md:flex-row items-center justify-between gap-8 opacity-30">
          <div className="flex gap-1">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1 h-4 bg-slate-300" />
            ))}
          </div>
          <span className="text-[9px] font-black uppercase tracking-[1em]">Forensic Protocol Synchronized 2025</span>
          <div className="flex gap-1">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-1 h-4 bg-slate-300" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
