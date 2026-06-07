import { describe, it, expect } from "vitest";
import { assembleReport, answerData } from "../logic";

const byCheck = (rows: ReturnType<typeof assembleReport>, name: string) =>
  rows.find((r) => r.check === name)!;

describe("assembleReport", () => {
  it("marks a fully healthy domain ok across the board", () => {
    const rows = assembleReport({
      ns: ["a.iana-servers.net.", "b.iana-servers.net."],
      a: ["93.184.216.34"],
      aaaa: ["2606:2800:220:1:248:1893:25c8:1946"],
      mx: ["10 mail.example.com."],
      spfTxt: ["v=spf1 -all"],
      dmarcTxt: ["v=DMARC1; p=reject"],
    });
    expect(rows.map((r) => r.status)).toEqual(["ok", "ok", "ok", "ok", "ok", "ok"]);
  });

  it("warns on a single nameserver", () => {
    const rows = assembleReport({ ns: ["ns1.example.com."], a: ["1.2.3.4"], aaaa: [], mx: [], spfTxt: [], dmarcTxt: [] });
    expect(byCheck(rows, "NS").status).toBe("warn");
  });

  it("fails when there are no nameservers", () => {
    const rows = assembleReport({ ns: [], a: [], aaaa: [], mx: [], spfTxt: [], dmarcTxt: [] });
    expect(byCheck(rows, "NS").status).toBe("fail");
  });

  it("warns (not fails) when IPv6 is missing", () => {
    const rows = assembleReport({ ns: ["a", "b"], a: ["1.2.3.4"], aaaa: [], mx: ["10 mx"], spfTxt: ["v=spf1 -all"], dmarcTxt: ["v=DMARC1"] });
    const aaaa = byCheck(rows, "AAAA");
    expect(aaaa.status).toBe("warn");
    expect(aaaa.detail.toLowerCase()).toContain("ipv6");
  });

  it("fails the A check when no A record is present", () => {
    const rows = assembleReport({ ns: ["a", "b"], a: [], aaaa: [], mx: [], spfTxt: [], dmarcTxt: [] });
    expect(byCheck(rows, "A").status).toBe("fail");
  });

  it("detects SPF / DMARC only via the right version prefixes (case-insensitive)", () => {
    const rows = assembleReport({
      ns: ["a", "b"],
      a: ["1.2.3.4"],
      aaaa: [],
      mx: ["10 mx"],
      spfTxt: ["some unrelated txt", "V=SPF1 include:_spf.example.com -all"],
      dmarcTxt: ["v=DMARC1; p=none"],
    });
    expect(byCheck(rows, "SPF").status).toBe("ok");
    expect(byCheck(rows, "DMARC").status).toBe("ok");
  });

  it("fails SPF and DMARC when no matching record exists", () => {
    const rows = assembleReport({ ns: ["a", "b"], a: ["1.2.3.4"], aaaa: [], mx: ["10 mx"], spfTxt: ["v=spf2 nonsense"], dmarcTxt: [] });
    expect(byCheck(rows, "SPF").status).toBe("fail");
    expect(byCheck(rows, "DMARC").status).toBe("fail");
  });
});

describe("answerData", () => {
  it("pulls just the data strings out of DoH answers", () => {
    expect(answerData([{ data: "1.2.3.4" }, { data: "5.6.7.8" }])).toEqual(["1.2.3.4", "5.6.7.8"]);
  });
});
