import { useLayoutEffect, useState } from "react";
import { SCREEN_SIZE_CHANGING_TIMOUT } from "../constants/adaptive";

export const UseWindowSize = () => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const [timer, setTimer] = useState(null);

  const updateSize = () => {
    setScreenWidth(window.innerWidth);
  };

  const handleChange = () => {
    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(() => {
        updateSize();
      }, SCREEN_SIZE_CHANGING_TIMOUT),
    );
  };

  useLayoutEffect(() => {
    window.addEventListener("resize", handleChange);
    return () => window.removeEventListener("resize", handleChange);
  }, []);

  return screenWidth;
};
