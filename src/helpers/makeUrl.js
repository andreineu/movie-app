export function makeUrl(media = "movie", id, title) {
  let url = `/${media}/${id}-${title.toLowerCase().split(" ").join("-")}`;
  return url;
}
