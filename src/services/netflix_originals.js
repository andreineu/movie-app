import http from "../api/http";

export function serviceGetNetflixOriginals() {
  return http.get("/discover/tv", { params: { with_networks: 213 } });
}
