/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface ImportMetaEnv {
  /** Enable Google AdSense (build-time gate). Set to "true" to enable. */
  readonly PUBLIC_ADS_ENABLED?: string;
  /** Enable Plausible Analytics (build-time gate). Set to "true" to enable. */
  readonly PUBLIC_PLAUSIBLE_ENABLED?: string;
  /** Plausible `data-domain`. Defaults to the SITE_URL host (e.g. karaman.dev). */
  readonly PUBLIC_PLAUSIBLE_DOMAIN?: string;
  /** Plausible script src — override for self-hosting or script extensions. */
  readonly PUBLIC_PLAUSIBLE_SRC?: string;
}

interface Window {
  /** Plausible's analytics callback + pre-load event queue. */
  plausible?: {
    (eventName: string, options?: Record<string, unknown>): void;
    q?: IArguments[];
  };
}
