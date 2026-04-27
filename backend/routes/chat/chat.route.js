import { Router } from "express";
const router = Router();

import { getMessages } from "../../controllers/chat.controller.js";
import {
  authMiddleware,
  isProjectMember,
} from "../../middleware/auth.middleware.js";

router.get("/:projectId", authMiddleware, isProjectMember, getMessages);

export default router;
