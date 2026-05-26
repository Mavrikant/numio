// Build/start timestamp. Evaluated once per Astro process boot — so it reflects
// the last `npm run build` (in production) or the last dev-server restart (in dev).
export const BUILD_TIME = new Date().toISOString();
