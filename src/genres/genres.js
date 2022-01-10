import genres_movie from "./movie_genres";
import genres_tv from "./tv_genres";

export function getGenres(arr, media_type) {
  let res = [];
  if (media_type === "tv") {
    arr.forEach((genre_id) => {
      let obj = genres_tv.find((genreObj) => genreObj.id === genre_id);
      res.push(obj.name);
    });
  } else if (media_type === "movie") {
    arr.forEach((genre_id) => {
      let obj = genres_movie.find((genreObj) => genreObj.id === genre_id);
      res.push(obj.name);
    });
  }
  return res;
}
