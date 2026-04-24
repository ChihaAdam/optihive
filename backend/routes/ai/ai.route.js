import { Router } from "express";
import { askJimmy } from "../../controllers/aiAssistant.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
const router = Router();

router.post("/", authMiddleware, askJimmy);

export default router;
