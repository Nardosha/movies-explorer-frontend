import { AdaptiveBorders, CardConfig } from "./constants";

export const UseLoaderConfig = ({ screenWidth }) => {
  if (screenWidth >= AdaptiveBorders.TABLET) {
    return CardConfig[AdaptiveBorders.LAPTOP];
  }

  if (screenWidth <= AdaptiveBorders.MOBILE) {
    return CardConfig[AdaptiveBorders.MOBILE];
  }

  return CardConfig[AdaptiveBorders.TABLET];
};
