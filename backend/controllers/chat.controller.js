import Message from "../model/message.model.js";
export const getMessages = async (req, res, next) => {
  const { projectId } = req.params;

  try {
    const messages = await Message.find({ project: projectId })
      .populate("sender", "name email role")
      .sort({ createdAt: 1 });
    res.json(messages);
  } catch (error) {
    next(error);
  }
};
