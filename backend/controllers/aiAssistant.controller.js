import TalkToOllama from "../helpers/ollama.js";

export const askJimmy = async (req, res, next) => {
  const { history } = req.body;
  try {
    const response = await TalkToOllama([...history]);
    res.status(200).json({ response });
  } catch (error) {
    next(error);
  }
};
