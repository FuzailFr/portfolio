import type { GithubRepository } from "@/types/github";

const GITHUB_USERNAME = "FuzailFr";
const MAX_PROJECTS = 12;
const FETCH_TIMEOUT_MS = 6000;

export interface GithubProfile {
  username: string;
  avatarUrl: string;
  publicRepos: number;
  followers: number;
  following: number;
  bio: string | null;
  updatedAt: string;
}

export interface LanguageStat {
  language: string;
  count: number;
  percentage: number;
}

const FALLBACK_PROFILE: GithubProfile = {
  username: GITHUB_USERNAME,
  avatarUrl: `https://avatars.githubusercontent.com/u/191227431?v=4`,
  publicRepos: 6,
  followers: 2,
  following: 2,
  bio: "Building scalable software. Learning every day.",
  updatedAt: "2026-09-19T20:51:03Z",
};

// Known repositories to prioritize if present in the live API response.
const PRIORITY_REPOS = [
  "antigravity-essentials",
  "ZailTrack",
  "Rouve-Co.",
  "Smart-Waste-Management",
];

// Static fallback used only when the GitHub API is unavailable.
const FALLBACK_REPOSITORIES: GithubRepository[] = [
  {
    id: 1465579860,
    name: "antigravity-essentials",
    description: "Universal developer rules and skill bundle for Antigravity, Cursor, Claude Code, Windsurf, Copilot, ChatGPT, Claude.ai, and Gemini.",
    html_url: `https://github.com/${GITHUB_USERNAME}/antigravity-essentials`,
    homepage: null,
    language: "Python",
    topics: ["ai", "prompt-engineering", "developer-tools"],
    stargazers_count: 0,
    updated_at: "2026-11-20T16:13:55Z",
  },
  {
    id: -1,
    name: "Rouve-Co.",
    description: "Project by Fuzail Fazle Rabbi.",
    html_url: `https://github.com/${GITHUB_USERNAME}/Rouve-Co.`,
    homepage: "https://rouve-co.vercel.app",
    language: "CSS",
    topics: [],
    stargazers_count: 0,
    updated_at: "2026-09-19T20:51:03Z",
  },
  {
    id: -2,
    name: "ZailTrack",
    description: "Project by Fuzail Fazle Rabbi.",
    html_url: `https://github.com/${GITHUB_USERNAME}/ZailTrack`,
    homepage: "https://zail-track.vercel.app",
    language: "TypeScript",
    topics: [],
    stargazers_count: 0,
    updated_at: "2026-11-05T20:07:05Z",
  },
  {
    id: -3,
    name: "Smart-Waste-Management",
    description: "Project by Fuzail Fazle Rabbi.",
    html_url: `https://github.com/${GITHUB_USERNAME}/Smart-Waste-Management`,
    homepage: "https://fuzailfr.github.io/Smart-Waste-Management/",
    language: "Python",
    topics: [],
    stargazers_count: 0,
    updated_at: "2026-07-10T12:00:00Z",
  },
];

interface RawGithubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage?: string | null;
  language: string | null;
  topics?: string[];
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

function sanitizeGithubUrl(url: string): string {
  try {
    const parsed = new URL(url);
    if (parsed.protocol === "https:" && parsed.hostname === "github.com") {
      return url;
    }
  } catch {}
  return `https://github.com/${GITHUB_USERNAME}`;
}

export function sanitizeWebUrl(url: string | null | undefined): string | null {
  if (!url || typeof url !== "string") return null;
  const trimmed = url.trim();
  if (!trimmed) return null;
  try {
    const parsed = new URL(trimmed);
    if (parsed.protocol === "https:" || parsed.protocol === "http:") {
      return trimmed;
    }
  } catch {}
  return null;
}

function isValidRawRepo(repo: unknown): repo is RawGithubRepo {
  if (typeof repo !== "object" || repo === null) return false;
  const r = repo as Record<string, unknown>;
  return (
    typeof r.id === "number" &&
    typeof r.name === "string" &&
    typeof r.html_url === "string" &&
    typeof r.fork === "boolean" &&
    typeof r.archived === "boolean"
  );
}

function normalize(repo: RawGithubRepo): GithubRepository {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description,
    html_url: sanitizeGithubUrl(repo.html_url),
    homepage: sanitizeWebUrl(repo.homepage),
    language: repo.language,
    topics: repo.topics ?? [],
    stargazers_count: repo.stargazers_count,
    updated_at: repo.updated_at,
  };
}

