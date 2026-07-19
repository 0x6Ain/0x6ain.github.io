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

export interface CaseStudyEntry {
  slug: string;
  company: string;
  title: string;
  subtitle: string;
  summary: string;
  tags: string[];
  steps: CaseStudyStep[];
}

export interface CaseStudiesPageContent {
  title: string;
  intro: string;
  readMore: string;
  backToList: string;
  viewAll: string;
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

export interface ContactContent {
  heading: string;
  description: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submitLabel: string;
  sendingLabel: string;
  successMessage: string;
  errorMessage: string;
  orEmailDirectly: string;
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
    handbook: string;
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
  caseStudies: CaseStudyEntry[];
  caseStudiesPage: CaseStudiesPageContent;
  skillGroups: SkillGroup[];
  education: EducationContent;
  freelanceProjects: FreelanceProject[];
  contact: ContactContent;
  footer: {
    tagline: string;
    rights: string;
  };
}
