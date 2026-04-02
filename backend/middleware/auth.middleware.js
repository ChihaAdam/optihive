import { verifyToken } from "../helpers/token.helpers.js";
export const authMiddleware = (req, _res, next) => {
  try {
    const token = req.headers?.authorization?.split(" ")?.[1];
    if (!token) {
      const err = new Error("Unauthorized");
      err.statusCode = 401;
      throw err;
    }
    const decodedToken = verifyToken(token);
    req.userId = decodedToken.id?.toString();
    next();
  } catch (err) {
    next(err);
  }
};
