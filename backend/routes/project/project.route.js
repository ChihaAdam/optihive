import { Router } from "express";
import {
  createProject,
  getProjects,
  joinProject,
} from "../../controllers/project.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import { validateProjectMiddleware } from "../../middleware/validate-project.middleware.js";
import featureRoutes from "./feature.route.js";
const router = Router();

router.get("/", authMiddleware, getProjects);
router.post(
  "/create",
  authMiddleware,
  validateProjectMiddleware,
  createProject,
);
router.post("/join", authMiddleware, joinProject);
router.use("/:projectId/features", featureRoutes);
export default router;
