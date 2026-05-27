import { featuredRepoOverrides, featuredRepos } from "@/data/featuredRepos";
import { GitHubLanguage, GitHubProject, GitHubProjectsResponse } from "@/types/github";

type GitHubRepoResponse = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  updated_at: string;
  language: string | null;
  topics?: string[];
  pinned?: boolean;
  languages_url: string;
};

const githubHeaders = (token?: string) => ({
  Accept: "application/vnd.github+json",
  "User-Agent": "Portfolio-Projects-Sync",
  ...(token ? { Authorization: `Bearer ${token}` } : {}),
});

async function fetchGitHubJson<T>(url: string, token?: string): Promise<T | null> {
  const request = async (authToken?: string) =>
    fetch(url, {
      headers: githubHeaders(authToken),
      next: { revalidate: 3600 },
    });

  const response = await request(token);

  if (!response.ok && token && (response.status === 401 || response.status === 403)) {
    const fallbackResponse = await request(undefined);
    if (!fallbackResponse.ok) {
      return null;
    }

    return (await fallbackResponse.json()) as T;
  }

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as T;
}

const languageColors: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3776ab",
  Java: "#b07219",
  "C++": "#f34b7d",
  "C#": "#178600",
  CSS: "#663399",
  HTML: "#e34c26",
  SQL: "#e38c00",
  Rust: "#dea584",
  Go: "#00add8",
  PHP: "#4f5d95",
  Shell: "#89e051",
};

function normalizeLanguages(payload: Record<string, number>): GitHubLanguage[] {
  return Object.entries(payload)
    .map(([name, bytes]) => ({ name, bytes, color: languageColors[name] }))
    .sort((left, right) => right.bytes - left.bytes);
}

function buildDisplayName(repoName: string): string {
  return repoName
    .replace(/[-_]+/g, " ")
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

async function fetchRepo(owner: string, repoName: string, token?: string): Promise<GitHubRepoResponse | null> {
  return fetchGitHubJson<GitHubRepoResponse>(`https://api.github.com/repos/${owner}/${repoName}`, token);
}

async function fetchRepoLanguages(
  languagesUrl: string,
  token?: string
): Promise<Record<string, number>> {
  const result = await fetchGitHubJson<Record<string, number>>(languagesUrl, token);
  return result ?? {};
}

export async function getFeaturedGitHubProjects(): Promise<GitHubProjectsResponse> {
  const owner = process.env.GITHUB_USERNAME?.trim();
  const token = process.env.GITHUB_TOKEN?.trim();

  if (!owner) {
    return {
      projects: [],
      errors: ["Missing GITHUB_USERNAME environment variable."],
    };
  }

  const results = await Promise.all(
    featuredRepos.map(async (repoName) => {
      const repo = await fetchRepo(owner, repoName, token);

      if (!repo) {
        return null;
      }

      const override = featuredRepoOverrides[repoName] ?? {};
      const languageMap = await fetchRepoLanguages(repo.languages_url, token);
      const languages = normalizeLanguages(languageMap);
      const topics = repo.topics ?? [];
      const title = override.displayName ?? buildDisplayName(repo.name);
      const primaryLanguage = repo.language ?? languages[0]?.name;
      const demoUrl = override.demoUrl || repo.homepage || undefined;

      const project: GitHubProject = {
        name: repo.name,
        displayName: title,
        description: repo.description?.trim() || "No description provided.",
        fullDescription:
          repo.description?.trim() || "This project is synced directly from the selected GitHub repository.",
        githubUrl: repo.html_url,
        demoUrl,
        stars: repo.stargazers_count,
        updatedAt: repo.updated_at,
        primaryLanguage,
        languages,
        topics,
        pinned: override.pinned ?? Boolean(repo.pinned),
        category: override.category ?? "GitHub Repository",
      };

      return project;
    })
  );

  const errors: string[] = [];
  if (results.some((project) => project === null)) {
    errors.push("One or more selected repositories could not be fetched. Check the repo names and visibility.");
  }

  return {
    projects: results.filter((project): project is GitHubProject => project !== null),
    errors,
  };
}
