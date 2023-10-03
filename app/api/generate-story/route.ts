import { generateStory } from "@/server/openai";

export async function POST(req: Request) {
  const { text } = await req.json();
  const story = await generateStory(text);

  console.log("STORY", story);

  // URL to redirect to after sign in process completes
  return Response.json({
    story,
  });
}
