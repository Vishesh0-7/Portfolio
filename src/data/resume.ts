export interface Skill {
  name: string;
  proficiency: number; // 0-100
}

export interface SkillCategory {
  category: string;
  skills: Skill[];
}

export interface Experience {
  id: number;
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  techStack: string[];
  highlights?: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  year: string;
  location: string;
  gpa?: string;
  achievements?: string[];
}

export interface ResumeProject {
  id: number;
  title: string;
  description: string;
  tech: string[];
}

export interface SkillGroup {
  category: string;
  items: string[];
}

/**
 * Skills data organized by category
 * Placeholder content for technical skills
 */
export const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Python", proficiency: 95 },
      { name: "TypeScript", proficiency: 70 },
      { name: "JavaScript", proficiency: 70 },
      { name: "Java", proficiency: 50 },
      { name: "C++", proficiency: 50 },
      { name: "SQL", proficiency: 85 },
    ],
  },
  {
    category: "ML/AI Frameworks",
    skills: [
      { name: "PyTorch", proficiency: 90 },
      { name: "TensorFlow", proficiency: 85 },
      { name: "scikit-learn", proficiency: 90 },
      { name: "Hugging Face", proficiency: 85 },
      { name: "OpenCV", proficiency: 80 },
    ],
  },
  {
    category: "Web Development",
    skills: [
      { name: "React", proficiency: 95 },
      { name: "Next.js", proficiency: 90 },
      { name: "Node.js", proficiency: 85 },
      { name: "Express", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 90 },
    ],
  },
  {
    category: "Data & Cloud",
    skills: [
      { name: "AWS", proficiency: 85 },
      { name: "Docker", proficiency: 85 },
      { name: "PostgreSQL", proficiency: 80 },
      { name: "MongoDB", proficiency: 80 },
      { name: "Apache Spark", proficiency: 75 },
    ],
  },
];



/**
 * Education data
 * Placeholder content for educational background
 */
export const educationData: Education[] = [
  {
    id: 1,
    degree: "Master of Science in Computer Science",
    institution: "New Jersey Institute of Technology",
    year: "2024 - 2026",
    location: "Newark, NJ",
    gpa: "3.94/4.0",
    achievements: [ "Machine Learning",
  "Database Management and System Design",
  "Big Data",
  "Data Structures and Algorithms",
  "Data Mining",
  "Data Analytics",
  "Deep Learning",
  "Operating Systems",
  "Web Development"

    ],
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Artificial Intelligence and Machine Learning",
    institution: "R.N.S Institute of Technology",
    year: "2020 - 2024",
    location: "Bangalore, India",
    gpa: "7.44/10.0",
    achievements: ["Algorithms and Data Structure",
  "Database Management System",
  "Operating System",
  "Machine Learning",
  "Artificial Intelligence",
  "Neural Networks and Deep Learning",
  "Digital Image Processing"

    ],
  },
];

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "Java", "C++", "SQL"],
  },
  {
    category: "Frameworks",
    items: ["Next.js", "React", "Node.js", "Express", "Tailwind CSS", "FastAPI"],
  },
  {
    category: "Cloud & Big Data",
    items: ["AWS", "Docker", "Hadoop", "Spark", "MapReduce", "Oozie"],
  },
  {
    category: "AI/ML",
    items: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "LIME", "SHAP"],
  },
  {
    category: "Databases",
    items: ["MongoDB", "PostgreSQL", "SQLite", "SQLAlchemy", "MySQL"],
  },
  {
    category: "Tools",
    items: ["Git", "GitHub", "Linux", "Postman", "Jupyter", "Figma"],
  },
];


