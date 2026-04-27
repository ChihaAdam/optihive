"use client";
import useChat from "./useChat";
import UserMessage from "./userMessage";
import AssistantMessage from "./assistantMessage";

import { ScrollArea } from "@radix-ui/themes";
import Form from "./form";
function AskJimmy() {
  const { chatHistory, isThinking, canWrite, sendMessage } = useChat();

  return (
    <div className="flex flex-col gap-2 h-full p-4">
      <ScrollArea>
        <div className="h-full mx-auto flex-1 flex flex-col gap-2 px-24">
          {chatHistory.map((message, index) =>
            message.role === "user" ? (
              <UserMessage key={index} message={message.content} />
            ) : (
              <AssistantMessage key={index} message={message.content} />
            ),
          )}
          {isThinking && <AssistantMessage message="Thinking..." />}
        </div>
      </ScrollArea>
      <Form sendMessage={sendMessage} disabled={!canWrite} />
    </div>
  );
}

export default AskJimmy;
