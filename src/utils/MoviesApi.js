import {checkResponse} from "../helpers/api.helper";
import {MOVIES_API_URL} from "../constants/api";


/** Получение всех фильмов
 *  @returns массив с фильмами
 */
export const loadMovies = () => {
  return fetch(MOVIES_API_URL).then(checkResponse);
};
