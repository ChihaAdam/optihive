"use server";
import api from "@/shared/lib/axiosInstance";
import { useFormState } from "@/shared/hooks/useForm";
async function sendMessageAction(
  _state: useFormState,
  formData: FormData,
): Promise<useFormState> {
  try {
    const message = formData.get("message") as string;
    const projectId = formData.get("projectId") as string;
    await api.post(`/projects/chat/${projectId}`, { message });
    return { success: true, timespan: Date.now() };
  } catch (err) {
    return { success: false, timespan: Date.now() };
  }
}

export default sendMessageAction;
