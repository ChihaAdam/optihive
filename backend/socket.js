import Message from "./model/message.model.js";
import Membership from "./model/membership.model.js";
import { socketAuthMiddleware } from "./middleware/socket.auth.middleware.js";

export default function socketHandler(io) {
  io.use(socketAuthMiddleware);

  io.on("connection", (socket) => {
    console.log(`⚡ Socket connected: ${socket.user.name} (${socket.user.id})`);

    socket.on("joinRoom", (room) => {
      socket.join(room);
      console.log(`🔌 ${socket.user.name} joined room: ${room}`);
    });

    socket.on("leaveRoom", (room) => {
      socket.leave(room);
      console.log(`🚶 ${socket.user.name} left room: ${room}`);
    });

    socket.on("sendMessage", async ({ projectId, message }) => {
      if (!projectId || !message) {
        return socket.emit("error", {
          message: "projectId and message are required",
        });
      }
      const membership = await Membership.findOne({
        project: projectId,
        user: socket.user,
      });
      if (!membership) {
        return socket.emit("error", {
          message: "You are not a member of this project",
        });
      }
      const room = `project_${projectId}`;

      try {
        const savedMessage = await Message.create({
          project: projectId,
          sender: socket.user,
          content: message,
        });

        const populatedMsg = await savedMessage.populate(
          "sender",
          "name avatar",
        );

        io.to(room).emit("newMessage", populatedMsg);
      } catch (err) {
        console.error("Socket message error:", err);
      }
    });

    socket.on("typing", (projectId) => {
      const room = `project_${projectId}`;
      socket.to(room).emit("userTyping", {
        userId: socket.user._id,
        name: socket.user.name,
      });
    });

    socket.on("stopTyping", (projectId) => {
      const room = `project_${projectId}`;
      socket.to(room).emit("userStoppedTyping", {
        userId: socket.user._id,
        name: socket.user.name,
      });
    });

    socket.on("disconnect", () => {
      console.log(`❌ Socket disconnected: ${socket.user.name}`);
    });
  });
}
