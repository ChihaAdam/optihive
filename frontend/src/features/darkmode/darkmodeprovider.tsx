"use client";

import { useEffect } from "react";
import useDarkmode from "./darkmodeStore";
function DarkmodeProvider() {
  const { darkMode } = useDarkmode();
  useEffect(() => {
    if (!globalThis.document) return;
    if (darkMode) {
      globalThis.document?.documentElement?.classList?.add("dark");
    } else {
      globalThis.document?.documentElement?.classList?.remove("dark");
    }
  }, [darkMode]);
  return null;
}

export default DarkmodeProvider;
