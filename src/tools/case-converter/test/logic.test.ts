import { describe, it, expect } from "vitest";
import { convertCase } from "../logic";

describe("convertCase", () => {
  const s = "hello world example";
  it("upper/lower", () => {
    expect(convertCase(s, "upper")).toBe("HELLO WORLD EXAMPLE");
    expect(convertCase("HELLO", "lower")).toBe("hello");
  });
  it("title and sentence", () => {
    expect(convertCase(s, "title")).toBe("Hello World Example");
    expect(convertCase("hello world. bye now", "sentence")).toBe("Hello world. Bye now");
  });
  it("programmer cases", () => {
    expect(convertCase(s, "camel")).toBe("helloWorldExample");
    expect(convertCase(s, "pascal")).toBe("HelloWorldExample");
    expect(convertCase(s, "snake")).toBe("hello_world_example");
    expect(convertCase(s, "kebab")).toBe("hello-world-example");
  });
  it("re-splits existing camelCase", () => {
    expect(convertCase("helloWorld", "snake")).toBe("hello_world");
  });
});
