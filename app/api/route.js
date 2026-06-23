export function GET(request) {
  console.log("GET request received:", request);
  // return Response.json({ message: "Hello, Next.js!" });
  return new Response("Hello, Next.js!");
}

// export function POST(request) {
//   return new Response("Hello, Next.js!");
// }
