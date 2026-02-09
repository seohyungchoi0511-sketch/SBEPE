
import React from 'react';
import { AwardItem } from '../types';

const AWARDS: AwardItem[] = [
  { year: "2024", title: "건설감정 실무 유공 표창", organization: "대한건축사협회" },
  { year: "2022", title: "우수 법원감정인 선정", organization: "서울중앙지방법원" },
  { year: "2018", title: "국토교통부 장관 표창 (건설안전 부문)", organization: "국토교통부" },
  { year: "2015", title: "중소기업 기술지도 공로상", organization: "중소벤처기업부" },
  { year: "2002", title: "건축시공기술사 자격 취득", organization: "한국산업인력공단" },
];

const CEOSection: React.FC = () => {
  return (
    <section id="ceo" className="py-32 bg-[#070A12] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Left Side: CEO Profile & Message */}
          <div className="lg:col-span-7 space-y-12">
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

          {/* Right Side: Awards & Recognition */}
          <div className="lg:col-span-5">
            <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[40px] p-8 md:p-10 relative group">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-blue-500/20 blur-3xl group-hover:bg-blue-500/30 transition-all" />
              
              <div className="mb-10">
                <h5 className="text-xl font-bold text-white mb-2">수상 및 주요 약력</h5>
                <p className="text-xs text-white/40">전문가로서의 공신력을 증명하는 주요 지표입니다.</p>
              </div>

              <div className="space-y-6 relative">
                {/* Timeline Line */}
                <div className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-blue-500/50 via-white/10 to-transparent" />

                {AWARDS.map((award, idx) => (
                  <div key={idx} className="relative pl-10 group/item">
                    {/* Dot */}
                    <div className="absolute left-0 top-1.5 w-[23px] h-[23px] rounded-full bg-[#070A12] border-2 border-white/10 flex items-center justify-center group-hover/item:border-blue-500 transition-colors">
                       <div className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover/item:bg-blue-500" />
                    </div>
                    
                    <div className="space-y-1">
                      <span className="text-[10px] font-black text-blue-400/60 uppercase tracking-tighter">{award.year}</span>
                      <h6 className="text-sm font-bold text-white group-hover/item:text-blue-400 transition-colors">{award.title}</h6>
                      <p className="text-xs text-white/30">{award.organization}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 p-6 rounded-2xl bg-black/40 border border-white/5 space-y-4">
                <p className="text-[10px] font-bold text-white/40 uppercase tracking-[0.2em]">Professional Background</p>
                <ul className="grid grid-cols-1 gap-2">
                  <li className="text-xs text-white/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-400" /> 현) 서울중앙지방법원 전문심리위원
                  </li>
                  <li className="text-xs text-white/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-400" /> 현) 국토교통부 건설현장점검 전문가
                  </li>
                  <li className="text-xs text-white/60 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-400" /> 전) OO건설 기술연구소 책임연구원
                  </li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CEOSection;
