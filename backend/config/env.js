import dotenv from "dotenv";
dotenv.config();

const { PORT, JWT_SECRET, JWT_EXPIRES_IN, MONGO_URI, LLM_MODEL } = process.env;

if (!PORT || !JWT_SECRET || !JWT_EXPIRES_IN || !MONGO_URI || !LLM_MODEL) {
  throw new Error("Missing required environment variables");
}

export { PORT, JWT_SECRET, JWT_EXPIRES_IN, MONGO_URI, LLM_MODEL };
