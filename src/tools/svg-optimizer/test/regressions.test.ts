import { describe, it, expect } from "vitest";
import { optimizeSvg } from "../logic";

describe("svg-optimizer regressions", () => {
  it("removes metadata/title/desc elements together with their content", () => {
    const input =
      '<svg xmlns="http://www.w3.org/2000/svg"><title>Logo</title><metadata><rdf:RDF xmlns:rdf="x"><cc:Work/></rdf:RDF></metadata><rect/></svg>';
    const out = optimizeSvg(input).output;
    expect(out).not.toContain("Logo");
    expect(out).not.toContain("rdf:RDF");
    expect(out).toContain("<rect/>");
  });
});
