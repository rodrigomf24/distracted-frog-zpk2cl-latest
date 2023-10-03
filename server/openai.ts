import { OpenAI } from "langchain/llms/openai";
import { PromptTemplate } from "langchain/prompts";
import { LLMChain } from "langchain/chains";

export const generateStory = async (text: string) => {
  const llm = new OpenAI({
    openAIApiKey: "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",
  });

  const prompt = new PromptTemplate({
    inputVariables: ["text"],
    template: "As a seasoned storyteller generate a story for me about {text}",
  });

  const llmChain = new LLMChain({ llm, prompt });

  const result = await llmChain.run({ text });

  console.log("RESULT", typeof result);

  return result;
};
