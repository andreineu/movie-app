import http from "../api/http";

export function serviceGetGenres(media) {
  return http.get(`/genre/${media}/list`);
}
