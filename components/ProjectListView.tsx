import React from 'react';

const ProjectListView: React.FC = () => {
  const REGIONAL_STATS = [
    { region: "수도권/강원권", id: "region-seoul", count: "230+", color: "bg-blue-600" },
    { region: "경상권", id: "region-gyeongsang", count: "30+", color: "bg-blue-400" },
    { region: "전라권/충청권", id: "region-jeolla", count: "70+", color: "bg-slate-500" },
    { region: "제주권", id: "region-jeju", count: "1+", color: "bg-slate-400" },
  ];

  const MAP_MARKERS = [
    { id: "region-seoul", label: "수도권/강원", top: "42.5%", left: "49%", color: "bg-blue-600 shadow-blue-600/50" },
    { id: "region-gyeongsang", label: "경상권", top: "60%", left: "57%", color: "bg-blue-400 shadow-blue-400/50" },
    { id: "region-jeolla", label: "전라/충청", top: "62%", left: "46%", color: "bg-slate-500 shadow-slate-500/50" },
    { id: "region-jeju", label: "제주권", top: "92%", left: "40%", color: "bg-slate-400 shadow-slate-400/50" },
  ];

  const GROUPED_PROJECTS = [
    {
      id: "region-seoul",
      region: "수도권/강원권",
      color: "border-blue-600",
      projects: [
        { year: "2025", title: "수원지방법원 안산지원 공사비" },
        { year: "2025", title: "서울서부지방법원 공사대금건" },
        { year: "2025", title: "서울중앙지방법원 채무부존재확인건" },
        { year: "2025", title: "서울중앙지방법원 공사대금반환건" },
        { year: "2025", title: "수원지방법원 보상금증액건" },
        { year: "2025", title: "서울중앙지방법원 공사대금건" },
        { year: "2025", title: "수원지방법원 안양지원 공사대금건" },
        { year: "2025", title: "서울중앙지방법원 공사대금건" },
        { year: "2025", title: "의정부지방법원 남양주지원 공사비 반환건" },
        { year: "2025", title: "인천지방법원 부천지원 부당이득금 반환건" },
        { year: "2025", title: "서울중앙지방법원 계약금반환 청구건" },
        { year: "2024", title: "수원지방법원 안양지원 손해배상건" },
        { year: "2024", title: "서울남부지방법원 손해배상건" },
        { year: "2024", title: "인천지방법원 홍성지원 토지인도건" },
        { year: "2024", title: "수원지방법원 여주지원 손해배상건" },
        { year: "2024", title: "서울동부지방법원 공사대금건" },
        { year: "2024", title: "인천지방법원 공사대금건" },
        { year: "2024", title: "서울중앙지방법원 손해배상건" },
        { year: "2024", title: "수원지방법원 성남지원 공사대금건" },
        { year: "2024", title: "수원지방법원 안양지원 기타(금전)건" },
        { year: "2024", title: "의정부지방법원 남양주지원 공사대금건" },
        { year: "2024", title: "서울중앙지방법원 하자보수비건" },
        { year: "2024", title: "서울중앙지방법원 부당이득금건" },
        { year: "2024", title: "서울중앙지방법원 손해배상건" },
        { year: "2024", title: "의정부지방법원 공사대금건" },
        { year: "2024", title: "수원지방법원 안양지원 공사대금건" },
        { year: "2024", title: "서울북부지방법원 손해배상건" },
        { year: "2024", title: "수원지방법원 안양지원 공사대금건" },
        { year: "2024", title: "수원지방법원 안양지원 기타(금전)건" },
        { year: "2024", title: "수원지방법원 안양지원 손해배상건" },
        { year: "2024", title: "서울고등법원 공사대금건" },
        { year: "2023", title: "수원지방법원 안산지원 물품대금건" },
        { year: "2023", title: "서울고등법원 물품대금건" },
        { year: "2023", title: "서울동부지방법원 건물인도건" },
        { year: "2023", title: "인천지방법원 손해배상건" },
        { year: "2023", title: "인천지방법원 손해배상건" },
        { year: "2023", title: "수원지방법원 안산지원 손해배상건" },
        { year: "2023", title: "인천지방법원  부천지원 건물인도건" },
        { year: "2023", title: "인천지방법원 손해배상건" },
        { year: "2023", title: "수원지방법원 성남지원 손해배상건" },
        { year: "2023", title: "의정부지방법원 손해배상건" },
        { year: "2023", title: "서울중앙지방법원 구상금건" },
        { year: "2023", title: "수원지방법원 손해배상건" },
        { year: "2022", title: "인천지방법원 정산금건" },
        { year: "2022", title: "수원지방법원 여주지원 물품대금건" },
        { year: "2022", title: "서울북부지방법원 손해배상건" },
        { year: "2022", title: "서울중앙지방법원 손해배상건" },
        { year: "2022", title: "수원지방법원 성남지원 물품대금건" },
        { year: "2022", title: "서울중앙지방법원 손해배상건" },
        { year: "2022", title: "서울동부지방법원 용역비건" },
        { year: "2022", title: "수원지방법원 성남지원 공사대금건" },
        { year: "2022", title: "서울중앙지방법원 공사대금건" },
        { year: "2022", title: "인천지방법원 공사대금건" },
        { year: "2022", title: "서울중앙지방법원 손해배상건" },
        { year: "2022", title: "서울중앙지방법원 하자보수에 갈음하는 손해배상건" },
        { year: "2022", title: "서울중앙지방법원 손해배상건" },
        { year: "2021", title: "부천지원 김포시법원 기타(금전)건" },
        { year: "2021", title: "서울서부지방법원 손해배상건" },
        { year: "2021", title: "수원지법 성남지원 공사대금건" },
        { year: "2021", title: "서울중앙지방법원 손해배상건" },
        { year: "2021", title: "서울중앙지방법원 손해배상건" },
        { year: "2021", title: "춘천지법 원주지원 기타(금전)건" },
        { year: "2020", title: "수원지법 성남지원 손해배상건" },
        { year: "2020", title: "인천지방법원 명도건" },
        { year: "2020", title: "수원지방법원 물품대금건" },
        { year: "2020", title: "수원지방법원 안산지원 매매대금반환건" },
        { year: "2020", title: "서울중앙지방법원 건물명도(인도)건" },
        { year: "2020", title: "서울중앙지방법원 정산금건" },
        { year: "2020", title: "서울동부지방법원 구상금건" },
        { year: "2020", title: "의정부지방법원 고양지원 손해배상건" },
        { year: "2019", title: "인천지방법원 공사대금건" },
        { year: "2019", title: "서울동구지방법원 손해배상건" },
        { year: "2019", title: "성남지방법원 이천시법원 청구이의건" },
        { year: "2019", title: "소울중앙지방법원 손해배상건" },
        { year: "2019", title: "서울중앙지방법원 하자보수금건" },
        { year: "2019", title: "춘천지방법원 강릉지원 손해배상건" },
        { year: "2019", title: "서울중앙지방법원 손해배상건" },
        { year: "2019", title: "수원지방법원 여주지원 물품대금건" },
        { year: "2018", title: "서울중앙지방법원 손해배상건" },
        { year: "2018", title: "의정부지방법원 양수금건" },
        { year: "2018", title: "인천지방법원 공사대금건" },
        { year: "2018", title: "수원지법 안산지원 계약금건" },
        { year: "2018", title: "서울남부지방법원 손해배상건" },
        { year: "2018", title: "인천지방법원 손해배상건" },
        { year: "2018", title: "서울남부지방법원 공사대금건" },
        { year: "2018", title: "수원지방법원 성남지원 부당이득금건" },
        { year: "2018", title: "서울중앙지방법원 건물명도건" },
        { year: "2018", title: "수원지방법원 용역대금건" },
        { year: "2018", title: "수원지방법원 안산지원 물품대금건" },
        { year: "2017", title: "서울중앙지방법원 유익비건" },
        { year: "2017", title: "인천지방법원 공사대금건" },
        { year: "2017", title: "서울고등법원 소음진동침해금지가처분건" },
        { year: "2017", title: "수원지방법원 손해배상건" },
        { year: "2017", title: "춘천지방법원 강릉지원 손해배상금건" },
        { year: "2017", title: "수원지방법원 성남지원 공사대금건" },
        { year: "2017", title: "수원OO오피스텔 신축공사 하자미시공 공사대금건" },
        { year: "2017", title: "서울중앙지방법원 손해배상건" },
        { year: "2017", title: "수원지방법원 물품대금건" },
        { year: "2017", title: "서울중앙지방법원 손해배상건" },
        { year: "2017", title: "수원지법 평택지원 손해배상건" },
        { year: "2016", title: "서울중앙지방법원 근저당설정권말소건(추가)" },
        { year: "2016", title: "인천지방법원 부천지원 제3자이의건" },
        { year: "2016", title: "서울중앙지방법원 근저당설정권말소건" },
        { year: "2016", title: "서울남부지방법원 공사대금건" },
        { year: "2016", title: "수원지방법원 안산지원 소유권이전등록건" },
        { year: "2016", title: "인천지방법원 손해배상건" },
        { year: "2016", title: "응암동 OO호텔신축공사 기성고 감정평가 용역건" },
        { year: "2016", title: "춘천지방법원 강릉지원 손해배상건" },
        { year: "2015", title: "서울남부지방법원 공사대금건" },
        { year: "2015", title: "수원지방법원 성남지원 공사대금건" },
        { year: "2015", title: "수원지방법원 성남지원 손해배상건" },
        { year: "2015", title: "가평군 주택 기성고감정건" },
        { year: "2015", title: "서울동부지방법원 물품대금건" },
        { year: "2015", title: "신당동 고시원주택 리모델링 하자조사건" },
        { year: "2015", title: "인천지방법원 공사간접비건" },
        { year: "2015", title: "서울동부지방법원 하자보수금건" },
        { year: "2014", title: "강릉지방법원 손해배상건" },
        { year: "2014", title: "부천 송내 건물철거공사 및 대지조성공사 기성고 감정건" },
        { year: "2014", title: "인천지방법원 공사대금건" },
        { year: "2014", title: "서울중앙지방법원 공사대금건" },
        { year: "2014", title: "의정부지방법원 공사대금건" },
        { year: "2014", title: "강릉지방법원 손해배상건" },
        { year: "2014", title: "인천지방법원 공사대금건" },
        { year: "2014", title: "인천지방법원 공사대금건" },
        { year: "2014", title: "서울중앙지방법원 공사대금건" },
        { year: "2014", title: "의정부지방법원 공사대금건" },
        { year: "2013", title: "의정부지방법원 고양지원 손해배상건" },
        { year: "2013", title: "서울북부지방법원 유익비상환건" },
        { year: "2013", title: "수원지방법원 성남지원 공사대금건" },
        { year: "2013", title: "수원지방법원 제3자이의건" },
        { year: "2013", title: "수원지방법원 제3자이의건" },
        { year: "2013", title: "서울중앙지방법원 공사대금건" },
        { year: "2013", title: "수원지방법원 성남지원 양수금건" },
        { year: "2013", title: "인천지방법원 하자보수금건" },
        { year: "2013", title: "서울고등법원 공사대금건" },
        { year: "2013", title: "의정부지방법원 연천군법원 손해배상건" },
        { year: "2012", title: "서울동부지방법원 하자보수금건" },
        { year: "2012", title: "서울고등법원 건축설계비건" },
        { year: "2012", title: "춘천지방법원 공사대금건" },
        { year: "2012", title: "서울동부지방법원 하도급대금건" },
        { year: "2012", title: "서울행정법원 양도소득세부처분취소건건" },
        { year: "2012", title: "의정부지방법원 부동산명도건" },
        { year: "2012", title: "인천지방법원 손해배상건" },
        { year: "2012", title: "행당동 인접건축물 피해 및 원인조사" },
        { year: "2012", title: "동해시법원 공사대금건" },
        { year: "2012", title: "강릉지방법원 공사대금건" },
        { year: "2012", title: "영월지방법원 근저당설정등기말소건" },
        { year: "2011", title: "용인동백지구 OO공사 하자진단" },
        { year: "2011", title: "춘천지방법원 하자보수보증금(피고)건" },
        { year: "2011", title: "서울북부지방법원 하자보수보증금(피고)건" },
        { year: "2011", title: "서울북부지방법원 하자보수보증금(원고)건" },
        { year: "2010", title: "서울동부지방법원 손해배상건" },
        { year: "2010", title: "한국환경자원공사 하자진단건" },
        { year: "2010", title: "서울북부지방법원 하자보수보증금(피고)건" },
        { year: "2010", title: "수원지방법원안산지원 손해배상건" },
        { year: "2010", title: "수원지방법원성남지원 공사대금건" },
        { year: "2010", title: "서울고등법원 하자보수보증금(피고)건" },
        { year: "2010", title: "인천지방법원 손해배상건" },
        { year: "2009", title: "서울고등법원 하자보수보증금건" },
        { year: "2009", title: "인천지방법원 공사대금건" },
        { year: "2009", title: "인천지방법원 임차보증금반환건" },
        { year: "2009", title: "서울남부지방법원 하자보수보증금 외 여러건" },
        { year: "2009", title: "인천지방법원 증거보전건" },
        { year: "2009", title: "서울남부지방법원 손해배상건" },
        { year: "2009", title: "서울북부지방법원 손해배상건" },
        { year: "2009", title: "서울동부지방법원 손해배상건(피고)" },
        { year: "2009", title: "서울고등법원 공사대금건" },
        { year: "2008", title: "서울동부지방법원 손해배상건(원고)" },
        { year: "2008", title: "서울남부지방법원 손해배상건" },
        { year: "2008", title: "서울고등법원 공사대금건" },
        { year: "2008", title: "서울고등법원 에너지절약건" },
        { year: "2008", title: "서울북부지방법원 건물명도건" },
        { year: "2008", title: "서울남부지방법원 하자보수금건" },
        { year: "2008", title: "서울중앙지방법원 공사대금건" },
        { year: "2008", title: "서울중앙지방법원 손해배상건" },
        { year: "2008", title: "서울남부지방법원 건물원상건" },
        { year: "2007", title: "서울남부지방법원 양수금 등..." },
        { year: "2007", title: "서울북부지방법원 증거보존건" },
        { year: "2007", title: "서울남부지방법원 손해배상건" },
        { year: "2007", title: "서울중앙지방법원 손해배상건" },
        { year: "2007", title: "서울중앙지방법원 공사대금건" },
        { year: "2007", title: "서울중앙지방법원 손해배상건" },
        { year: "2007", title: "수원지방법원성남지원 손해배상건" },
        { year: "2006", title: "서울고등법원 영업허가명의변경건" },
        { year: "2006", title: "서울남부지방법원 손해배상건" },
        { year: "2006", title: "서울중앙지방법원 공사대금건" },
        { year: "2006", title: "서울북부지방법원 근저당권말소건" },
        { year: "2006", title: "서울중앙지방법원 손해배상건" },
        { year: "2006", title: "서울중앙지방법원 공사대금건" },
        { year: "2006", title: "서울중앙지방법원 공사대금건" },
        { year: "2006", title: "서울중앙지방법원 손해배상건" },
        { year: "2006", title: "서울중앙지방법원 공사대금건" },
        { year: "2006", title: "서울동부지방법원 손해배상건" },
        { year: "2006", title: "서울북부지방법원 증거보전건" },
        { year: "2005", title: "수원지방법원 공사대금건" },
        { year: "2005", title: "서울중앙지방법원 공사대금건" },
        { year: "2005", title: "서울중앙지방법원 공사대금건" },
        { year: "2005", title: "서울동부시방법원 대여금건" },
        { year: "2005", title: "서울중앙지방법원 손해배상건" },
        { year: "2005", title: "서울중앙지방법원 공사대금건" },
        { year: "2004", title: "서울동부지방법원 매매대금반환건" },
        { year: "2004", title: "서울동부지방법원 기성금반환건" },
        { year: "2003", title: "서울중앙지방법원 손해배상건" },
        { year: "2003", title: "서울중앙지방법원 하자보증금건" },
        { year: "2003", title: "신도림동 OO아파트 하자조사" },
        { year: "2003", title: "춘천 OO호텔 기성감정" },
        { year: "2003", title: "서울 OO교회 기성감정" },
        { year: "2003", title: "신도림동 OO아파트 하자조사" },
        { year: "2003", title: "고척동 OO아파트 하자조사" },
        { year: "2003", title: "김포 OO아파트 하자조사" },
        { year: "2003", title: "오산 OO플라자 기성감정" },
        { year: "2002", title: "용인수지 OO아파트 하자감정" },
        { year: "2002", title: "금호동 다세대 주택 기성감정" },
        { year: "2002", title: "구로이화 OO아파트 하자감정" },
        { year: "2002", title: "석촌동 OO아파트 하자감정" },
        { year: "2002", title: "용인 수지 OO아파트 하자조사" },
        { year: "2002", title: "석촌동 OOOO오피스텔 하자조사" },
        { year: "2002", title: "이문동 OO아파트 하자감정" },
        { year: "2002", title: "의정부 호원동 OO아파트 하자감정" },
        { year: "2002", title: "인천 계산동 OOOO아파트 하자감정" },
        { year: "2002", title: "서울 대조동 OOOO아파트 하자조사" },
        { year: "2001", title: "서울OO연수원 신축공사 하자점검" },
        { year: "2001", title: "부평 OO아파트 하자조사" },
        { year: "2001", title: "인천 효성동 OO아파트 하자조사" },
        { year: "2001", title: "남가좌 OO아파트 하자조사" },
        { year: "2001", title: "수원 금곡동 OO아파트 하자조사" },
        { year: "2001", title: "부평 OO아파트 하자조사" },
        { year: "2000", title: "인천 계양구 OO아파트 하자조사" },
        { year: "2000", title: "노량진 OO아파트 하자조사" },
        { year: "2000", title: "일산 OO마을 OO아파트 하자조사" },
        { year: "2000", title: "산본 OO아파트 하자조사" },
        { year: "2000", title: "등촌 OO아파트 하자조사" },
        { year: "2000", title: "일산 OO아파트 하자조사" },
        { year: "2000", title: "부평 OO아파트 하자조사" },
        { year: "2000", title: "산본 OO아파트 하자조사" },
        { year: "2000", title: "일산 OO아파트 하자조사" },
        { year: "", title: "이하여백" },
      ]
    },
    {
      id: "region-gyeongsang",
      region: "경상권",
      color: "border-blue-400",
      projects: [
        { year: "2025", title: "대구고등법원 손해배상건" },
        { year: "2024", title: "대구지방법원 손해배상건" },
        { year: "2024", title: "청원지방법원 통영지원 손해배상건" },
        { year: "2024", title: "대구지방법원 소득금액변동통지 처분취소건" },
        { year: "2023", title: "부산지방법원 손해배상건" },
        { year: "2022", title: "창원지방법원 손해배상건" },
        { year: "2021", title: "창원지밥법원 공사대금건" },
        { year: "2021", title: "창원지방법원 손해배상건" },
        { year: "2020", title: "부산지방법원 손해배상건" },
        { year: "2019", title: "창원지방법원 보증금건" },
        { year: "2019", title: "대구지방법원 공사대금건" },
        { year: "2018", title: "부산고등법원 계약해지무효(OO화력발전)건" },
        { year: "2017", title: "창원지방법원 관리비건" },
        { year: "2017", title: "대구지방법원 손해배상건" },
        { year: "2017", title: "창원지방법원 진주지원 손해배상건" },
        { year: "2017", title: "울산지방법원 손해배상건" },
        { year: "2017", title: "대구지방법원 서부지원 공사대금건" },
        { year: "2015", title: "대구고등법원 물품대금건" },
        { year: "2015", title: "울산지방법원 물품대금건" },
        { year: "2015", title: "울산지방법원 공사대금건" },
        { year: "2015", title: "울산지방법원 손해배상건" },
        { year: "2014", title: "울산지방법원 손해배상건" },
        { year: "2014", title: "울산지방법원 증거보전건" },
        { year: "2013", title: "울산지방법원 손해배상건" },
        { year: "2013", title: "울산지방법원 하자보수비건" },
        { year: "2013", title: "울산지방법원 손해배상건" },
        { year: "2012", title: "대구고등법원 구상금건" },
        { year: "2012", title: "울산지방법원 공사대금건" },
        { year: "2012", title: "울산지방법원 물품대금건" },
        { year: "2004", title: "부산지방법원 손해배상건" },
        { year: "2002", title: "포항이동 OO아파트 하자조사" },
        { year: "2000", title: "부산금곡 OO아파트 하자조사" },
        { year: "2000", title: "부산 OO아파트 하자조사" },
        { year: "", title: "이하여백" },
      ]
    },
    {
      id: "region-jeolla",
      region: "전라권/충청권",
      color: "border-slate-500",
      projects: [
        { year: "2025", title: "청주지방법원 제천지원 손해배상건" },
        { year: "2025", title: "대전지방법원 홍성지원 기타(금전)건" },
        { year: "2024", title: "광주고등법원 하도급대금청구건" },
        { year: "2024", title: "대전지방법원 공사대금건" },
        { year: "2024", title: "대전지방법원 손해배상건" },
        { year: "2024", title: "대전지방법원 금형제작대금 청구건" },
        { year: "2024", title: "전주지방법원 용역대금 청구건" },
        { year: "2024", title: "대전지방법원 천안지원 공사대금건" },
        { year: "2024", title: "대전지방법원 손해배상건" },
        { year: "2024", title: "대전지방법원 공사대금건" },
        { year: "2023", title: "대전지방법원 손해배상건" },
        { year: "2023", title: "대전지방법원 공사대금건" },
        { year: "2023", title: "대전지방법원 천안지원 공사대금건" },
        { year: "2023", title: "광주고등법원 손해배상건" },
        { year: "2023", title: "청주지방법원 손해배상건" },
        { year: "2022", title: "청주지방법원 손해배상건" },
        { year: "2022", title: "대전지방법원 분양대금반환건" },
        { year: "2022", title: "대전지방법원 매매대금건" },
        { year: "2022", title: "광주고등법원 손해배상건" },
        { year: "2022", title: "광주고등법원 손해배상건" },
        { year: "2022", title: "광주고등법원 손해배상건" },
        { year: "2022", title: "대전지방법원 천안지원 손해배상건" },
        { year: "2022", title: "광주지방법원 공사대금건" },
        { year: "2022", title: "청주지방법원 공사대금건" },
        { year: "2022", title: "대전지방법원 천안지원 공사대금건" },
        { year: "2022", title: "광주지방법원 해남법원 공사지원건" },
        { year: "2021", title: "서울동부지방법원 공사대금건" },
        { year: "2021", title: "수원지방법원 계약금반환건" },
        { year: "2021", title: "인천지방법원 손해배상건" },
        { year: "2021", title: "전주지방법원 군산지원 손해배상건" },
        { year: "2021", title: "대전지방법원 공사대금(추가감정)건" },
        { year: "2021", title: "대전지방법원 하자보수건" },
        { year: "2021", title: "대전지법 천안지원 공사대금건" },
        { year: "2021", title: "청주지방법원 영동지원 손해배상건" },
        { year: "2021", title: "충주지원 음성군법원 청구이의건" },
        { year: "2020", title: "대전지방법원 증거보전건" },
        { year: "2020", title: "대전지법 천안지원 손해배상건" },
        { year: "2020", title: "대전지방법원 공사대금건" },
        { year: "2020", title: "대전지법 천안지원 공사대금건" },
        { year: "2020", title: "대전지방법원 손해배상건" },
        { year: "2020", title: "대전지방법원 공사대금건" },
        { year: "2020", title: "광주지방법원 추심금건" },
        { year: "2020", title: "대전지방법원 공사대금건" },
        { year: "2019", title: "대전고등법원 원상회복청구건" },
        { year: "2019", title: "광주지방법원 순천지원 공사대금반환건" },
        { year: "2019", title: "대전지방법원 소득금액변동통지처분취소건" },
        { year: "2019", title: "대전지방법원 공사대금건" },
        { year: "2019", title: "대전지방법원 공사대금건" },
        { year: "2018", title: "청주지방법원 공사대금건" },
        { year: "2018", title: "광주지방법원 투자정산금건" },
        { year: "2018", title: "대전지방법원 논산지원 유체동산인도건" },
        { year: "2018", title: "대전지방법원 약정금건" },
        { year: "2018", title: "대전지방법원 물품대금건" },
        { year: "2017", title: "대전지방법원 건물인도 및 손해배상건" },
        { year: "2017", title: "대한불교 대원사 신축공사 기성고 및 기성공사대금 감정건" },
        { year: "2017", title: "청주지방법원 공사대금건" },
        { year: "2016", title: "전주지방법원 손해배상건" },
        { year: "2016", title: "대전지방법원 손해배상건" },
        { year: "2016", title: "대전지방법원 천안지원 공사대금건(추가)" },
        { year: "2016", title: "광주지방법원 공사대금건" },
        { year: "2015", title: "전주지방법원 손해배상건" },
        { year: "2015", title: "청주지방법원 철조경계망철거건" },
        { year: "2015", title: "대전지방법원 천안지원 공사대금건" },
        { year: "2014", title: "광주지방법원 공사대금건" },
        { year: "2011", title: "정읍OO어린이집 공사대금 하자진단" },
        { year: "2011", title: "청주지방법원 하자보수보증금(피고)건" },
        { year: "2011", title: "청주지방법원 임차보증금건" },
        { year: "2010", title: "청주지방법원 하자보수보증금(원고)건" },
        { year: "2009", title: "청주지방법원 공사대금건" },
        { year: "2008", title: "청주지방법원 건물명도 외 여러건" },
        { year: "2007", title: "청주지방법원 공사대금건" },
        { year: "2005", title: "청주지방법원 공사대금건" },
        { year: "2005", title: "청주지방법원 손해배상건" },
        { year: "2004", title: "청주지방법원 공사대금건" },
        { year: "2000", title: "광주 OOOO아파트 하자조사" },
        { year: "", title: "이하여백" },
      ]
    },
    {
      id: "region-jeju",
      region: "제주권",
      color: "border-slate-400",
      projects: [
        { year: "2023", title: "제주지방법원 증거보전건" },
        { year: "", title: "이하여백" },
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
    <div className="min-h-screen bg-white">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #f8fafc; border-radius: 0px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #cbd5e1; border-radius: 0px; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #94a3b8; }
      `}</style>

      {/* Top Section: Sea-blue Background */}
      <div className="bg-[#f0f9ff] pt-32 pb-24 border-b border-slate-100/50">
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Map Container */}
            <div className="relative flex items-center justify-center py-6">
              <div className="relative w-full max-w-xl transition-all duration-1000">
                <img
                  src="/images/picts/map.PNG"
                  className="w-full h-auto opacity-100 contrast-[1.05] brightness-[1.05]"
                  alt="전국 수행 실적 지도"
                  onError={(e) => {
                    e.currentTarget.src = "https://raw.githubusercontent.com/t-on/image-repo/main/korea_map_gray.png";
                    e.currentTarget.className = "w-full h-auto opacity-40 grayscale";
                  }}
                />

                {/* Interactive Markers */}
                {MAP_MARKERS.map((marker, idx) => (
                  <button
                    key={`${marker.id}-${idx}`}
                    onClick={() => scrollToSection(marker.id)}
                    className={`absolute w-5 h-5 rounded-full border-2 shadow-lg hover:scale-125 transition-transform duration-300 group z-10 animate-pulse ${marker.color} border-white`}
                    style={{ top: marker.top, left: marker.left }}
                  >
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      {marker.label}
                    </span>
                    <span className={`absolute inset-0 rounded-full animate-ping opacity-75 ${marker.color}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Stats Section */}
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
        </div>
      </div>

      {/* Bottom Section: White Background */}
      <div className="max-w-7xl mx-auto px-6 py-32">
        {/* Detailed Project List Section */}
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
                  {group.projects.length - 1} Cases Archive
                </span>
              </div>

              {/* 프로젝트 리스트 컨테이너 */}
              <div className="relative rounded-none border border-slate-100 bg-white overflow-hidden shadow-xl shadow-slate-200/30 mx-auto">
                <div className="max-h-[450px] overflow-y-auto custom-scrollbar">
                  <table className="w-full text-left border-collapse">
                    <thead className="sticky top-0 z-40 bg-white/95 backdrop-blur-md">
                      <tr className="text-[10px] font-black text-slate-400 uppercase tracking-[0.15em] border-b border-slate-50">
                        <th className="py-6 pl-10 w-24">Year</th>
                        <th className="py-6">Project Description</th>
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
