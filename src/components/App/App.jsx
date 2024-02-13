import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { NotFoundPage } from "../NotFoundPage/NotFoundPage";
import { useCallback, useEffect, useState } from "react";
import { Movies } from "../Movies/Movies";
import { SavedMovies } from "../SavedMovies/SavedMovies";
import { Profile } from "../Profile/Profile";
import { SignIn } from "../SignIn/SignIn";
import { SignUp } from "../SignUp/SignUp";
import { ProtectedRoute } from "../ProtectedRoute/ProtectedRoute";
import { UserContext } from "../../contexts/UserContext";
import { UseWindowSize } from "../../hooks/UseWindowSize";
import { UseLoaderConfig } from "../../hooks/UseLoaderConfig";
import {
  clearLocalStorage,
  getFromLocalStorage,
  setToLocalStorage,
} from "../../helpers/localStorage.helper";
import { LocalStorageKeys } from "../../constants/movies";
import { useLocationHook } from "../../hooks/useLocationHook";
import { filterMovies } from "../../helpers/movie.helper";
import {
  loadSavedMovies,
  getUserInfo,
  saveMovie,
  signIn,
  signOut,
  signup,
  deleteMovie,
  updateUserInfo,
} from "../../utils/MainApi";
import {
  MOVIES_REQUEST_ERROR_TEXT,
  SUCCESS_NOTIFICATION_DURATION,
  UPDATE_USER_INFO_SUCCESS_TEXT,
} from "../../constants/validation";
import { loadMovies } from "../../utils/MoviesApi";
import { Home } from "../Home/Home";
import { Layout } from "../Layout/Layout";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";

