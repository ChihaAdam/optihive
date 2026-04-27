import { Router } from "express";
import {
  createProject,
  getProjects,
  joinProject,
  getProjectById,
} from "../../controllers/project.controller.js";
import {
  authMiddleware,
  isProjectMember,
} from "../../middleware/auth.middleware.js";
import { validateProjectMiddleware } from "../../middleware/validate-project.middleware.js";
import featureRoutes from "./feature.route.js";
import chatRoutes from "../chat/chat.route.js";
const router = Router();

router.use(authMiddleware);
router.get("/", getProjects);
router.get("/:projectId", isProjectMember, getProjectById);
router.post("/create", validateProjectMiddleware, createProject);
router.post("/join", joinProject);
router.use("/features", featureRoutes);
router.use("/chat", chatRoutes);
export default router;
