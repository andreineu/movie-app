import http from "../api/http";

export function serviceGetTrendingToday() {
  return http.get("/trending/all/day");
}

export function serviceGetTrendingWeek() {
  return http.get("/trending/all/week");
}
