import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();

  const messages = [
    { role: "system", content: body.system },
    ...body.messages.map((m: { role: string; content: string }) => ({
      role: m.role === "assistant" ? "assistant" : "user",
      content: m.content,
    })),
  ];

  const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
    },
    body: JSON.stringify({
      model: "llama-3.3-70b-versatile",
      messages,
      max_tokens: 1000,
    }),
  });

  if (res.status === 429) {
    return Response.json({ exhausted: true }, { status: 429 });
  }

  const data = await res.json();
  return Response.json(data);
}