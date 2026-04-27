"use client";
import api from "@/shared/lib/axiosInstance";
import { useState, useEffect } from "react";

function useWebSocket({ projectId }: { projectId: string }) {
  const [messages, setMessages] = useState<any>([]);
  let ws: WebSocket;
  useEffect(() => {
    async function loader() {
      try {
        const response = await api.get(`projects/chat/${projectId}`);
        setMessages(response.data);
        ws = new WebSocket("");
      } catch (err) {
        console.log(err);
      }
    }
    loader();
    return () => ws.close();
  }, []);
  function sendMessage(message: string) {
    ws.send(message);
  }
  return { messages, sendMessage };
}

export default useWebSocket;
