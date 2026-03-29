const FALLBACK_SITE_URL = "http://localhost:3000";

export function getSiteUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

  if (!configuredUrl) {
    return FALLBACK_SITE_URL;
  }

  const normalizedUrl =
    configuredUrl.startsWith("http://") || configuredUrl.startsWith("https://")
      ? configuredUrl
      : `https://${configuredUrl}`;

  return normalizedUrl.replace(/\/+$/, "");
}
