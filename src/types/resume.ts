import { ReactNode } from "react";

export interface ProjectData {
  title: string;
  projectType: string;
  href?: string;
  dates?: string;
  active?: boolean;
  description: string;
  technologies: readonly string[];
  links?: readonly {
    icon: ReactNode;
    type: string;
    href: string;
  }[];
  image?: string;
  video?: string;
}

export interface WorkData {
  company: string;
  href?: string;
  badges?: readonly string[];
  location?: string;
  title: string;
  logoUrl?: string;
  start: string;
  end?: string;
  description: string;
}

export interface EducationData {
  school: string;
  href?: string;
  location?: string;
  degree: string;
  logoUrl?: string;
  start: string;
  end: string;
  description?: string;
}

export interface HackathonData {
  title: string;
  dates: string;
  location?: string;
  description: string;
  image?: string;
  links?: readonly {
    icon?: ReactNode;
    type: string;
    href: string;
  }[];
}