import { useLocation } from "react-router-dom";

export const useLocationHook = () => {
  const location = useLocation();
  const validRoutesForHeader = ["/movies", "/saved-movies", "/profile", "/"];
  const isShowHeader = validRoutesForHeader.includes(location.pathname);
  const isShowFooter = location.pathname !== '/profile'

  const isSavedMoviesOpened = location.pathname === "/saved-movies";

  return {
    isShowHeader,
    isShowFooter,
    isSavedMoviesOpened
  };
};
