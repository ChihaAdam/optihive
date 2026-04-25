import { LLM_MODE } from "../../config/env.js";
import OllamaLLM from "./ollama.js";
import NvidiaLLM from "./nvidia.js";
const roles = [
  {
    role: "system",
    content:
      "You are a helpful assistant named Jimmy. you always answer in a friendly tone. you are an assistant for project called OptiHive which is a project managing tool . you help the user to get started with it. user can ask you for an idea for a project . help him by suggesting project ideas and explaining them in details only if he asks .",
  },
];
class LLM {
  constructor() {
    this.mode = LLM_MODE;
    this.roles = roles;
    this.ollama = new OllamaLLM();
    this.nvidia = new NvidiaLLM();
  }
  generateContent(messages) {
    const fullMessages = [...this.roles, ...messages];
    
    if (this.mode === "ollama") {
      return this.ollama.generateContent(fullMessages);
    }
    
    if (this.mode === "nvidia") {
      return this.nvidia.generateContent(fullMessages);
    }
    
    throw new Error("Invalid LLM_MODE");
  }
}
const llm = new LLM();
export default llm;
