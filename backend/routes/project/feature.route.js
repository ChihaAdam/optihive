import express from "express";
import {
  createFeature,
  getFeatures,
} from "../../controllers/feature.controller.js";
import { validateInput } from "../../middleware/validate-feature.middleware.js";
import {
  isProjectMember,
  isProjectManager,
} from "../../middleware/auth.middleware.js";
const router = express.Router();

/*
    because feature is a nested route of project so there is no need to call the authMiddleware
    because it is already called in the project route
    and we only need to check if the user is a member of the project
    and if the user is a manager of the project
*/
router.post("/:projectId", isProjectManager, validateInput, createFeature);
router.get("/:projectId", isProjectMember, getFeatures);

export default router;
