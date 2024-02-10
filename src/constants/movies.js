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

// Ширина 1280px — 4 ряда карточек. Кнопка «Ещё» загружает дополнительный ряд карточек.
// Ширина 768px — 4 ряда карточек. Кнопка «Ещё» загружает дополнительный ряд карточек.
// Ширина от 320px до 480px — 5 карточек по 1 в ряд. Кнопка «Ещё» загружает по 2 карточки.

export const AdaptiveBorders = {
  LAPTOP: 1280,
  TABLET: 768,
  MOBILE: 480,
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
  SEARCH: "search",
  IS_SHOW_SHORT_MOVIES: "isToggled",
};

export const SHORT_MOVIE_DURATION = 40;