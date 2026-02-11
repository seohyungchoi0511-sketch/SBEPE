
import React from 'react';


const LICENSES = [
  { title: "건축시공기술사", en: "PROFESSIONAL ENGINEER ARCHITECTURE EXECUTION", badge: "P.E" },
  { title: "건축기계설비기술사", en: "P.E. BUILDING MECHANICAL SERVICE", badge: "P.E" },
  { title: "공조냉동기계기술사", en: "P.E. AIR-CONDITIONING REFRIGERATING MACHINERY", badge: "P.E" },
  { title: "건설사업관리사", en: "CERTIFIED CONSTRUCTION MANAGER", badge: "CMP" },
];

const HONORS = [
  { year: "2016", title: "경기도지사 유공 표창 수상", dept: "경기도청" },
  { year: "2015", title: "경인인물대상(봉사부문) 수상", dept: "경인일보" },
  { year: "2007", title: "서울지방국토관리청장 표창", dept: "서울지방국토관리청" },
  { year: "2006", title: "과학기술부 장관 표창 수상", dept: "한국과학기술단체총연합회" },
  { year: "기타", title: "외 다수 수상 및 표창", dept: "관련 공공기관 및 협회" },
];

const LEADERSHIP = [
  "서울특별시 원가분석자문회의 심사위원",
  "중소벤처기업부 기술분쟁 조정위원",
  "인천광역시 건설기술심의위원회 위원",
  "법원행정처 전문심리위원",
  "대한상사중재원 조정위원",
  "한국소비자원 소비자분쟁조정위원회 위원"
];

const CEOSection: React.FC = () => {
  return (
    <section id="ceo" className="py-32 bg-[#070A12] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: CEO Profile & Message */}
          <div className="lg:col-span-6 space-y-12">
            <div className="space-y-6">
              <h3 className="text-sm font-bold text-blue-400 uppercase tracking-[0.2em]">CEO Message</h3>
              <h4 className="text-4xl md:text-5xl font-black text-white leading-tight tracking-tight">
                기술적 진실이<br />
                <span className="text-white/40">분쟁 해결의 유일한 열쇠입니다.</span>
              </h4>
            </div>

            <div className="space-y-6 text-lg text-white/70 leading-relaxed font-light">
              <p>
                건설 분쟁은 단순한 금전적 갈등을 넘어, 시공의 복잡성과 기술적 난해함이 얽혀 있는 고도의 전문 영역입니다.
                저희 사무소는 지난 20여 년간 수많은 현장에서 '데이터'와 '공학적 근거'를 바탕으로 진실을 규명해 왔습니다.
              </p>
              <p>
                단순히 의뢰인의 주장을 대변하는 것에 그치지 않고, 법원과 상대방이 반박할 수 없는
                <strong> 정밀한 기술 검토 보고서</strong>를 통해 가장 합리적이고 신속한 해결책을 제시해 드릴 것을 약속드립니다.
              </p>
              <p>
                여러분의 소중한 권리와 건축적 가치를 지키기 위해, 전문가의 정직한 눈으로 함께하겠습니다.
              </p>
            </div>

            <div className="pt-8 border-t border-white/10">
              <div className="flex items-center gap-6">
                <div className="space-y-1">
                  <p className="text-xs text-white/40 uppercase tracking-widest font-bold">대표이사 / 공학석사 / 건축시공기술사</p>
                  <p className="text-2xl font-bold text-white italic">You Byeong-Ho (유 병 호)</p>
                </div>
                <div className="h-12 w-px bg-white/10 hidden sm:block" />
                <div className="hidden sm:block">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Signature_of_John_Hancock.svg/1200px-Signature_of_John_Hancock.svg.png" alt="Signature" className="h-10 invert opacity-40 brightness-200" />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Professional Details */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-none p-8 md:p-10 shadow-2xl space-y-12">

              {/* 1. Professional Licenses */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <h5 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Professional Licenses</h5>
                  <div className="flex-1 h-px bg-slate-100/50" />
                </div>

                <div className="grid gap-4">
                  {LICENSES.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-4 bg-white border border-slate-100 hover:border-blue-100 hover:shadow-sm transition-all group">
                      <div>
                        <h6 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">{item.title}</h6>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-tight mt-0.5">{item.en}</p>
                      </div>
                      <span className="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-none border border-blue-100/50">{item.badge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* 2. Honors & Recognition */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-2 h-8 bg-blue-600 rounded-none shadow-sm" />
                  <h5 className="text-2xl font-black text-slate-900 tracking-tight">주요 수상 내역</h5>
                </div>

                <div className="space-y-8 pl-1 relative">
                  <div className="absolute left-[3px] top-2 bottom-2 w-px bg-slate-100" />
                  {HONORS.map((item, idx) => (
                    <div key={idx} className="relative pl-8 group">
                      <div className="absolute left-0 top-1.5 w-[6px] h-[6px] bg-blue-500 rounded-none shadow-sm group-hover:bg-blue-600 transition-colors z-10" />
                      <span className="text-xs font-black text-blue-500 block mb-1 tracking-tight">{item.year}</span>
                      <h6 className="text-[17px] font-bold text-slate-800 leading-snug break-keep group-hover:text-blue-900 transition-colors mb-1">{item.title}</h6>
                      <p className="text-sm font-medium text-slate-400">{item.dept}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* 3. Public Leadership */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 border-b border-slate-100 pb-4">
                  <h5 className="text-[10px] font-black text-slate-300 uppercase tracking-[0.4em]">Public Leadership</h5>
                  <div className="flex-1 h-px bg-slate-100/50" />
                </div>

                <div className="flex flex-wrap gap-2">
                  {LEADERSHIP.map((role, idx) => (
                    <span key={idx} className="px-3 py-1.5 bg-slate-50 border border-slate-100 text-[11px] font-bold text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors cursor-default">
                      {role}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CEOSection;
