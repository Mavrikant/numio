import { describe, it, expect } from "vitest";
import { parseHeaders } from "../logic";

const SAMPLE = `Received: from c.example.net (c.example.net [198.51.100.9])
	by mail.dest.com with ESMTPS id abc; Tue, 03 Jun 2026 10:00:10 +0000
Received: from b.example.net (b.example.net [198.51.100.8])
	by c.example.net with ESMTP id def; Tue, 03 Jun 2026 10:00:05 +0000
Received: from a.example.net (a.example.net [198.51.100.7])
	by b.example.net with SMTP id ghi; Tue, 03 Jun 2026 10:00:00 +0000
Authentication-Results: mail.dest.com; spf=pass dkim=pass dmarc=pass
Message-ID: <abc123@example.net>
Subject: Hello world
From: Alice <alice@example.net>
To: Bob <bob@dest.com>

Body text here.`;

describe("parseHeaders", () => {
  it("parses a 3-hop sample with auth results", () => {
    const r = parseHeaders(SAMPLE);
    expect(r.hops.length).toBe(3);
    expect(r.auth.spf).toBe("pass");
    expect(r.auth.dkim).toBe("pass");
    expect(r.auth.dmarc).toBe("pass");
  });

  it("extracts from/by/protocol from received hops", () => {
    const r = parseHeaders(SAMPLE);
    expect(r.hops[0].from).toBe("c.example.net");
    expect(r.hops[0].by).toBe("mail.dest.com");
    expect(r.hops[0].protocol).toBe("ESMTPS");
  });

  it("computes delaySec between consecutive hops; oldest has none", () => {
    const r = parseHeaders(SAMPLE);
    // oldest hop is the last one in the array
    expect(r.hops[2].delaySec).toBeUndefined();
    // newer hops carry a non-negative delay
    expect(r.hops[1].delaySec).toBe(5);
    expect(r.hops[0].delaySec).toBe(5);
  });

  it("unfolds continuation lines and reads common fields", () => {
    const r = parseHeaders(SAMPLE);
    expect(r.messageId).toBe("<abc123@example.net>");
    expect(r.subject).toBe("Hello world");
    expect(r.from).toContain("alice@example.net");
    expect(r.to).toContain("bob@dest.com");
  });

  it("throws on empty input", () => {
    expect(() => parseHeaders("")).toThrow();
    expect(() => parseHeaders("   ")).toThrow();
  });
});
