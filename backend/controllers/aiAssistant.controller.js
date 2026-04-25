import TalkToOllama from "../helpers/ollama.js";

export const askJimmy = async (req, res, next) => {
  const { history } = req.body;
  try {
    const response = await TalkToOllama([...history]);

    res.setHeader("Content-Type", "text/event-stream");
    res.setHeader("Cache-Control", "no-cache");
    res.setHeader("Connection", "keep-alive");

    for await (const chunk of response) {
      res.write(
        `data: ${JSON.stringify({ content: chunk.message.content })}\n\n`,
      );
    }

    res.write("data: [DONE]\n\n");
    res.end();
  } catch (error) {
    next(error);
  }
};
