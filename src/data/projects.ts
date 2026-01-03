export interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  videoUrl?: string;
  imageUrls?: string[];
  technologies: string[];
  category: string;
  date: string;
  githubUrl?: string;
  demoUrl?: string;
  keywords: string[];
}

/**
 * Dummy project data with extended fields
 * Replace with real project information
 */
export const projects: Project[] = [
 
  {
    id: 1,
    title: "Aurora AI Invoice Generator",
    description: "AI-powered invoice management system built with MERN stack that automates data extraction and generates professional invoices.",
    fullDescription: "A modern, AI-powered invoice management system that streamlines the invoice creation process by leveraging artificial intelligence to automate data extraction and generate professional invoices. Features include secure JWT authentication, interactive dashboard, invoice management & tracking, invoice reminders, and a modern UI built with React and Tailwind CSS. The system uses Google's Generative AI for intelligent data processing.",
    technologies: ["React", "Node.js", "Express", "MongoDB", "Google AI", "JWT", "Tailwind CSS"],
    category: "Web Development",
    date: "2025-11",
    videoUrl: "/videos/Project_1.mp4",
    githubUrl: "https://github.com/Vishesh0-7/Aurora-AI-Invoice-Generator.git",
    demoUrl: "https://aurora-ai-invoice-generator-3.onrender.com/",
    keywords: ["ai", "invoice", "automation", "mern", "authentication", "dashboard"],
  },
  {
    id: 2,
    title: "Expense Tracker",
    description: "Full-stack expense tracking application that automatically parses bank statements and provides insightful analytics.",
    fullDescription: "A comprehensive expense tracking web application that automatically parses bank statements (PDF/CSV) and provides insightful analytics. Built with FastAPI backend for robust API services and React frontend with Recharts for data visualization. Features automatic transaction categorization, intelligent table detection from PDFs using pdfplumber, SQLAlchemy ORM with SQLite database, and comprehensive analytics with visual charts. Includes automatic metadata extraction from filenames and real-time data processing.",
    technologies: ["React", "FastAPI", "Python", "SQLite", "SQLAlchemy", "Tailwind CSS", "Recharts", "Pandas"],
    category: "Web Development",
    date: "2025-11",
    githubUrl: "",
    demoUrl: "",
    imageUrls: ["images/Project_2.png"],
    keywords: ["expenses", "tracker", "analytics", "pdf-parsing", "finance", "fullstack"],
  },
  {
    id: 3,
    title: "Warehouse Fleet Simulator",
    description: "Real-time warehouse robot fleet simulation system with FastAPI backend managing autonomous robots on a grid.",
    fullDescription: "A Python backend application for simulating warehouse robots on a 20×20 grid using FastAPI. Simulates 5 robots with real-time updates every 2 seconds, each with unique properties including position, operational status (idle, moving, charging, delivering, returning), and battery level. Features REST API for fleet management, modular design for easy extension with obstacles and pathfinding, and automatic simulation with real-time status updates.",
    technologies: ["Python", "FastAPI", "Pydantic", "REST API"],
    category: "Simulation",
    date: "2025-12",
    githubUrl: "https://github.com/Vishesh0-7/Autonomous-Fleet-Simulator.git",
    demoUrl: "",
    imageUrls: ["images/Project_3.png"],
    keywords: ["simulation", "robotics", "fleet-management", "warehouse", "realtime", "automation"],
  },
  {
    id: 4,
    title: "Fraud Detection System",
    description: "Machine learning system for credit card fraud detection using predictive analytics and classification algorithms.",
    fullDescription: "A comprehensive fraud detection system using predictive analytics to identify fraudulent credit card transactions. Implements multiple machine learning models including data preprocessing, exploratory data analysis with visualizations, handling imbalanced datasets, feature engineering, and model evaluation. Uses pandas for data manipulation, matplotlib and seaborn for visualizations, and scikit-learn for machine learning pipelines. Analyzes transaction patterns by date, card type, and amount to detect fraudulent behavior.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn", "Jupyter"],
    category: "Data Science",
    date: "2025-12",
    githubUrl: "",
    demoUrl: "",
    imageUrls: ["images/Project_4.jpg"],
    keywords: ["fraud-detection", "machine-learning", "analytics", "classification", "data-science"],
  },
  {
    id: 5,
    title: "GitHub Profile Analyzer",
    description: "Modern React web app that analyzes GitHub user profiles and visualizes repository insights with interactive charts.",
    fullDescription: "A fast, modern React + Tailwind CSS web app that analyzes a GitHub user's public repositories and visualizes insights like top languages, commit activity, and repo popularity with clean, responsive charts. Features include quick profile overview with avatar and bio, repo insights with counts and activity overview, interactive visualizations using Chart.js for languages and commits, follower/following exploration with modals, repository list with README preview, dark mode by default, and comprehensive error handling for rate limits and not found errors.",
    technologies: ["React", "Tailwind CSS", "Chart.js", "Axios", "GitHub API"],
    category: "Web Development",
    imageUrls: ["images/Project_5.jpg"],
    date: "2025-11",
    githubUrl: "https://github.com/Vishesh0-7/Github-Analyzer.git",
    demoUrl: "https://github-analyzer-sg31.onrender.com/",
    keywords: ["github", "analytics", "visualization", "react", "api-integration", "charts"],
  },
  {
    id: 6,
    title: "Heart Failure Prediction",
    description: "Complete machine learning pipeline for predicting heart failure using clinical records with interpretability analysis.",
    fullDescription: "A comprehensive machine learning project that predicts heart failure outcomes using clinical records from the UCI ML Repository. Features a complete ML pipeline including extensive exploratory data analysis, multiple ML models (Logistic Regression, Decision Tree, Random Forest, XGBoost) with GridSearchCV optimization, and comprehensive model interpretability using ELI5, LIME, and SHAP. Dataset contains 299 rows with 13 clinical features. Includes ROC-AUC analysis, confusion matrices, and detailed classification reports for model comparison.",
    technologies: ["Python", "Scikit-learn", "XGBoost", "Pandas", "SHAP", "LIME", "Matplotlib", "Seaborn"],
    category: "Data Science",
    date: "2025-11",
    githubUrl: "",
    demoUrl: "",
    imageUrls: ["images/Project_6.jpg"],
    keywords: ["healthcare", "machine-learning", "prediction", "interpretability", "classification"],
  },
  {
    id: 7,
    title: "Microglia Morphology Analysis",
    description: "Deep learning system for analyzing microglia cell morphology using supervised and unsupervised learning approaches.",
    fullDescription: "A comprehensive deep learning project for analyzing microglia cell morphology using multimodal neural networks. Implements three approaches: supervised multimodal CNN classifier (56.92% validation accuracy), unsupervised autoencoder with KMeans clustering, and denoising autoencoder for robust feature extraction. Uses three input modalities: cell body images, skeleton images, and extracted skeleton features. Includes data augmentation for balanced datasets, extensive architecture diagrams, detailed results comparison, and visualization of morphological patterns. Built with PyTorch for deep learning implementations.",
    technologies: ["Python", "PyTorch", "Scikit-learn", "NumPy", "Matplotlib", "Deep Learning"],
    category: "Machine Learning",
    date: "2025-12",
    githubUrl: "https://github.com/Vishesh0-7/Microglia-Morphology.git",
    demoUrl: "",
    imageUrls: ["images/Project_7.jpg"],
    keywords: ["deep-learning", "cnn", "autoencoder", "clustering", "image-analysis", "neuroscience"],
  },
  {
    id: 8,
    title: "OS Scheduling Simulator",
    description: "Full-stack web application for simulating CPU scheduling algorithms and Banker's algorithm for deadlock avoidance.",
    fullDescription: "A comprehensive full-stack web application for simulating various CPU scheduling algorithms (FCFS, SJF, SRTF, Priority, Round Robin) and the Banker's algorithm for deadlock avoidance. Built with React + Vite frontend featuring responsive design with Tailwind CSS, interactive editable tables, Gantt charts, and real-time validation. FastAPI backend with comprehensive input validation using Pydantic, efficient algorithm implementations, and auto-generated API documentation. Supports I/O burst handling, both preemptive and non-preemptive scheduling, safe state detection, and resource request simulation.",
    technologies: ["React", "FastAPI", "Python", "Tailwind CSS", "Pydantic", "Vite"],
    category: "Web Development",
    date: "2025-12",
    githubUrl: "https://github.com/Vishesh0-7/SchedLab.git",
    demoUrl: "",
    imageUrls: ["images/Project_8.png"],
    keywords: ["os", "scheduling", "algorithms", "simulation", "education", "fullstack"],
  },
  {
    id: 9,
    title: "Personal Portfolio Website",
    description: "Modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS featuring dark mode.",
    fullDescription: "A modern, responsive portfolio website built with Next.js 14 App Router, TypeScript, and Tailwind CSS. Features include clean, minimal, and professional design, light/dark mode toggle with next-themes, fully responsive layout for mobile and desktop, smooth animations and transitions, and modular component architecture. Includes sections for hero/landing, about, projects grid with interactive cards, work experience timeline, resume download, contact information, and footer. Built with type safety and modern React patterns.",
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Lucide Icons"],
    category: "Web Development",
    date: "2026-01",
    videoUrl: "/videos/Project_9.mp4",
    githubUrl: "",
    demoUrl: "",
    keywords: ["portfolio", "nextjs", "typescript", "responsive", "dark-mode", "modern-ui"],
  },
  {
    id: 10,
    title: "Priority Round Robin Scheduler",
    description: "C++ implementation of priority-based round robin CPU scheduling algorithm with detailed process simulation.",
    fullDescription: "A comprehensive C++ implementation of a priority-based round robin CPU scheduling algorithm. Features include priority-based ready queue management with automatic sorting, time quantum-based execution, signal handling for process management, detailed process tracking (arrival time, remaining time, signals received, executed ticks), and comprehensive statistics output. Implements a custom ready queue data structure with priority ordering, process context switching, and execution timeline tracking. Provides detailed console output showing process states and queue operations at each time tick.",
    technologies: ["C++", "Data Structures", "Algorithms"],
    category: "System Programming",
    date: "2025-12",
    githubUrl: "",
    imageUrls: ["images/Project_10.png"],
    demoUrl: "",
    keywords: ["os", "scheduling", "priority", "round-robin", "cpp", "simulation"],
  },
  {
    id: 11,
    title: "Round Robin Scheduler",
    description: "C++ CPU scheduling simulator implementing Round Robin algorithm with I/O handling and comprehensive metrics.",
    fullDescription: "A detailed C++ implementation of the Round Robin CPU scheduling algorithm with support for I/O operations. Features include time quantum-based preemptive scheduling, I/O request handling with blocked queue management, comprehensive process metrics (completion time, turnaround time, waiting time, response time), Gantt chart generation, ready and blocked queue implementations using linked lists, and detailed statistics calculation. Simulates realistic process scheduling with arrival times, burst times, and I/O operations. Provides complete execution timeline and performance metrics.",
    technologies: ["C++", "Data Structures", "Algorithms"],
    category: "System Programming",
    date: "2025-10",
    imageUrls: ["images/Project_11.png"],
    githubUrl: "",
    demoUrl: "",
    keywords: ["os", "scheduling", "round-robin", "io-handling", "cpp", "metrics"],
  },

  {
  id: 12,
  title: "Chicago Crime Analysis",
  description: "Big data project analyzing 8+ million crime records to extract patterns, trends, and predictive insights using Hadoop and distributed processing.",
  fullDescription: "A large-scale data analysis project on the Chicago Crime Dataset containing over 8 million records. Designed and implemented Hadoop MapReduce and Oozie workflows on AWS EC2 instances to process, clean, and analyze crime data efficiently. Features include scalable job orchestration, temporal and spatial crime pattern analysis, predictive modeling for crime hotspots, and performance optimization for distributed computation. Results include actionable insights and visualizations for law enforcement planning and data-driven decision-making.",
  technologies: ["Hadoop", "Oozie", "AWS EC2", "Python", "MapReduce", "Data Analysis", "Big Data", "SQL"],
  category: "Data Analysis / Big Data",
  date: "2024-12",
  githubUrl: "https://github.com/Vishesh0-7/Chicago-Crime-Analysis.git",
  imageUrls: ["images/Project_12.png"],
  demoUrl: "",
  keywords: ["big data", "crime analysis", "Hadoop", "MapReduce", "AWS", "data analytics", "Chicago"],
},

