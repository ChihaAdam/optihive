"use client";
import { useEffect } from "react";
import useDarkmodeStore from "./darkmodeStore";
/* this hook is used to apply darkmode to the application . 
no need to use it in every component and no need to check 
mounted state because it won't add anything to the DOM */
export default function useApplyDarkmode() {
  const darkMode = useDarkmodeStore((state) => state.darkMode);
  useEffect(() => {
    if (darkMode) {
      globalThis.document?.documentElement?.classList?.add("dark");
    } else {
      globalThis.document?.documentElement?.classList?.remove("dark");
    }
  }, [darkMode]);
}
