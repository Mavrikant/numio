import { describe, it, expect } from "vitest";
import { buildFaq } from "../logic";

describe("schema-json-ld-generator regressions", () => {
  it("escapes </script> in content so the snippet can't break the host page", () => {
    const out = buildFaq([{ question: "q", answer: "</script><script>alert(1)</script>" }]);
    // Only the wrapper's own tags may appear.
    expect(out.match(/<\/script>/g)).toHaveLength(1);
    expect(out).toContain("\\u003c");
  });
});
