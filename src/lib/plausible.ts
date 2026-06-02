/**
 * plausible.ts — Plausible Analytics configuration resolver
 *
 * Plausible is a lightweight, open-source, cookieless web-analytics script.
 * It collects no personal data and sets no cookies, so it can run without a
 * consent prompt under GDPR/CCPA/PECR. We still honour an explicit analytics
 * opt-out at runtime (see PlausibleScript.astro).
 *
 * All configuration is driven by build-time `PUBLIC_*` env vars so the script
 * stays out of dev/CI builds unless explicitly turned on — mirroring the
 * `PUBLIC_ADS_ENABLED` gate used by AdSenseScript.astro.
 *
 *   PUBLIC_PLAUSIBLE_ENABLED  "true" to inject the script (build-time gate)
 *   PUBLIC_PLAUSIBLE_DOMAIN   the site as registered in Plausible
 *                             (defaults to the SITE_URL host, e.g. karaman.dev)
 *   PUBLIC_PLAUSIBLE_SRC      script URL — override for self-hosted instances
 *                             or script extensions (outbound-links, etc.)
 *
 * The resolver is a pure function so it can be unit-tested without an Astro
 * runtime; the `.astro` component simply feeds it `import.meta.env`.
 */
import { SITE_URL } from "../config/site";

/** Default Plausible script — Plausible Cloud, no extensions. */
export const DEFAULT_PLAUSIBLE_SRC = "https://plausible.io/js/script.js";

export interface PlausibleEnv {
  PUBLIC_PLAUSIBLE_ENABLED?: string;
  PUBLIC_PLAUSIBLE_DOMAIN?: string;
  PUBLIC_PLAUSIBLE_SRC?: string;
}

export interface PlausibleConfig {
  /** Whether the script should be rendered (flag on AND a domain is present). */
  enabled: boolean;
  /** `data-domain` value sent to Plausible. */
  domain: string;
  /** Resolved script `src`. */
  src: string;
}

/**
 * Derive the default `data-domain` from a site URL host (e.g. "karaman.dev").
 * Returns "" when the URL can't be parsed, which disables the integration.
 */
export function defaultPlausibleDomain(siteUrl: string = SITE_URL): string {
  try {
    return new URL(siteUrl).host;
  } catch {
    return "";
  }
}

/**
 * Resolve the Plausible configuration from env vars.
 *
 * The flag must be exactly the string "true" to enable (matching the existing
 * `PUBLIC_ADS_ENABLED === "true"` convention). An explicitly blank domain
 * disables the integration, since Plausible can't attribute hits without one.
 */
export function resolvePlausibleConfig(env: PlausibleEnv): PlausibleConfig {
  const flagOn = env.PUBLIC_PLAUSIBLE_ENABLED === "true";
  const domain = (
    env.PUBLIC_PLAUSIBLE_DOMAIN ?? defaultPlausibleDomain()
  ).trim();
  const src = (env.PUBLIC_PLAUSIBLE_SRC ?? DEFAULT_PLAUSIBLE_SRC).trim();

  return {
    enabled: flagOn && domain.length > 0,
    domain,
    src,
  };
}
