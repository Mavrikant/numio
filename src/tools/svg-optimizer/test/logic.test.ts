import { describe, it, expect } from "vitest";
import { optimizeSvg } from "../logic";

describe("svg-optimizer", () => {
  it("strips XML declaration and comments", () => {
    const r = optimizeSvg('<?xml version="1.0"?><!-- hi --><svg><circle/></svg>');
    expect(r.output).toBe("<svg><circle/></svg>");
  });
  it("removes editor-specific namespaces and metadata", () => {
    const r = optimizeSvg('<svg xmlns:inkscape="http://example" inkscape:foo="x"><metadata>x</metadata><circle/></svg>');
    expect(r.output).not.toContain("inkscape");
    expect(r.output).not.toContain("metadata");
  });
  it("drops default-value attributes", () => {
    const r = optimizeSvg('<svg><circle fill-opacity="1" stroke-width="1"/></svg>');
    expect(r.output).toBe("<svg><circle/></svg>");
  });
  it("collapses whitespace", () => {
    const r = optimizeSvg("<svg>\n   <g>\n     <circle/>\n   </g>\n</svg>");
    expect(r.output).toBe("<svg><g><circle/></g></svg>");
  });
  it("reports size before and after", () => {
    const r = optimizeSvg('<?xml version="1.0"?><svg></svg>');
    expect(r.optimizedSize).toBeLessThan(r.originalSize);
  });
});
