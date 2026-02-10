
import React from 'react';

interface ProjectsProps {
  onNavigate?: (view: 'home' | 'ceo' | 'projects' | 'news') => void;
}

const PROJECT_REPORTS = [
  {
    title: "용산 센트럴파크",
    image: "/images/picts/centralparkys.png",
  },
  {
    title: "부산 라발스호텔",
    image: "https://www.lavalsehotel.jp/storage/app/public/seo/db/3f/20190730130149ebccb22b96fe57ed8f6f4e38531fff3d323d097a.jpg",
  },
  {
    title: "유엔빌리지 고급빌라",
    image: "/images/picts/sangwaldae.png",
  },
  {
    title: "영통 2차 e-편한세상",
    image: "/images/picts/eapt.png",
  }
];

const Projects: React.FC<ProjectsProps> = ({ onNavigate }) => {
  return (
    <section id="projects" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header Section */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-1.5 bg-blue-600 rounded-none" />
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em]">Track Record</span>
          </div>
          <h2 className="text-5xl font-black tracking-tighter text-slate-900">
            실적 보고 & 수행 사례
          </h2>
        </div>

        {/* Card Grid - Sharp Rectangle (rounded-none) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PROJECT_REPORTS.map((project, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-none overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
            >
              <div className="aspect-[4/5] overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>

              <div className="py-8 px-4 text-center">
                <h3 className="text-lg font-bold text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-24 flex flex-col items-center space-y-10">
          <div className="flex items-center gap-6 w-full">
            <div className="h-px flex-grow bg-slate-100" />
            <span className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em] whitespace-nowrap">
              300+ Court Expert Reports Completed
            </span>
            <div className="h-px flex-grow bg-slate-100" />
          </div>

          <button
            onClick={() => onNavigate?.('projects')}
            className="flex items-center gap-3 px-14 py-6 bg-[#0f172a] text-white rounded-none font-black text-sm uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-900/20 active:scale-95"
          >
            전체 수행 실적 더보기
            <span className="text-lg font-normal">→</span>
          </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
