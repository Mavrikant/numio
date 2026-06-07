import { describe, it, expect } from "vitest";
import { formatLocation, osmLink } from "../logic";

describe("formatLocation", () => {
  it("joins city, region and country", () => {
    expect(formatLocation({ ip: "1.2.3.4", city: "Berlin", region: "Berlin", country: "Germany" })).toBe("Berlin, Berlin, Germany");
  });
  it("skips missing parts", () => {
    expect(formatLocation({ ip: "1.2.3.4", country: "Germany" })).toBe("Germany");
    expect(formatLocation({ ip: "1.2.3.4", city: "Paris", country: "France" })).toBe("Paris, France");
  });
  it("returns an empty string when nothing is known", () => {
    expect(formatLocation({ ip: "1.2.3.4" })).toBe("");
  });
  it("ignores blank/whitespace parts", () => {
    expect(formatLocation({ ip: "1.2.3.4", city: "  ", region: "Lazio", country: "Italy" })).toBe("Lazio, Italy");
  });
});

describe("osmLink", () => {
  it("builds an OpenStreetMap URL from coordinates", () => {
    expect(osmLink(52.52, 13.405)).toBe("https://www.openstreetmap.org/?mlat=52.52&mlon=13.405#map=12/52.52/13.405");
  });
  it("handles negative coordinates", () => {
    expect(osmLink(-33.87, 151.21)).toContain("mlat=-33.87&mlon=151.21");
  });
});
