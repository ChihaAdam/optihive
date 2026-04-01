"use client";
import { Switch, SwitchProps } from "@radix-ui/themes";
import useDarkMode from "@/features/darkmode/darkmodeStore";
import { useState, useEffect } from "react";
type ToggleDarkmodeSwitchProps = SwitchProps;

function ToggleDarkmodeSwitch({
  ...props
}: Readonly<ToggleDarkmodeSwitchProps>) {
  const { darkMode, toggleDarkMode } = useDarkMode();
  //to prevent hydration error
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return <Switch {...props} disabled />; //to prevent layout shift
  return (
    <Switch
      {...props}
      onClick={toggleDarkMode}
      checked={darkMode}
      style={{ cursor: "pointer" }}
    />
  );
}

export default ToggleDarkmodeSwitch;
