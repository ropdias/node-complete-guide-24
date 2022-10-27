const text = "This is a test - and it should be stored in a file!";

const encoder = new TextEncoder();
const data = encoder.encode(text);

await Deno.writeFile("message.txt", data); // This returns a promise so we can use await

console.log("Wrote to file!");
