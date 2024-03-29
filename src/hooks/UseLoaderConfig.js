import { useEffect, useState } from "react";
import { AdaptiveBorders, DeviceTypes } from "../constants/adaptive";
import { CardConfig } from "../constants/movies";

export const UseLoaderConfig = (screenWidth) => {
  const [deviceType, setDeviceType] = useState(null);

  const [loaderConfig, setLoaderConfig] = useState(null);

  const onScreenWidthChange = () => {
    if (screenWidth > AdaptiveBorders.TABLET) {
      setDeviceType(DeviceTypes.LAPTOP);
      return CardConfig[AdaptiveBorders.LAPTOP];
    }

    if (screenWidth <= AdaptiveBorders.MOBILE) {
      setDeviceType(DeviceTypes.MOBILE);

      return CardConfig[AdaptiveBorders.MOBILE];
    }

    setDeviceType(DeviceTypes.TABLET);
    return CardConfig[AdaptiveBorders.TABLET];
  };

  useEffect(() => {
    setLoaderConfig(onScreenWidthChange);
  }, [screenWidth]);

  return {
    deviceType,
    loaderConfig,
  };
};
