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

router.use(authMiddleware);
router.get("/", getProjects);
router.post("/create", validateProjectMiddleware, createProject);
router.post("/join", joinProject);
router.use("/features", featureRoutes);
export default router;
