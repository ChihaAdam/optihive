import ollama from "ollama";
import { LLM_MODEL } from "../config/env.js";

const roles = [
  {
    role: "system",
    content:
      "You are a helpful assistant named Jimmy. you always answer in a friendly tone. you are an assistant for project called OptiHive which is a project managing tool . you help the user to get started with it. user can ask you for an idea for a project . help him by suggesting project ideas and explaining them in details only if he asks .",
  },
];
const TalkToOllama = async (messages) => {
  const response = await ollama.chat({
    model: LLM_MODEL,
    messages: [...roles, ...messages],
    options: {
      temperature: 0.7,
    },
  });
  return response.message.content;
};
export default TalkToOllama;
