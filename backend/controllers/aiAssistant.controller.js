import llm from "../helpers/llm/LLM.js";
export const askJimmy = async (req, res, next) => {
  const { history } = req.body;
  
  try {
    const response = llm.generateContent(history || []);

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    try {
      for await (const chunk of response) {
        if (!chunk?.content) continue;
        res.write(`data: ${JSON.stringify({ content: chunk.content })}\n\n`);
      }
      res.write("data: [DONE]\n\n");
    } catch (streamError) {
      console.error("LLM Stream error:", streamError);
      res.write(`data: ${JSON.stringify({ error: "Stream interrupted" })}\n\n`);
    } finally {
      res.end();
    }
  } catch (error) {
    if (res.headersSent) {
      res.end();
    } else {
      next(error);
    }
  }
};
