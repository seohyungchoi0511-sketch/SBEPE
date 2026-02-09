
export interface ServiceCardProps {
  title: string;
  description: string;
  tags: string[];
}

export interface MetricProps {
  label: string;
  value: number;
  suffix?: string;
  subtext: string;
}

export interface ProjectProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
}

export interface NewsProps {
  category: string;
  date: string;
  title: string;
  image?: string;
}

export interface AwardItem {
  year: string;
  title: string;
  organization: string;
}
