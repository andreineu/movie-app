import http from "../api/http";

export function serviceGetTopRated() {
  return http.get("/movie/top_rated");
}
