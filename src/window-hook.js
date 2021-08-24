import { useContext } from "react";
import { WindowResizeContext } from "./window-hook-context";

const useWindowResize = () => {
  const context = useContext(WindowResizeContext);

  if (context === undefined)
    throw new Error("useWindowResize must be within WindowResizeProvider");

  return context;
};
export { useWindowResize };
