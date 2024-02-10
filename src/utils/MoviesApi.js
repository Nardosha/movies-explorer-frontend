import {checkResponse} from "../helpers/api.helper";
import {MOVIES_API_URL} from "../constants/api";




/** Получение всех фильмов
 *  @returns массив с фильмами
 */
export const loadMovies = async () => {
  return await fetch(MOVIES_API_URL).then(checkResponse);
};

//{{country: String;created_at: Data;description: String;director: String;duration: Number;id: Number;image:{id: 2, name: 'all-tommoros-parties', alternativeText: '', caption: '', width: 699, …};nameEN: String;nameRU: String;trailerLink String,updated_at: String;year: String}}