function sortRepositories(repos: GithubRepository[]): GithubRepository[] {
  return [...repos].sort((a, b) => {
    const aPriority = PRIORITY_REPOS.indexOf(a.name);
    const bPriority = PRIORITY_REPOS.indexOf(b.name);

    if (aPriority !== -1 || bPriority !== -1) {
      if (aPriority === -1) return 1;
      if (bPriority === -1) return -1;
      return aPriority - bPriority;
    }

    return new Date(b.updated_at).getTime() - new Date(a.updated_at).getTime();
  });
}

function getGithubHeaders(): HeadersInit {
  const headers: Record<string, string> = {
    Accept: "application/vnd.github+json",
  };
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_TOKEN.trim() !== "") {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN.trim()}`;
  }
  return headers;
}

export async function getGithubRepositories(): Promise<GithubRepository[]> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
      {
        signal: controller.signal,
        headers: getGithubHeaders(),
        next: { revalidate: 3600 },
      }
    );

    clearTimeout(timeout);

    if (!response.ok) {
      return FALLBACK_REPOSITORIES;
    }

    const data: unknown[] = await response.json();

    if (!Array.isArray(data)) {
      return FALLBACK_REPOSITORIES;
    }

    const repositories = data
      .filter(isValidRawRepo)
      .filter((repo) => !repo.fork && !repo.archived)
      .map(normalize);

    if (repositories.length === 0) {
      return FALLBACK_REPOSITORIES;
    }

    return sortRepositories(repositories).slice(0, MAX_PROJECTS);
  } catch {
    clearTimeout(timeout);
    return FALLBACK_REPOSITORIES;
  }
}

export async function getGithubProfile(): Promise<GithubProfile> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);

  try {
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}`,
      {
        signal: controller.signal,
        headers: getGithubHeaders(),
        next: { revalidate: 3600 },
      }
    );

    clearTimeout(timeout);

    if (!response.ok) {
      return FALLBACK_PROFILE;
    }

    const data = await response.json();
    if (typeof data !== "object" || data === null) {
      return FALLBACK_PROFILE;
    }

    return {
      username: typeof data.login === "string" ? data.login : GITHUB_USERNAME,
      avatarUrl:
        typeof data.avatar_url === "string"
          ? data.avatar_url
          : FALLBACK_PROFILE.avatarUrl,
      publicRepos:
        typeof data.public_repos === "number"
          ? data.public_repos
          : FALLBACK_PROFILE.publicRepos,
      followers:
        typeof data.followers === "number"
          ? data.followers
          : FALLBACK_PROFILE.followers,
      following:
        typeof data.following === "number"
          ? data.following
          : FALLBACK_PROFILE.following,
      bio: typeof data.bio === "string" ? data.bio : FALLBACK_PROFILE.bio,
      updatedAt:
        typeof data.updated_at === "string"
          ? data.updated_at
          : FALLBACK_PROFILE.updatedAt,
    };
  } catch {
    clearTimeout(timeout);
    return FALLBACK_PROFILE;
  }
}

export function computeLanguageStats(repos: GithubRepository[]): LanguageStat[] {
  const counts: Record<string, number> = {};
  let totalWithLanguage = 0;

  for (const repo of repos) {
    if (repo.language && repo.language.trim() !== "") {
      counts[repo.language] = (counts[repo.language] || 0) + 1;
      totalWithLanguage++;
    }
  }

  if (totalWithLanguage === 0) {
    return [];
  }

  return Object.entries(counts)
    .map(([language, count]) => ({
      language,
      count,
      percentage: Math.round((count / totalWithLanguage) * 100),
    }))
    .sort((a, b) => b.count - a.count);
}

export function formatRelativeTime(dateString: string): string {
  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "baru-baru ini";

  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000);

  if (diffInSeconds < 60) return "beberapa detik lalu";
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  if (diffInMinutes < 60) return `${diffInMinutes} menit lalu`;
  const diffInHours = Math.floor(diffInMinutes / 60);
  if (diffInHours < 24) return `${diffInHours} jam lalu`;
  const diffInDays = Math.floor(diffInHours / 24);
  if (diffInDays < 30) return `${diffInDays} hari lalu`;
  const diffInMonths = Math.floor(diffInDays / 30);
  if (diffInMonths < 12) return `${diffInMonths} bulan lalu`;
  const diffInYears = Math.floor(diffInDays / 365);
  return `${diffInYears} tahun lalu`;
}
