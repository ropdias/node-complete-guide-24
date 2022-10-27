const text = "This is a test - and it should be stored in a file!";

const encoder = new TextEncoder();
const data = encoder.encode(text);

// To run with a flag you could use:
// deno run --allow-write app.ts
// or by setting permission to a specific file only:
// deno run --allow-write=message.txt app.ts
await Deno.writeFile("message.txt", data); // This returns a promise so we can use await

console.log("Wrote to file!");
