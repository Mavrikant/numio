import { describe, it, expect } from "vitest";
import { PORTS, searchPorts } from "../logic";

describe("port-lookup", () => {
  it("includes the most common ports", () => {
    expect(PORTS.find((p) => p.port === 22)?.name).toBe("ssh");
    expect(PORTS.find((p) => p.port === 80)?.name).toBe("http");
    expect(PORTS.find((p) => p.port === 443)?.name).toBe("https");
    expect(PORTS.find((p) => p.port === 5432)?.name).toBe("postgresql");
  });
  it("returns all rows for an empty query", () => {
    expect(searchPorts("").length).toBe(PORTS.length);
  });
  it("searches by exact port number", () => {
    expect(searchPorts("443")).toEqual([PORTS.find((p) => p.port === 443)]);
  });
  it("searches by service name", () => {
    expect(searchPorts("ssh")[0]!.port).toBe(22);
  });
  it("searches by description text", () => {
    expect(searchPorts("postgres").length).toBeGreaterThan(0);
  });
});
