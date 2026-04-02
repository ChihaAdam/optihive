import api from "@/shared/lib/axiosInstance";
import { setToken } from "../token";
interface signupActionState {
  error: string | null;
}
export const signupAction = async (
  _prevState: signupActionState,
  formData: FormData,
) => {
  try {
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const response = await api.post("/users/register", {
      username,
      email,
      password,
    });
    await setToken(response.data.token);
    return { error: null } as signupActionState;
  } catch (error: any) {
    return {
      error: error.response.data.message || "Something went wrong",
    } as signupActionState;
  }
};
