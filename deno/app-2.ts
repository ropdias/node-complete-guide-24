// Observation: Deno have included http as part of their core API now.
// So we could use Deno.serveHttp instead of the code below:
import { serve } from "https://deno.land/std@0.161.0/http/server.ts";

function handler(_req: Request): Response {
  return new Response("Hello, World!");
}

const server = serve(handler, { port: 3000 });
