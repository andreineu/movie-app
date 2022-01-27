import http from "../api/http";

export function serviceGetMovie(id) {
  return http.get(`/movie/${id}`);
}
