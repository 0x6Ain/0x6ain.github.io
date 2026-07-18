export type Direction = 'good' | 'neutral';

export interface ImpactStat {
  label: string;
  value: string;
  detail: string;
  direction: Direction;
}

export interface Experience {
  company: string;
  period: string;
  summary: string;
  role: string;
  highlights: string[];
  stack: string[];
}

export interface SideProject {
  title: string;
  period: string;
  role: string;
  highlights: string[];
  achievements: string[];
  stack: string[];
}

export interface CaseStudyStep {
  label: string;
  body: string;
}

export interface CaseStudyContent {
  company: string;
  title: string;
  subtitle: string;
  steps: CaseStudyStep[];
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface EducationContent {
  school: string;
  degree: string;
  period: string;
  notes: string[];
}

export interface FreelanceProject {
  title: string;
  period: string;
  points: string[];
}

export interface SiteContent {
  profile: {
    name: string;
    subName: string;
    title: string;
    location: string;
    email: string;
    github: string;
    githubUrl: string;
    intro: string;
    yearsOfExperience: number;
    yearsSuffix: string;
  };
  nav: {
    impact: string;
    experience: string;
    caseStudy: string;
    skills: string;
    contact: string;
  };
  sectionLabels: {
    impact: string;
    experience: string;
    caseStudy: string;
    skills: string;
    education: string;
    freelance: string;
  };
  impactStats: ImpactStat[];
  experiences: Experience[];
  sideProject: SideProject;
  caseStudy: CaseStudyContent;
  skillGroups: SkillGroup[];
  education: EducationContent;
  freelanceProjects: FreelanceProject[];
  footer: {
    tagline: string;
    rights: string;
  };
}
