"use server";
import { deleteToken } from "@/features/auth/token";
import { redirect } from "next/navigation";
async function logoutAction() {
  await deleteToken();
  redirect("/login");
}

export default logoutAction;
