export interface FeaturedRepoOverride {
  displayName?: string;
  demoUrl?: string;
  pinned?: boolean;
  category?: string;
}

export interface GitHubLanguage {
  name: string;
  bytes: number;
  color?: string;
}

export interface GitHubProject {
  name: string;
  displayName: string;
  description: string;
  fullDescription: string;
  githubUrl: string;
  demoUrl?: string;
  stars: number;
  updatedAt: string;
  primaryLanguage?: string;
  languages: GitHubLanguage[];
  topics: string[];
  pinned: boolean;
  category: string;
}

export interface GitHubProjectsResponse {
  projects: GitHubProject[];
  errors: string[];
}
