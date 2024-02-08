import { useLocation } from "react-router-dom";

export const useLocationHook = () => {
  const location = useLocation();
  const validRoutesForHeader = ["/movies", "/saved-movies", "/profile", "/"];
  const validRoutesForFooter = ["/movies", "/saved-movies", "/"];
  const isShowHeader = validRoutesForHeader.includes(location.pathname);
  const isShowFooter = validRoutesForFooter.includes(location.pathname);

  return {
    isShowHeader,
    isShowFooter,
  };
};
