export interface ResearchArea {
  id: number;
  title: string;
  description: string;
  methods: string[];
  icon?: string;
}

export interface ResearchWork {
  id: number;
  title: string;
  type: "ongoing" | "past";
  problemStatement: string;
  summary: string;
  dataset: string;
  approach: string;
  methods: string[];
  status: string;
  pdfUrl?: string;
  githubUrl?: string;
  fullDescription: string;
}

/**
 * Research areas data
 * Placeholder content for main research focus areas
 */
export const researchAreas: ResearchArea[] = [
{
  id: 1,
  title: "3D Microscopy Data Analysis & Microglial Morphology",
  description: "Engineered scalable Python-based services for automated 3D microscopy data processing, re-architected the VAMPIRE microglial analysis pipeline into modular components, and optimized distributed batch-processing workflows for large datasets, improving system reliability and throughput while reducing manual effort by 80%.",
  methods: [
    "Python",
    "Pipeline Automation",
    "Distributed Processing",
    "3D Microscopy Data Processing",
    "Modular Pipeline Design",
    "Parallelization",
    "CI/CD",
    "Version Control"
  ],
},


];

/**
 * Research work data (ongoing and past)
 * Placeholder content for detailed research projects
 */
export const researchWork: ResearchWork[] = [
{
  id: 1,
  title: "Multimodal Deep Learning for Microglia Morphology Analysis",
  type: "ongoing",
  problemStatement: "Classifying and clustering microglia cell morphologies to understand neuroinflammatory states and microglial activation patterns in neuroscience research.",
  summary: "Developed a comprehensive multimodal deep learning framework combining three approaches (supervised, unsupervised, and denoising autoencoders) to analyze microglia morphology using cell images, skeleton images, and quantitative morphological features.",
  dataset: "Microglia dataset with 323 original samples (630 augmented) including cell body images, skeleton images, and morphological features from SkeletonResults (170+ CSV files)",
  approach: "Multi-encoder CNN architecture processing three modalities: cell images (4-layer CNN), skeleton images (4-layer CNN), and morphological features (3-layer MLP) with fusion to 64-dimensional latent space",
  methods: ["PyTorch", "CNN", "Autoencoders", "Denoising Autoencoders", "KMeans Clustering", "Multi-task Learning", "Data Augmentation", "Cross-modal Fusion"],
  status: "Project completed with 3 approaches: Supervised (56.92% validation accuracy), Unsupervised clustering (5 morphological groups), Denoising autoencoder with robust feature extraction",
  pdfUrl: "/FinalReport.pdf",
  githubUrl: "https://github.com/Vishesh0-7/Microglia-Morphology.git",
  fullDescription: "This comprehensive research project addresses the challenge of analyzing microglia morphology using multimodal data integration. Three complementary approaches were developed: (1) Supervised Learning: A multimodal CNN classifier achieving 56.92% validation accuracy in categorizing 5 morphological classes (Homeostatic, Reactive, Amoeboid, Hyper Ramified, Rod); (2) Unsupervised Learning: Autoencoder-based clustering discovering 5 natural morphological groupings with both original (323 samples) and balanced/augmented datasets (630 samples) for improved cluster distribution; (3) Denoising Autoencoder: Robust feature learning through noise injection (Gaussian noise on cell images, salt-and-pepper on skeletons, dropout on features) to learn invariant representations. The framework successfully integrates three data modalities through specialized encoders that learn complementary representations, enabling both classification and exploratory analysis of microglial activation states. Complete pipelines are implemented with automated training, feature extraction, clustering, and comprehensive visualization tools including cluster summaries with representative cell contours.",
},
{
  id: 2,
  title: "Multimodal Deep Learning for Microglia Morphology Analysis",
  type: "past",
  problemStatement: "Classifying and clustering microglia cell morphologies to understand neuroinflammatory states and microglial activation patterns in neuroscience research.",
  summary: "Developed a comprehensive multimodal deep learning framework combining three approaches (supervised, unsupervised, and denoising autoencoders) to analyze microglia morphology using cell images, skeleton images, and quantitative morphological features.",
  dataset: "Microglia dataset with 323 original samples (630 augmented) including cell body images, skeleton images, and morphological features from SkeletonResults (170+ CSV files)",
  approach: "Multi-encoder CNN architecture processing three modalities: cell images (4-layer CNN), skeleton images (4-layer CNN), and morphological features (3-layer MLP) with fusion to 64-dimensional latent space",
  methods: ["PyTorch", "CNN", "Autoencoders", "Denoising Autoencoders", "KMeans Clustering", "Multi-task Learning", "Data Augmentation", "Cross-modal Fusion"],
  status: "Project completed with 3 approaches: Supervised (56.92% validation accuracy), Unsupervised clustering (5 morphological groups), Denoising autoencoder with robust feature extraction",
  pdfUrl: "/FinalReport.pdf",
  githubUrl: "https://github.com/Vishesh0-7/Microglia-Morphology.git",
  fullDescription: "This comprehensive research project addresses the challenge of analyzing microglia morphology using multimodal data integration. Three complementary approaches were developed: (1) Supervised Learning: A multimodal CNN classifier achieving 56.92% validation accuracy in categorizing 5 morphological classes (Homeostatic, Reactive, Amoeboid, Hyper Ramified, Rod); (2) Unsupervised Learning: Autoencoder-based clustering discovering 5 natural morphological groupings with both original (323 samples) and balanced/augmented datasets (630 samples) for improved cluster distribution; (3) Denoising Autoencoder: Robust feature learning through noise injection (Gaussian noise on cell images, salt-and-pepper on skeletons, dropout on features) to learn invariant representations. The framework successfully integrates three data modalities through specialized encoders that learn complementary representations, enabling both classification and exploratory analysis of microglial activation states. Complete pipelines are implemented with automated training, feature extraction, clustering, and comprehensive visualization tools including cluster summaries with representative cell contours.",
}
];

/**
 * Research tools and skills
 * Categorized list of technical skills
 */
export const researchSkills = {
  languages: ["Python", "R", "Julia", "MATLAB", "C++"],
  frameworks: ["PyTorch", "TensorFlow", "Keras", "JAX", "scikit-learn"],
  tools: ["Jupyter", "Git", "Docker", "Weights & Biases", "MLflow", "Apache Spark"],
  cloud: ["AWS SageMaker", "Google Cloud AI", "Azure ML", "Kubernetes"],
  visualization: ["Matplotlib", "Seaborn", "Plotly", "TensorBoard"],
  domains: ["NLP", "Computer Vision", "Reinforcement Learning", "Graph Neural Networks", "Time Series"],
};
