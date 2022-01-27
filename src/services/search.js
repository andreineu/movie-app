import http from "../api/http";

export function serviceGetSearch(media, query, page = 1) {
  return http.get(`/search/${media}`, { params: { query, page } });
}
