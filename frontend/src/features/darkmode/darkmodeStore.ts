import { create } from "zustand";
import { getItem, setItem } from "./localstorage";
type DarkmodeStoreType = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};
const useDarkmodeStore = create<DarkmodeStoreType>((set) => ({
  darkMode: getItem<boolean>("darkMode") || false,
  toggleDarkMode: () =>
    set((state) => {
      const newDarkMode = !state.darkMode;
      setItem<boolean>("darkMode", newDarkMode);
      return { darkMode: newDarkMode };
    }),
}));
export default useDarkmodeStore;
