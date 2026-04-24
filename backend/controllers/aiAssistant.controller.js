import TalkToOllama from "../helpers/ollama.js";

export const askJimmy = async (req, res, next) => {
  const { prompt, history } = req.body;
  try {
    const response = await TalkToOllama([
      ...history,
      { role: "user", content: prompt },
    ]);
    res.status(200).json({ response });
  } catch (error) {
    next(error);
  }
};
