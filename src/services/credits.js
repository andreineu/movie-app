import http from "../api/http";

export function serviceGetCredits(media, id) {
  return http.get(`/${media}/${id}/credits`);
}
