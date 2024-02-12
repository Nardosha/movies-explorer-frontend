import { AdaptiveBorders } from "./adaptive";

export const Links = {
  STATIC_WEBSITE: {
    TITLE: "Статичный сайт",
    LINK: "https://nardosha.github.io/how-to-learn",
  },
  ADAPTIVE_WEBSITE: {
    TITLE: "Адаптивный сайт",
    LINK: "https://nardosha.github.io/russian-travel",
  },
  SPA: {
    TITLE: "Одностраничное приложение",
    LINK: "https://nardosha.github.io/mesto-react/",
  },
  GITHUB: {
    TITLE: "GitHub",
    LINK: "https://github.com/Nardosha",
  },
  YANDEX_PRACTICUM: {
    TITLE: "Яндекс.Практикум",
    LINK: "https://practicum.yandex.ru/profile/frontend-developer/",
  },
};

export const CardConfig = {
  [AdaptiveBorders.LAPTOP]: {
    defaultRowsNumber: 4,
    cardsPerRow: 3,
    defaultCardsNumber: 12,
    loadingCardsNumber: 3,
  },
  [AdaptiveBorders.TABLET]: {
    defaultRowsNumber: 4,
    cardsPerRow: 2,
    defaultCardsNumber: 8,
    loadingCardsNumber: 2,
  },
  [AdaptiveBorders.MOBILE]: {
    defaultRowsNumber: 5,
    cardsPerRow: 1,
    defaultCardsNumber: 5,
    loadingCardsNumber: 2,
  },
};

export const LocalStorageKeys = {
  SEARCH: {
    MOVIES: "MOVIES_SEARCH",
    SAVED_MOVIES: "SAVED_MOVIES_SEARCH",
  },
  TOGGLE: {
    IS_SHOW_SHORT_MOVIES: "IS_SHOW_SHORT_MOVIES",
    IS_SHOW_SHORT_SAVED_MOVIES: "IS_SHOW_SHORT_SAVED_MOVIES",
  },
  LOADED_MOVIES: "LOADED_MOVIES",
};

export const SHORT_MOVIE_DURATION = 40;
