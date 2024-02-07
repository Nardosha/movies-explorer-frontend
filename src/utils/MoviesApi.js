const MOVIE_API = "https://api.nomoreparties.co/beatfilm-movies";

const checkResponse = (res) => {
  if (res.ok) return res.json();

  return Promise.reject(`Ошибка ${res.status}`);
};

/** Получение всех фильмов
 *  @returns массив с фильмами
 */
export const getMovies = async () => {
  return await fetch(MOVIE_API).then(checkResponse);
};

//{{country: String;created_at: Data;description: String;director: String;duration: Number;id: Number;image:{id: 2, name: 'all-tommoros-parties', alternativeText: '', caption: '', width: 699, …};nameEN: String;nameRU: String;trailerLink String,updated_at: String;year: String}}
