
import React from 'react';
import { AwardItem } from '../types';

const AWARDS: AwardItem[] = [
  { year: "2016", title: "경기도지사 유공 표창 수상", organization: "경기도청" },
  { year: "2015", title: "경인인물대상(봉사부분) 수상", organization: "경인일보" },
  { year: "2007", title: "서울지방국토관리청장 표창", organization: "서울지방국토관리청" },
  { year: "2006", title: "과학기술부 장관 표창 수상", organization: "한국과학기술단체총연합회" },
  { year: "기타", title: "외 다수 수상 및 표창", organization: "관련 공공기관 및 협회" },
];

const CERTIFICATIONS = [
  { name: "건설사업관리사", agency: "한국CM협회", code: "Professional" },
  { name: "건축시공기술사", agency: "한국산업인력공단", code: "Professional" },
  { name: "건축기계설비기술사", agency: "한국산업인력공단", code: "Professional" },
  { name: "공조냉동기계기술사", agency: "한국산업인력공단", code: "Professional" },
];

const ACTIVITIES = [
  {
    text: "서울특별시 원가분석자문회의 심사위원",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    text: "중소벤처기업부 기술분쟁 조정위원",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    text: "인천광역시 건설기술심의위원회 위원",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m12 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    text: "법원행정처 전문심리위원",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    text: "대한상사중재원 조정위원",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    text: "한국소비자원 소비자분쟁조정위원회 위원",
    icon: (
      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
  },
];

const CEOPage: React.FC = () => {
  return (
    <div className="relative bg-white pt-32 pb-20 min-h-screen overflow-hidden">

      {/* Exact Match Geometric Background */}
      <div className="absolute top-0 left-0 right-0 h-[600px] -z-10 pointer-events-none overflow-hidden bg-[#eff6ff]">
        <div className="absolute inset-0 bg-gradient-to-br from-[#f8faff] to-[#eef4ff]" />
        <svg className="absolute bottom-0 left-0 w-full h-full opacity-60" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <path fill="#dbeafe" d="M0,600 L1440,600 L1440,400 L720,500 L0,350 Z" />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-full opacity-40" viewBox="0 0 1440 600" preserveAspectRatio="none">
          <path fill="#bfdbfe" d="M0,600 L1440,600 L1440,520 L800,580 L300,500 L0,550 Z" />
        </svg>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Side: Photo and Message */}
          <div className="lg:col-span-7 space-y-16 lg:-mt-20 pt-6">
            <div className="flex items-start justify-between gap-10">
              <div className="mb-0 pt-64 transition-all duration-700">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tighter leading-none">
                  대표이사 <span className="text-blue-600">유병호</span>
                </h2>
                <div className="h-1.5 w-14 bg-blue-600 rounded-none mt-6 shadow-sm shadow-blue-500/20" />
              </div>

              {/* 사진 컨테이너: rounded-none */}
              <div className="w-full max-w-[220px] aspect-[3/4] rounded-none overflow-hidden bg-white border border-slate-200 shadow-2xl shadow-blue-500/10 shrink-0 relative group mt-40">
                <img
                  src="https://www.nyjnews.net/imgdata/nyjnews_net/201202/2012020504287552.jpg"
                  alt="대표기술사 유병호"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 border border-white/20 rounded-none pointer-events-none" />
              </div>
            </div>

            <div className="space-y-10 pt-4">
              <h3 className="text-3xl font-bold text-slate-900 flex items-center gap-3">
                <span className="w-10 h-10 rounded-none bg-blue-600 flex items-center justify-center text-white text-sm font-semibold shadow-lg shadow-blue-500/20">Q</span>
                Greetings
              </h3>

              <div className="space-y-8 text-base md:text-lg text-slate-600 leading-relaxed text-justify">
                <div className="text-slate-900 font-semibold text-2xl leading-[1.6] border-l-4 border-blue-600 pl-6 mb-10 py-1 tracking-tight">
                  <p className="mb-2 text-slate-500 text-lg font-medium">안녕하십니까?</p>
                  <p>
                    공정하고 합리적인 건설 문화 창출을 위해 노력하는<br />
                    <span className="text-blue-600">(주)서울건축환경기술사사무소</span> 대표이사 유병호입니다.
                  </p>
                </div>

                <p>
                  (주)서울건축환경기술사사무소는 토목, 건축, 기계, 전기관련 국내 최고의 하자진단, 법원 감정, 설계 검토, 건설사업관리, 구조물 실태변경, 도시정비 사업, 기술 정책 연구용역 전문회사로서 세계적인 EC(Engineering & Construction) 회사로 발돋움하고 있습니다.
                </p>
                <p>
                  국내 건설산업의 첨단화와 체계화된 선진 건설관리기법 구축, 그리고 공정한 선진 건설문화 창출을 위하여 일익을 담당하고자 끊임없는 노력을 기울이고 있습니다. 현재의 건설산업은 <strong>지식혁명기</strong>라 할 수 있습니다.
                </p>
                <p>
                  건설산업에서의 지식혁명은 지식이 작업도구와 제조공장에 적용되는 단계를 넘어, 기술을 선도하며 생산성을 향상시키고, 최종적으로 하드웨어와 결합해 토지, 자본, 노동과 같은 필수적 생산요소로 인식되는 경영혁명의 단계로 나아가고 있습니다.
                </p>
                <p>
                  21세기를 리드하는 융합 엔지니어링 회사인 (주)서울건축환경기술사사무소는 이러한 시대적 상황을 인식하고 건축, 토목, 기계 분야의 최고 전문가들로 구성된 사원(社員)들과 함께 전문 기술인의 책무를 성실하게 구현하겠습니다.
                </p>
                <p>
                  항상 성실, 공정을 최선으로 개척적인 사고와 창조적인 업무, 도전하는 열정이라는 업무방침을 지켜나가겠습니다. 기술사의 풍부한 경험과 지식을 바탕으로 고객의 니즈(Needs)에 능동적으로 대응하며 프로젝트의 성공적인 완성을 위해 최선을 다하겠습니다.
                </p>
                <p>
                  끝으로 홈페이지를 방문해주신 여러분의 가정에 건강과 행복이 가득하시길 진심으로 기원합니다.
                </p>

                <div className="space-y-6 pt-8">
                  <p className="font-bold text-slate-900">감사합니다.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="lg:col-span-5 space-y-6 pt-6">

            {/* Qualification Section: rounded-none */}
            <div className="relative group">
              <div className="relative bg-white border border-slate-200 rounded-none p-8 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-[0.03] text-blue-600">
                  <svg className="w-32 h-32 rotate-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                </div>

                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-3">
                    <span className="w-1.5 h-5 bg-blue-600 rounded-none" />
                    보유 자격 및 면허
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-3">
                  {CERTIFICATIONS.map((cert, idx) => (
                    <div key={idx} className="flex items-center gap-4 p-4 rounded-none bg-slate-50 border border-slate-100/50 hover:bg-white hover:border-blue-200 hover:shadow-md transition-all group/item">
                      <div className="w-9 h-9 rounded-none bg-white border border-slate-100 flex items-center justify-center text-blue-600 group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div className="flex-grow">
                        <p className="text-[13px] font-bold text-slate-800 tracking-tight">{cert.name}</p>
                        <p className="text-[10px] text-slate-400 font-medium">{cert.agency}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Awards Section: 타임라인 포인트 적용 */}
            <div className="relative group">
              <div className="relative bg-white border border-slate-200 rounded-none p-8 shadow-sm hover:shadow-xl transition-all duration-500">
                <div className="flex items-center justify-between mb-8">
                  <h4 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-3">
                    <span className="w-1.5 h-5 bg-orange-500 rounded-none" />
                    주요 수상 내역
                  </h4>
                </div>

                <div className="relative space-y-7">
                  <div className="absolute left-[11px] top-2 bottom-2 w-px bg-slate-100" />

                  {AWARDS.map((award, idx) => (
                    <div key={idx} className="relative pl-8 group/award">
                      <div className="absolute left-[9px] top-[7px] w-[5px] h-[5px] rounded-none bg-orange-400 group-hover/award:bg-orange-600 group-hover/award:scale-150 transition-all duration-300 ring-4 ring-white" />

                      <div className="space-y-0.5">
                        <span className="text-[9px] font-black text-orange-500 uppercase tracking-tighter">{award.year}</span>
                        <h5 className="text-[13px] font-bold leading-tight text-slate-800 group-hover/award:text-orange-600 transition-colors">{award.title}</h5>
                        <p className="text-[10px] text-slate-400 font-medium">{award.organization}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Activities Section: 개별 아이콘 적용 */}
            <div className="relative group">
              <div className="relative bg-white border border-slate-200 rounded-none p-8 pb-10 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-indigo-50 rounded-none blur-3xl opacity-60 group-hover:bg-indigo-100 transition-colors" />

                <div className="flex items-center justify-between mb-8 relative z-10">
                  <h4 className="text-lg font-black text-slate-900 tracking-tight flex items-center gap-3">
                    <span className="w-1.5 h-5 bg-indigo-600 rounded-none" />
                    주요 전문 활동
                  </h4>
                </div>

                <div className="grid grid-cols-1 gap-4 relative z-10">
                  {ACTIVITIES.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 group/row">
                      <div className="w-6 h-6 rounded-none bg-indigo-50 border border-indigo-100 flex items-center justify-center shrink-0 group-hover/row:bg-indigo-600 group-hover/row:border-indigo-600 group-hover/row:shadow-lg group-hover/row:shadow-indigo-200 transition-all duration-300">
                        <div className="text-indigo-600 group-hover/row:text-white transition-colors">
                          {item.icon}
                        </div>
                      </div>
                      <span className="text-[13px] text-slate-600 font-bold group-hover/row:text-slate-900 transition-colors leading-tight">
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CEOPage;
