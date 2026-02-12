
import React from 'react';

interface NewsroomProps {
  onNavigate: (view: 'home' | 'ceo' | 'projects' | 'news') => void;
}

const Newsroom: React.FC<NewsroomProps> = ({ onNavigate }) => {
  const INFO_CARDS = [
    {
      id: "news",
      category: "Construction News",
      title: "건설감정뉴스",
      emoji: "📰",
      bgColor: "bg-white",
      textColor: "text-slate-900",
      description: "최신 법원 감정 동향과 건설 분쟁 관련 공학적 판례 분석 리포트를 제공합니다.",
      link: "internal-news"
    },
    {
      id: "map",
      category: "Location",
      title: "사무소 위치",
      emoji: "📍",
      bgColor: "bg-white/90 backdrop-blur-sm",
      textColor: "text-slate-900",
      description: "남양주시 순화궁로 249, \nN동 1605호(별내동, 별내역파라곤스퀘어)",
      link: "https://naver.me/GfCmmjB4"
    },
    {
      id: "consult",
      category: "Consultation",
      title: "온라인 상담",
      emoji: "💬",
      bgColor: "bg-white/80 backdrop-blur-sm",
      textColor: "text-slate-900",
      description: "전문가와 1:1 상담을 신청하세요.\nT. 031-931-1407-8",
    }
  ];

  const handleCardClick = (item: typeof INFO_CARDS[0]) => {
    if (item.id === 'news') {
      onNavigate('news');
    } else if (item.link?.startsWith('#')) {
      const el = document.querySelector(item.link);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else if (item.link) {
      window.open(item.link, '_blank');
    }
  };

  return (
    <section id="news" className="relative py-32 overflow-hidden bg-white">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/picts/paragon.png')`
          }}
        />
        <div className="absolute inset-0 bg-white/20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="w-12 h-1.5 bg-blue-600 rounded-none" />
              <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.4em]">Resources & Info</span>
            </div>
            <h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight whitespace-nowrap">지식 정보 아카이브</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INFO_CARDS.map((item, idx) => (
            <div
              key={idx}
              onClick={() => handleCardClick(item)}
              className={`group relative p-10 rounded-none overflow-hidden transition-all duration-500 cursor-pointer shadow-lg hover:shadow-2xl flex flex-col justify-between h-[360px] ${item.bgColor} ${item.textColor} border border-slate-100 hover:-translate-y-2`}
            >
              <div>
                <span className="text-[9px] font-bold uppercase tracking-[0.3em] opacity-60 mb-3 block">{item.category}</span>
                <h4 className="text-2xl font-extrabold mb-4 leading-tight break-keep tracking-tight">{item.title}</h4>
                <p className={`text-sm leading-relaxed break-keep font-medium opacity-80 whitespace-pre-line tracking-tight line-clamp-3`}>
                  {item.description}
                </p>
              </div>

              <div className="flex items-end justify-between">
                <span className="text-5xl opacity-80 filter drop-shadow-md group-hover:scale-110 transition-transform duration-500">{item.emoji}</span>
                {item.id !== 'consult' && (
                  <div className={`w-12 h-12 rounded-none flex items-center justify-center transition-all ${item.id === 'news' ? 'bg-slate-900 text-white' : 'bg-slate-900 text-white'}`}>
                    <span className="text-xl">→</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Newsroom;
