import express from "express";
import cors from "cors";
import morgan from "morgan";
import chalk from "chalk";
import cookieParser from "cookie-parser";
import { errorHandler } from "./middleware/errorHandling.middleware.js";
import userRoutes from "./routes/user/user.route.js";
import projectRoutes from "./routes/project/project.route.js";
import aiRoutes from "./routes/ai/ai.route.js";
import { PORT } from "./config/env.js";
import connectDB from "./config/databaseConnection.js";
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/v1/users", userRoutes);
app.use("/api/v1/projects", projectRoutes);
app.use("/api/v1/ai", aiRoutes);
app.use(errorHandler);

app.listen(PORT, async () => {
  await connectDB();
  console.log(chalk.green.bold(`Server running on port ${PORT}`));
});
export default app;
