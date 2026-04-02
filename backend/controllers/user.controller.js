import User from "../model/user.model.js";
import { generateToken } from "../helpers/token.helpers.js";
import { hashPassword } from "../helpers/bcrypt.js";
import { checkUserCredentials } from "../helpers/user.helpers.js";
// US1 - Register
export const register = async (req, res, next) => {
  try {
    const username = req.username;
    const email = req.email;
    const password = req.password;
    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
    });
    const token = generateToken({ id: user._id });

    res.status(201).json({
      message: "User registered successfully",
      token,
    });
  } catch (err) {
    next(err);
  }
};

// US2 - Login
export const login = async (req, res, next) => {
  const email = req.email;
  const password = req.password;
  try {
    const user = await checkUserCredentials(email, password);
    const token = generateToken({ id: user._id });
    res.status(200).json({
      message: "Login successful",
      token,
    });
  } catch (err) {
    next(err);
  }
};

export const getMe = async (req, res, next) => {
  try {
    const user = await User.findById(req.userId);
    const { password, ...userWithoutPassword } = user.toObject();
    res.status(200).json(userWithoutPassword);
  } catch (error) {
    next(error);
  }
};

export const updateProfile = async (req, res, next) => {
  try {
    const info = { ...req.body };
    if (info.password) {
      info.password = await hashPassword(info.password);
    }
    const userId = req.userId;
    await User.findByIdAndUpdate(userId, info);
    res.status(200).json({ message: "Profile updated successfully" });
  } catch (error) {
    next(error);
  }
};
