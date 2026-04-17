export const SITE_URL = "https://aqsa-zam-zam-mirza-johar-baig-const.vercel.app";
export const SITE_NAME = "Aqsa Zam Zam Mirza Johar Baig";

export function absoluteUrl(path = "/"): string {
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path;
  }

  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function trimToLength(input: string, maxLength: number): string {
  const normalized = input.replace(/\s+/g, " ").trim();
  if (normalized.length <= maxLength) return normalized;
  return `${normalized.slice(0, maxLength - 1).trim()}…`;
}
