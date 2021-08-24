import React, { useEffect, useState } from "react";

const WindowResizeContext = React.createContext({ width: 0, height: 0 });

const WindowResizeProvider = ({ children }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  function handleResize() {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <WindowResizeContext.Provider value={dimensions}>
      {children}
    </WindowResizeContext.Provider>
  );
};

export { WindowResizeContext, WindowResizeProvider };
