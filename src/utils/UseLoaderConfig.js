import { AdaptiveBorders, CardConfig } from "./constants";

export const UseLoaderConfig = ({ screenWidth }) => {
  if (screenWidth >= AdaptiveBorders.TABLET) {
    console.log(
      1,
      "UseLoaderConfig",
      screenWidth,
      AdaptiveBorders.LAPTOP,
      CardConfig[AdaptiveBorders.LAPTOP],
    );

    return CardConfig[AdaptiveBorders.LAPTOP];
  }

  if (screenWidth <= AdaptiveBorders.MOBILE) {
    console.log(
      2,
      "UseLoaderConfig",
      screenWidth,
      AdaptiveBorders.MOBILE,
      CardConfig[AdaptiveBorders.MOBILE],
    );

    return CardConfig[AdaptiveBorders.MOBILE];
  }

  console.log(
    3,
    "UseLoaderConfig",
    screenWidth,
    AdaptiveBorders.TABLET,
    CardConfig[AdaptiveBorders.TABLET],
  );

  return CardConfig[AdaptiveBorders.TABLET];
};
