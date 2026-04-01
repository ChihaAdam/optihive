"use server";
import api from "@/shared/lib/axiosInstance";
import { setToken } from "../token";

interface loginActionState {
  error: string | null;
}
export const loginAction = async (
  _prevState: loginActionState,
  formData: FormData,
) => {
  try {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const response = await api.post("/users/login", { email, password });
    await setToken(response.data.token);
    return { error: null } as loginActionState;
  } catch (error: any) {
    return {
      error: error.response.data.message || "Something went wrong",
    } as loginActionState;
  }
};
