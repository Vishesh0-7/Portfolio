import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { normalizeLanguages, buildDisplayName, getFeaturedGitHubProjects } from "./github";

describe("normalizeLanguages", () => {
  it("sorts languages by byte count descending", () => {
    const result = normalizeLanguages({ JavaScript: 100, TypeScript: 500, CSS: 50 });
    expect(result.map((l) => l.name)).toEqual(["TypeScript", "JavaScript", "CSS"]);
  });

  it("attaches known colors and omits unknown ones", () => {
    const result = normalizeLanguages({ TypeScript: 10, Brainfuck: 5 });
    expect(result.find((l) => l.name === "TypeScript")?.color).toBe("#3178c6");
    expect(result.find((l) => l.name === "Brainfuck")?.color).toBeUndefined();
  });

  it("returns an empty array for an empty payload", () => {
    expect(normalizeLanguages({})).toEqual([]);
  });
});

describe("buildDisplayName", () => {
  it("replaces dashes and underscores with spaces and title-cases words", () => {
    expect(buildDisplayName("my-cool_project")).toBe("My Cool Project");
  });

  it("collapses repeated separators", () => {
    expect(buildDisplayName("foo--bar__baz")).toBe("Foo Bar Baz");
  });

  it("handles a single word", () => {
    expect(buildDisplayName("portfolio")).toBe("Portfolio");
  });
});

describe("getFeaturedGitHubProjects", () => {
  const originalEnv = { ...process.env };

  beforeEach(() => {
    process.env.GITHUB_USERNAME = "testuser";
    delete process.env.GITHUB_TOKEN;
  });

  afterEach(() => {
    process.env = { ...originalEnv };
    vi.unstubAllGlobals();
  });

  it("returns an error and no projects when GITHUB_USERNAME is missing", async () => {
    delete process.env.GITHUB_USERNAME;
    const result = await getFeaturedGitHubProjects();
    expect(result.projects).toEqual([]);
    expect(result.errors[0]).toMatch(/GITHUB_USERNAME/);
  });

  it("maps a successful repo + languages response into a GitHubProject", async () => {
    const fetchMock = vi.fn(async (url: string) => {
      if (url.includes("/languages")) {
        return {
          ok: true,
          status: 200,
          json: async () => ({ TypeScript: 100 }),
        } as Response;
      }
      return {
        ok: true,
        status: 200,
        json: async () => ({
          name: "Portfolio",
          description: "  A test repo  ",
          html_url: "https://github.com/testuser/Portfolio",
          homepage: null,
          stargazers_count: 3,
          updated_at: "2026-01-01T00:00:00Z",
          language: "TypeScript",
          topics: ["nextjs"],
          languages_url: "https://api.github.com/repos/testuser/Portfolio/languages",
        }),
      } as Response;
    });
    vi.stubGlobal("fetch", fetchMock);

    const result = await getFeaturedGitHubProjects();

    expect(result.errors).toEqual([]);
    expect(result.projects.length).toBeGreaterThan(0);
    const portfolio = result.projects.find((p) => p.name === "Portfolio");
    expect(portfolio).toBeDefined();
    expect(portfolio?.description).toBe("A test repo");
    expect(portfolio?.stars).toBe(3);
    expect(portfolio?.languages[0]).toMatchObject({ name: "TypeScript" });
  });

  it("reports an error when a repo fetch fails but keeps successful ones", async () => {
    const fetchMock = vi.fn(async () => {
      return { ok: false, status: 404, json: async () => ({}) } as Response;
    });
    vi.stubGlobal("fetch", fetchMock);

    const result = await getFeaturedGitHubProjects();

    expect(result.projects).toEqual([]);
    expect(result.errors.length).toBeGreaterThan(0);
  });
});
