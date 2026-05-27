import { describe, it, expect } from "vitest";
import { decodeJwt } from "../logic";

const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";

describe("decodeJwt", () => {
  it("decodes header and payload", () => {
    const r = decodeJwt(TOKEN);
    expect(JSON.parse(r.header)).toEqual({ alg: "HS256", typ: "JWT" });
    expect(JSON.parse(r.payload)).toMatchObject({ sub: "1234567890", name: "John Doe", iat: 1516239022 });
    expect(r.signature).toBe("SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c");
  });
  it("throws on malformed tokens", () => {
    expect(() => decodeJwt("not-a-jwt")).toThrow();
    expect(() => decodeJwt("notbase64.notjson")).toThrow();
  });
});
