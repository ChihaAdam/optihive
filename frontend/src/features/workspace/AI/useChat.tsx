"use client";
import { useState } from "react";
import { getToken } from "@/features/auth/token";

interface Message {
  role: "user" | "assistant";
  content: string;
}

function useChat() {
  const [chatHistory, setChatHistory] = useState<Array<Message>>([]);
  const [isTyping, setIsTyping] = useState(false);

  async function sendMessage(message: string) {
    const newHistory: Message[] = [
      ...chatHistory,
      { role: "user", content: message },
    ];
    setChatHistory(newHistory);
    setIsTyping(true);

    try {
      const token = await getToken();
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/ai`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: `Bearer ${token}` } : {}),
        },
        body: JSON.stringify({
          history: newHistory,
        }),
      });

      setIsTyping(false);

      if (!response.body) throw new Error("No response body");
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      setChatHistory([...newHistory, { role: "assistant", content: "" }]);

      let assistantMessage = "";
      let buffer = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() || "";

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6).trim();
            if (data === "[DONE]") continue;
            try {
              const parsed = JSON.parse(data);
              assistantMessage += parsed.content;
              setChatHistory((prev) => {
                const updated = [...prev];
                updated[updated.length - 1].content = assistantMessage;
                return updated;
              });
            } catch (e) {
              console.error("Error parsing stream chunk", e, data);
            }
          }
        }
      }
    } catch (error) {
      console.error(error);
      setIsTyping(false);
    }
  }
  return { chatHistory, isTyping, sendMessage };
}
export default useChat;
