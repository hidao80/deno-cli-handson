import { assertEquals } from "@std/assert";
import { hello } from "./main.ts";

Deno.test("returns Hello, world!", () => {
  assertEquals(hello(), "Hello, world!");
});
