import OpenAI from "openai";

import { NVIDIA_API_KEY, NVIDIA_MODEL, NVIDIA_API } from "../../config/env.js";
class NvidiaLLM {
  constructor() {
    this.model = NVIDIA_MODEL;
    this.openAI = new OpenAI({
      apiKey: NVIDIA_API_KEY,
      baseURL: NVIDIA_API,
    });
  }
  async *generateContent(messages) {
    const response = await this.openAI.chat.completions.create({
      model: this.model,
      messages: messages,
      temperature: 0.7,
      stream: true,
    });
    for await (const chunk of response) {
      const content = chunk.choices[0]?.delta?.content;
      if (content) {
        yield { content };
      }
    }
  }
}
export default NvidiaLLM;
