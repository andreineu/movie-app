import http from "../api/http";

//recomendations for movie or show
export function serviceGetRecommendations(media, id) {
  return http.get(`/${media}/${id}/recommendations`);
}
