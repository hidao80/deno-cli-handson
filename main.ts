export function hello(): string {
  return "Hello, world!";
}

if (import.meta.main) {
  console.log(hello());
}