function App() {
  const navigate = useNavigate();

  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [savedMovies, setSavedMovies] = useState([]);
  const [filteredSavedMovies, setFilteredSavedMovies] = useState([]);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [loadMovesErrorText, setLoadMovesErrorText] = useState("");
  const [authError, setAuthError] = useState(null);
  const [successText, setSuccessText] = useState(null);
  const [notificationTimer, setNotificationTimer] = useState(null);

  const [moviesFiltersIsDirty, setMoviesFiltersIsDirty] = useState(false);
  const [savedMoviesFiltersIsDirty, setSavedMoviesFiltersIsDirty] =
    useState(false);

  const [search, setSearch] = useState("");
  const [savedMoviesSearch, setSavedMoviesSearch] = useState("");
  const [isToggled, setIsToggled] = useState(false);
  const [isSavedMoviesToggled, setIsSavedMoviesToggled] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const screenWidth = UseWindowSize();
  const { deviceType, loaderConfig } = UseLoaderConfig(screenWidth);
  const { isShowFooter, isSavedMoviesOpened } = useLocationHook();

  const handleOpenMenu = (value) => {
    if (deviceType === "LAPTOP") return;

    setIsMenuOpen(value);
  };

  const resetSavedMoviesFilter = useCallback(() => {
    setIsSavedMoviesToggled(false);
    setSavedMoviesSearch("");
  }, []);

  const filterResetStates = () => {
    setSearch("");
    setSavedMoviesSearch("");
    setIsToggled(false);
    setMoviesFiltersIsDirty(false);
    setSavedMoviesFiltersIsDirty(false);
  };

  const onSearch = (newSearch, key) => {
    setIsLoading(true);

    if (key === LocalStorageKeys.SEARCH.MOVIES) {
      setSearch(newSearch);
      setMoviesFiltersIsDirty(true);

      const filteredMovies = filterMovies(initialMovies, {
        search: newSearch,
        isToggled,
      });

      setToLocalStorage(key, newSearch);
      setToLocalStorage(LocalStorageKeys.LOADED_MOVIES, filteredMovies);
      setFilteredMovies([...filteredMovies]);
    }

    if (key === LocalStorageKeys.SEARCH.SAVED_MOVIES) {
      setSavedMoviesSearch(newSearch);
      setSavedMoviesFiltersIsDirty(true);
      const filteredSavedMovies = filterMovies(savedMovies, {
        search: newSearch,
        isToggled: isSavedMoviesToggled,
      });
      setFilteredSavedMovies([...filteredSavedMovies]);
    }

    setIsLoading(false);
  };

  const onSwitcherToggle = (newValue, key) => {
    setIsLoading(true);

    if (key === LocalStorageKeys.TOGGLE.IS_SHOW_SHORT_MOVIES) {
      setIsToggled(newValue);
      setMoviesFiltersIsDirty(true);
      setToLocalStorage(key, newValue);

      if (search.length) {
        setFilteredMovies([
          ...filterMovies(initialMovies, { search, isToggled: newValue }),
        ]);
      }
    }

    if (key === LocalStorageKeys.TOGGLE.IS_SHOW_SHORT_SAVED_MOVIES) {
      setIsSavedMoviesToggled(newValue);
      setSavedMoviesFiltersIsDirty(true);

      setFilteredSavedMovies([
        ...filterMovies(savedMovies, {
          search: savedMoviesSearch,
          isToggled: newValue,
        }),
      ]);
    }

    setIsLoading(false);
  };

  const handleLoadMovies = useCallback(async () => {
    setIsLoading(true);
    setLoadMovesErrorText("");

    try {
      const movies = await loadMovies();

      setInitialMovies([...movies]);
      const filteredMovies = filterMovies(movies, { search, isToggled });

      if (!search.length) return;

      setFilteredMovies([...filteredMovies]);
    } catch (err) {
      console.log(err);
      setLoadMovesErrorText(MOVIES_REQUEST_ERROR_TEXT);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const restoreDataFromLocalStorage = () => {
    const prevMoviesSearch = getFromLocalStorage(
      LocalStorageKeys.SEARCH.MOVIES,
    );

    const prevMoviesSwitcherState = !!getFromLocalStorage(
      LocalStorageKeys.TOGGLE.IS_SHOW_SHORT_MOVIES,
    );

    const prevLoadedMovies = getFromLocalStorage(
      LocalStorageKeys.LOADED_MOVIES,
    );

    prevMoviesSearch?.length && setSearch(prevMoviesSearch);

    setIsToggled(prevMoviesSwitcherState);

    if (prevMoviesSearch?.length && prevLoadedMovies?.length) {
      setFilteredMovies([
        ...filterMovies(prevLoadedMovies, {
          prevMoviesSearch,
          prevMoviesSwitcherState,
        }),
      ]);
    }

    if (prevMoviesSwitcherState || prevMoviesSearch?.length) {
      setMoviesFiltersIsDirty(true);
    }
  };

  const resetAuthError = () => {
    setAuthError(null);
  };

  const handleSignUp = async ({ name, email, password }) => {
    setIsLoading(true);
    resetAuthError();

    try {
      const newUser = await signup({ name, email, password });

      if (!newUser) return;

      await handleSignIn({ email, password });
      navigate("/movies", { replace: true });
    } catch (err) {
      console.log(err);
      setAuthError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    setIsLoading(true);
    resetAuthError();

    try {
      await signOut();
      setIsLogged(false);
      setCurrentUser(null);
      setSavedMovies([]);
      setFilteredMovies([]);
      filterResetStates();
      clearLocalStorage();
      navigate("/", { replace: true });
    } catch (err) {
      console.log(err);
      setAuthError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleTokenCheck = useCallback(async () => {
    setIsLoading(true);
    resetAuthError();

    try {
      const { data: user } = await getUserInfo();

      setIsLogged(true);
      setCurrentUser(user);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleSignIn = async ({ email, password }) => {
    setIsLoading(true);
    resetAuthError();

    try {
      const { data: user } = await signIn({ email, password });

      if (user) {
        setIsLogged(true);
        navigate("/movies", { replace: true });
      }
    } catch (err) {
      console.log(err);
      setAuthError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const showSuccessText = (text, delay) => {
    setSuccessText(text);

    if (notificationTimer) {
      clearTimeout(notificationTimer);
    }

    setNotificationTimer(
      setTimeout(() => {
        setSuccessText(null);
      }, delay),
    );
  };

  const handleUpdateUserInfo = async ({ name, email }) => {
    setIsLoading(true);
    resetAuthError();

    try {
      const { data: user } = await updateUserInfo({ name, email });

      setCurrentUser(user);
      showSuccessText(
        UPDATE_USER_INFO_SUCCESS_TEXT,
        SUCCESS_NOTIFICATION_DURATION,
      );
    } catch (err) {
      console.log(err);
      setAuthError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const loadUserMovies = useCallback(async () => {
    try {
      const { data: userSavedMovies } = await loadSavedMovies();
      if (!userSavedMovies) return;

      setSavedMovies([...userSavedMovies]);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const handleSaveMovie = async (data) => {
    try {
      const { data: movie } = await saveMovie(data);

      if (!movie) return;

      await loadUserMovies();
    } catch (err) {
      console.log(err);
    }
  };

  const handleDeleteMovie = async (movie) => {
    try {
      const deletedMovie = savedMovies.find(
        (savedMovie) =>
          savedMovie.movieId === movie.movieId ||
          savedMovie.movieId === movie.id,
      );

      if (!deletedMovie) return;

      const { data } = await deleteMovie(deletedMovie._id);

      if (!data) return;

      setSavedMovies([
        ...savedMovies.filter(
          (savedMovie) => savedMovie._id !== deletedMovie._id,
        ),
      ]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => {
      if (!isLogged) return;

      await loadUserMovies();
    })();
  }, [isLogged, loadUserMovies]);

  useEffect(() => {
    if (!initialMovies?.length || !search?.length) return;

    const filteredMovies = filterMovies(initialMovies, {
      search,
      isToggled,
    });

    setFilteredMovies([...filteredMovies]);
  }, [initialMovies]);

  useEffect(() => {
    if (!search.length) return;

    setIsLoading(true);

    setFilteredMovies([...filterMovies(initialMovies, { search, isToggled })]);

    setIsLoading(false);
  }, [search, isToggled]);

  useEffect(() => {
    if (isSavedMoviesOpened) {
      resetSavedMoviesFilter();
    }
  }, [isSavedMoviesOpened]);

  useEffect(() => {
    setFilteredSavedMovies([
      ...filterMovies(savedMovies, {
        search: savedMoviesSearch,
        isToggled: isSavedMoviesToggled,
      }),
    ]);
  }, [savedMovies]);

  useEffect(() => {
    setFilteredSavedMovies([
      ...filterMovies(savedMovies, {
        search: savedMoviesSearch,
        isToggled: isSavedMoviesToggled,
      }),
    ]);
  }, [savedMoviesSearch, isSavedMoviesToggled]);

  useEffect(() => {
    (async () => handleTokenCheck())();
  }, [isLogged, handleTokenCheck]);

  useEffect(() => {
    if (!isLogged) return;

    (async () => handleLoadMovies())();
  }, [isLogged]);

  useEffect(() => {
    setIsLoading(true);
    restoreDataFromLocalStorage();
  }, []);

  return (
    <UserContext.Provider value={currentUser}>
      <div className={isMenuOpen ? "app app_menu-active" : "app"}>
        <Header
          isLogged={isLogged}
          isMenuOpen={isMenuOpen}
          onMenuToggle={handleOpenMenu}
        />

        <Routes>
          <Route index element={<Home />} />

          <Route
            path="/"
            element={
              <Layout
                isLogged={isLogged}
                isShowFooter={isShowFooter}
                isMenuOpen={isMenuOpen}
                onMenuToggle={handleOpenMenu}
              />
            }
          >
            <Route
              path="movies"
              element={
                <ProtectedRoute
                  element={Movies}
                  isLogged={isLogged}
                  movies={filteredMovies}
                  savedMovies={savedMovies}
                  loaderConfig={loaderConfig}
                  search={search}
                  toggled={isToggled}
                  isLoading={isLoading}
                  loadErrorText={loadMovesErrorText}
                  hadFiltered={moviesFiltersIsDirty}
                  onSearch={onSearch}
                  onToggle={onSwitcherToggle}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                />
              }
            />

            <Route
              path="saved-movies"
              element={
                <ProtectedRoute
                  isLogged={isLogged}
                  element={SavedMovies}
                  movies={filteredSavedMovies}
                  showSavedMovies={true}
                  search={savedMoviesSearch}
                  toggled={isSavedMoviesToggled}
                  isLoading={isLoading}
                  loadErrorText={loadMovesErrorText}
                  hadFiltered={savedMoviesFiltersIsDirty}
                  onSearch={onSearch}
                  onToggle={onSwitcherToggle}
                  onDeleteMovie={handleDeleteMovie}
                />
              }
            />

            <Route
              path="profile"
              element={
                <ProtectedRoute
                  isLogged={isLogged}
                  element={Profile}
                  errorText={authError}
                  successText={successText}
                  onSignOut={handleSignOut}
                  onUpdateUser={handleUpdateUserInfo}
                />
              }
            />
          </Route>

          <Route
            path="/signin"
            element={
              <SignIn
                errorText={authError}
                onReset={resetAuthError}
                onSubmit={handleSignIn}
              />
            }
          />

          <Route
            path="/signup"
            element={
              <SignUp
                errorText={authError}
                onReset={resetAuthError}
                onSubmit={handleSignUp}
              />
            }
          />

          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        {isShowFooter && <Footer />}
      </div>
    </UserContext.Provider>
  );
}
export default App;
