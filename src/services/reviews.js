import http from "../api/http";

export function serviceGetReviews(media, id) {
  return http.get(`/${media}/${id}/reviews`);
}
