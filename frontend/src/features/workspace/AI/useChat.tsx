"use client";
import { useState } from "react";
import api from "@/shared/lib/axiosInstance";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function useChat() {
  const [chatHistory, setChatHistory] = useState<Array<Message>>([]);
  const [isTyping, setIsTyping] = useState(false);
  async function sendMessage(message: string) {
    setIsTyping(true);
    setChatHistory([...chatHistory, { role: "user", content: message }]);
    try {
      const response = await api.post("/ai", {
        prompt: message,
        history: chatHistory,
      });
      setIsTyping(true);
      setChatHistory([
        ...chatHistory,
        { role: "assistant", content: response.data.response },
      ]);
    } catch (error) {
      console.error(error);
    } finally {
      setIsTyping(false);
    }
  }
  return { chatHistory, isTyping, sendMessage };
}
export default useChat;
