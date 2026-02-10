
import React from 'react';

const ProjectListView: React.FC = () => {
  const REGIONAL_STATS = [
    { region: "서울/수도권", id: "region-seoul", count: "210+", color: "bg-blue-600" },
    { region: "경상권", id: "region-gyeongsang", count: "45+", color: "bg-blue-400" },
    { region: "전라/충청권", id: "region-jeolla", count: "32+", color: "bg-slate-500" },
    { region: "제주/기타", id: "region-jeju", count: "12+", color: "bg-slate-400" },
  ];

  const GROUPED_PROJECTS = [
    {
      id: "region-seoul",
      region: "서울/수도권",
      color: "border-blue-600",
      projects: [
        { year: "2024", title: "서울 용산 센트럴파크 하자감정", category: "법원감정", client: "입주자대표회의" },
        { year: "2023", title: "남양주 파라곤스퀘어 하자진단", category: "하자진단", client: "관리단" },
        { year: "2023", title: "영통 e-편한세상 2차 기술심리", category: "법원감정", client: "수원지방법원" },
        { year: "2023", title: "유엔빌리지 고급빌라 정밀안전진단", category: "안전진단", client: "개인소유자" },
        { year: "2022", title: "하남 미사강변도시 공사비 검토", category: "원가분석", client: "OO건설" },
        { year: "2022", title: "서초구 아파트 하자진단 업무", category: "하자진단", client: "입주자대표회의" },
        { year: "2021", title: "강남구 오피스텔 기성고 감정", category: "법원감정", client: "서울중앙지방법원" },
        { year: "2021", title: "인천 송도 국제도시 기술검토", category: "기술검토", client: "OO건설" },
      ]
    },
    {
      id: "region-gyeongsang",
      region: "경상권",
      color: "border-blue-400",
      projects: [
        { year: "2024", title: "부산 라발스호텔 공기지연 검토", category: "기술검토", client: "OO건설" },
        { year: "2023", title: "대구 수성구 주상복합 기성고 감정", category: "법원감정", client: "대구지방법원" },
        { year: "2022", title: "울산 중구 아파트 단지 정밀안전진단", category: "안전진단", client: "관리사무소" },
        { year: "2021", title: "창원 국가산단 공장 증축 기술자문", category: "기술자문", client: "제조법인" },
        { year: "2020", title: "경주 지진피해 관련 안전진단", category: "안전진단", client: "공공기관" },
        { year: "2020", title: "부산 해운대 엘시티 기성검토", category: "기술검토", client: "시공사" },
      ]
    },
    {
      id: "region-jeolla",
      region: "전라/충청권",
      color: "border-slate-500",
      projects: [
        { year: "2022", title: "광주 화정 아이파크 붕괴사고 기술자문", category: "기술정책", client: "국토교통부" },
        { year: "2023", title: "대전 도안신도시 하자판정 업무수행", category: "하자진단", client: "입주자대표회의" },
        { year: "2022", title: "세종 행정중심복합도시 원가관리", category: "원가분석", client: "공공기관" },
        { year: "2021", title: "전주 에코시티 신축공사 기성고 검토", category: "법원감정", client: "전주지방법원" },
        { year: "2020", title: "청주 산단 지하안전영향평가", category: "안전진단", client: "충북개발공사" },
      ]
    },
    {
      id: "region-jeju",
      region: "제주/기타",
      color: "border-slate-400",
      projects: [
        { year: "2022", title: "인천 청라 로봇랜드 원가분석", category: "원가분석", client: "인천광역시" },
        { year: "2023", title: "제주 드림타워 부대시설 기술검토", category: "기술검토", client: "운영사" },
        { year: "2021", title: "강원 평창 리조트 구조 안전진단", category: "안전진단", client: "리조트본부" },
        { year: "2020", title: "해외 플랜트 건설분쟁 기술지원", category: "분쟁조정", client: "해외건설협회" },
        { year: "2019", title: "제주 영어교육도시 시설물 하자검토", category: "하자진단", client: "입주자모임" },
      ]
    }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-24 bg-white">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f8fafc; border-radius: 0px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 0px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-1 bg-blue-600 rounded-none" />
            <span className="text-blue-600 font-black text-[10px] uppercase tracking-widest">Global Track Record</span>
            <span className="w-8 h-1 bg-blue-600 rounded-none" />
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tighter mb-4">
            전국 규모의 <span className="text-blue-600">신뢰와 실적</span>
          </h2>
          <p className="text-slate-400 font-medium max-w-2xl mx-auto text-sm md:text-base break-keep">
            전국의 주요 거점에서 법원감정 및 건설기술 검토를 수행하며 공정하고 정밀한 공학적 솔루션을 제공합니다.
          </p>
        </div>

        {/* Map & Stats Dashboard */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">

          {/* Left: Map Container */}
          <div className="relative flex items-center justify-center py-6">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1)_0%,transparent_70%)] -z-10" />

            <div className="relative w-full max-w-md transition-all duration-1000">
              <img
                src="/images/picts/map.PNG"
                className="w-full h-auto opacity-90 contrast-[1.05] brightness-[1.0] mix-blend-multiply"
                alt="전국 수행 실적 지도"
                onError={(e) => {
                  e.currentTarget.src = "https://raw.githubusercontent.com/t-on/image-repo/main/korea_map_gray.png";
                  e.currentTarget.className = "w-full h-auto opacity-40 grayscale";
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-white/10 pointer-events-none" />
            </div>
          </div>

          {/* Right: Stats Section - 권역별 수행분포 사각형 변경 */}
          <div className="flex flex-col justify-center space-y-6">
            <h3 className="text-xl font-black text-slate-900 tracking-tight flex items-center gap-3">
              <span className="w-1.5 h-5 bg-blue-600 rounded-none" />
              권역별 수행 분포
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {REGIONAL_STATS.map((stat) => (
                <button
                  key={stat.id}
                  onClick={() => scrollToSection(stat.id)}
                  className="p-6 rounded-none bg-white border border-slate-100 hover:border-blue-600/30 hover:shadow-[0_15px_40px_-12px_rgba(59,130,246,0.1)] transition-all duration-500 group text-left outline-none active:scale-[0.98] relative overflow-hidden"
                >
                  <div className={`w-8 h-1 ${stat.color} rounded-none mb-4 group-hover:w-12 transition-all duration-700`} />
                  <p className="text-[10px] font-black text-slate-400 mb-0.5 uppercase tracking-widest">{stat.region}</p>
                  <div className="flex items-end justify-between">
                    <p className="text-3xl font-black text-slate-900 group-hover:text-blue-600 transition-colors tracking-tighter">{stat.count}</p>
                    <div className="w-8 h-8 rounded-none bg-slate-50 flex items-center justify-center text-slate-300 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <span className="text-sm font-bold">→</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Detailed Project List Section - 사각형 변경 */}
        <div className="space-y-24">
          <div className="flex items-end justify-between border-b border-slate-100 pb-8">
            <div className="space-y-2">
              <h3 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tighter">주요 수행 프로젝트</h3>
              <p className="text-sm text-slate-400 font-medium">권역별 리스트를 클릭하거나 스크롤하여 상세 데이터를 확인하세요.</p>
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-4xl font-black text-slate-100 block mb-0.5">300+</span>
              <span className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em]">Total Archive Records</span>
            </div>
          </div>

          {GROUPED_PROJECTS.map((group) => (
            <div key={group.id} id={group.id} className="space-y-8 scroll-mt-32">
              <div className={`flex items-center gap-4 border-l-[5px] ${group.color} pl-6 py-0.5`}>
                <h4 className="text-2xl font-black text-slate-900 tracking-tight">{group.region} 실적</h4>
                <div className="h-px w-10 bg-slate-100 hidden md:block" />
                <span className="px-3 py-1 rounded-none bg-slate-50 text-[9px] font-black text-slate-400 uppercase tracking-widest border border-slate-100">
                  {group.projects.length} Cases Archive
                </span>
              </div>

              {/* 프로젝트 리스트 컨테이너 사각형 변경 */}
              <div className="relative rounded-none border border-slate-100 bg-white overflow-hidden shadow-xl shadow-slate-200/30 mx-auto">
                <div className="max-h-[450px] overflow-y-auto custom-scrollbar">
                  <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 z-40 bg-white/95 backdrop-blur-md">
                      <tr className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] border-b border-slate-50">
                        <th className="py-6 pl-10 w-24">Year</th>
                        <th className="py-6">Project Description</th>
                        <th className="py-6 w-32">Specialty</th>
                        <th className="py-6 text-right pr-10 w-44">Organization</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-50">
                      {group.projects.map((item, idx) => (
                        <tr key={`${group.id}-${idx}`} className="group hover:bg-slate-50/60 transition-all duration-300">
                          <td className="py-6 pl-10">
                            <span className="text-sm font-black text-slate-400 group-hover:text-blue-600 transition-colors">{item.year}</span>
                          </td>
                          <td className="py-6">
                            <p className="text-[16px] font-bold text-slate-800 group-hover:text-slate-950 group-hover:translate-x-1.5 transition-all duration-500 break-keep">{item.title}</p>
                          </td>
                          <td className="py-6">
                            <span className="px-3 py-1.5 rounded-none bg-slate-100 text-[9px] font-black text-slate-500 uppercase tracking-wider group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 whitespace-nowrap shadow-sm">
                              {item.category}
                            </span>
                          </td>
                          <td className="py-6 text-right pr-10">
                            <span className="text-[14px] font-bold text-slate-400 group-hover:text-slate-600 transition-colors whitespace-nowrap">{item.client}</span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Accent */}
        <div className="mt-32 text-center relative">
          <div className="absolute top-1/2 left-0 right-0 h-px bg-slate-100 -z-10" />
          <p className="inline-block px-10 bg-white text-[9px] font-black text-slate-200 uppercase tracking-[0.6em]">
            Excellence in Forensic Engineering
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectListView;