{
  id: 13,
  title: "Full-Stack Calculator",
  description: "A full-stack calculator application with advanced calculations, user interaction, and optional history/reporting features.",
  fullDescription: "A comprehensive full-stack calculator built with FastAPI backend, SQLAlchemy ORM for database integration, and Docker for containerized deployment. Supports advanced mathematical calculations, user interaction, and optional history and reporting features. Includes a responsive frontend, robust API design, and comprehensive unit, integration, and end-to-end tests to ensure reliability and scalability.",
  technologies: ["FastAPI", "SQLAlchemy", "Docker", "Python", "Frontend", "Unit Testing", "Integration Testing", "E2E Testing"],
  category: "Web Development / Full-Stack",
  date: "2025-12",
  githubUrl: "https://github.com/Vishesh0-7/fastapi-sqlalchemy-calculator.git",
  demoUrl: "",
  imageUrls: ["images/Project_13.jpg"],
  keywords: ["calculator", "full-stack", "docker", "fastapi", "database", "testing"],
},

{
  id: 14,
  title: "Automated EDA Tool",
  description: "Python-based tool that performs end-to-end exploratory data analysis, generating summary statistics, visualizations, and data quality reports automatically.",
  fullDescription: "Automated EDA is a Python tool designed for quick and comprehensive exploratory data analysis on any dataset. It automatically generates summary statistics, visualizations, and data quality reports, helping data scientists and analysts quickly understand, clean, and preprocess data for modeling or further analysis. The tool supports multiple file formats and provides customizable outputs for different datasets.",
  technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Data Analysis", "Data Preprocessing", "Visualization"],
  category: "Data Science / Python Tools",
  date: "2025-11",
  githubUrl: "https://github.com/Vishesh0-7/Automated-EDA.git",
  imageUrls: ["images/Project_14.png"],
  demoUrl: "",
  keywords: ["EDA", "exploratory data analysis", "data preprocessing", "visualization", "Python", "automation"],
},


];
