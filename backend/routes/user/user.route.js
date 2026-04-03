import { Router } from "express";
import {
  register,
  login,
  getMe,
  updateProfile,
} from "../../controllers/user.controller.js";
import { authMiddleware } from "../../middleware/auth.middleware.js";
import {
  validateUsername,
  validateEmail,
  validatePassword,
} from "../../middleware/validate-user-input.middleware.js";
const router = Router();

router.post(
  "/register",
  validateUsername,
  validateEmail,
  validatePassword,
  register,
);
router.post("/login", validateEmail, validatePassword, login);
router.get("/me", authMiddleware, getMe);
router.patch("/me", authMiddleware, updateProfile);
export default router;
