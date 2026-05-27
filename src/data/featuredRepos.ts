import { FeaturedRepoOverride } from "@/types/github";

export const featuredRepos = [
  "Aurora-AI-Invoice-Generator",
  "Autonomous-Fleet-Simulator",
  "Github-Analyzer",
  "AuRA-Discovery",
  "CS698_Project_TrelloPlus",
  "Portfolio",
  "SchedLab",
  "vetgraph",
  "Microglia-Morphology",
  "fastapi-sqlalchemy-calculator",
  "Automated-EDA",
  "Chicago-Crime-Analysis",
] as const;

export const featuredRepoOverrides: Record<string, FeaturedRepoOverride> = {
  "Aurora-AI-Invoice-Generator": {
    displayName: "Aurora AI Invoice Generator",
    category: "Full-Stack / AI",
    pinned: true,
  },
  "Autonomous-Fleet-Simulator": {
    displayName: "Autonomous Fleet Simulator",
    category: "Robotics / Simulation",
    pinned: true,
  },
  "Github-Analyzer": {
    displayName: "GitHub Analyzer",
    category: "Data Visualization",
    pinned: true,
  },
  SchedLab: {
    displayName: "OS Scheduling Simulator",
    category: "Systems / Web App",
    pinned: true,
  },
  vetgraph: {
    displayName: "VetGraph",
    category: "AI / Knowledge Graphs",
    pinned: true,
  },
  "Microglia-Morphology": {
    displayName: "Microglia Morphology Analysis",
    category: "Machine Learning",
    pinned: true,
  },
  "AuRA-Discovery": {
    displayName: "AuRA Discovery",
    category: "AI / Research",
  },
  "CS698_Project_TrelloPlus": {
    displayName: "TrelloPlus (CS698)",
    category: "Frontend / Tools",
  },
  "Portfolio": {
    displayName: "Portfolio Website",
    category: "Web / Personal",
    pinned: true,
  },
  "fastapi-sqlalchemy-calculator": {
    displayName: "Full-Stack Calculator",
    category: "Backend / API",
  },
  "Automated-EDA": {
    displayName: "Automated EDA Tool",
    category: "Data Science",
  },
  "Chicago-Crime-Analysis": {
    displayName: "Chicago Crime Analysis",
    category: "Big Data / Analytics",
  },
};
