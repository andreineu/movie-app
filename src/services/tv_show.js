import http from "../api/http";

export function serviceGetTvShow(id) {
  return http.get(`/tv/${id}`);
}
