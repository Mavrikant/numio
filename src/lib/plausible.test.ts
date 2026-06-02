import { describe, it, expect } from "vitest";
import {
  DEFAULT_PLAUSIBLE_SRC,
  defaultPlausibleDomain,
  resolvePlausibleConfig,
} from "./plausible";

describe("defaultPlausibleDomain", () => {
  it("derives the bare host from a site URL", () => {
    expect(defaultPlausibleDomain("https://karaman.dev")).toBe("karaman.dev");
    expect(defaultPlausibleDomain("https://example.com/numio/")).toBe(
      "example.com",
    );
  });

  it("keeps a port if one is present", () => {
    expect(defaultPlausibleDomain("http://localhost:4321")).toBe(
      "localhost:4321",
    );
  });

  it("returns an empty string for an unparseable URL", () => {
    expect(defaultPlausibleDomain("not a url")).toBe("");
  });
});

describe("resolvePlausibleConfig", () => {
  it("is disabled when the flag is unset", () => {
    expect(resolvePlausibleConfig({}).enabled).toBe(false);
  });

  it("is disabled unless the flag is exactly 'true'", () => {
    expect(
      resolvePlausibleConfig({ PUBLIC_PLAUSIBLE_ENABLED: "1" }).enabled,
    ).toBe(false);
    expect(
      resolvePlausibleConfig({ PUBLIC_PLAUSIBLE_ENABLED: "TRUE" }).enabled,
    ).toBe(false);
    expect(
      resolvePlausibleConfig({ PUBLIC_PLAUSIBLE_ENABLED: "false" }).enabled,
    ).toBe(false);
  });

  it("enables with the site-derived domain and default src when 'true'", () => {
    const c = resolvePlausibleConfig({ PUBLIC_PLAUSIBLE_ENABLED: "true" });
    expect(c.enabled).toBe(true);
    expect(c.domain).toBe(defaultPlausibleDomain());
    expect(c.src).toBe(DEFAULT_PLAUSIBLE_SRC);
  });

  it("honours a custom domain and src (e.g. self-hosted)", () => {
    const c = resolvePlausibleConfig({
      PUBLIC_PLAUSIBLE_ENABLED: "true",
      PUBLIC_PLAUSIBLE_DOMAIN: "foo.example",
      PUBLIC_PLAUSIBLE_SRC: "https://stats.foo.example/js/script.js",
    });
    expect(c.enabled).toBe(true);
    expect(c.domain).toBe("foo.example");
    expect(c.src).toBe("https://stats.foo.example/js/script.js");
  });

  it("trims surrounding whitespace from domain and src", () => {
    const c = resolvePlausibleConfig({
      PUBLIC_PLAUSIBLE_ENABLED: "true",
      PUBLIC_PLAUSIBLE_DOMAIN: "  bar.example  ",
      PUBLIC_PLAUSIBLE_SRC: "  https://plausible.io/js/script.js  ",
    });
    expect(c.domain).toBe("bar.example");
    expect(c.src).toBe("https://plausible.io/js/script.js");
  });

  it("is disabled when an explicitly blank domain is supplied", () => {
    const c = resolvePlausibleConfig({
      PUBLIC_PLAUSIBLE_ENABLED: "true",
      PUBLIC_PLAUSIBLE_DOMAIN: "   ",
    });
    expect(c.enabled).toBe(false);
    expect(c.domain).toBe("");
  });
});
