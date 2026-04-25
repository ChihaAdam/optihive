import ollama from "ollama";
import { LLM_MODEL } from "../../config/env.js";

class OllamaLLM {
  constructor() {
    this.model = LLM_MODEL;
  }
  async *generateContent(messages) {
    const response = await ollama.chat({
      model: this.model,
      messages: messages,
      options: {
        temperature: 0.7,
      },
      stream: true,
    });
    for await (const chunk of response) {
      if (chunk.message?.content) {
        yield { content: chunk.message.content };
      }
    }
  }
}
export default OllamaLLM;
