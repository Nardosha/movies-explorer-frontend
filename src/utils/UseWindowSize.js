import {useEffect, useLayoutEffect, useState} from "react";

export const UseWindowSize = () => {
  const [screenWidth, setScreenWidth] = useState(0);

  const updateSize = () => {
    setScreenWidth(window.innerWidth);
  };

  useLayoutEffect(() => {
    updateSize();
  });

  useLayoutEffect(() => {
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  return { screenWidth };
};
