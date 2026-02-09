
import React from 'react';

interface FooterProps {
  onNavigate: (view: 'home' | 'company' | 'ceo' | 'projects' | 'news') => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-slate-50 pt-24 pb-20 border-t border-slate-100" id="footer">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col items-center">

          <div className="mb-12 text-center">
            <button
              onClick={() => onNavigate('home')}
              className="group flex flex-col items-center gap-4 outline-none"
            >
              {/* 로고 아이콘을 라운드 사각형으로 변경 */}
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-teal-400 shadow-xl shadow-blue-500/20 transform group-hover:scale-110 transition-transform duration-500" />
              <h2 className="text-2xl font-black text-slate-900 tracking-tighter">(주)서울건축환경기술사사무소</h2>
            </button>
          </div>

          {/* 정보 박스를 둥글둥글하게 변경 */}
          <div className="w-full max-w-4xl bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-1 tracking-tight">(주)서울건축환경기술사사무소</h3>
                  <p className="text-[11px] font-medium text-slate-400 uppercase tracking-wider">Business Registration: 247-81-01306</p>
                </div>
                <div className="text-sm text-slate-500 leading-relaxed font-light tracking-tight">
                  <p><span className="text-slate-900 font-medium mr-2">대표이사</span> 유병호 기술사</p>
                  <p className="mt-1">경기도 남양주시 순화궁로 249, N동 1605호 (별내역 파라곤스퀘어)</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Phone</p>
                  <p className="text-sm font-medium text-slate-700 whitespace-nowrap">031-931-1407~8</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Fax</p>
                  <p className="text-sm font-medium text-slate-700 whitespace-nowrap">031-931-1409</p>
                </div>
                <div className="space-y-1 col-span-2">
                  <p className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">Email</p>
                  <p className="text-sm font-medium text-slate-700">sbepe@hanmail.net</p>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-[10px] font-bold text-slate-300 uppercase tracking-[0.4em]">
              © 2025 SEOUL FORENSIC ENGINEERING. ALL RIGHTS RESERVED.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
