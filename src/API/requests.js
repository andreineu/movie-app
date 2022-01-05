const API_KEY = "5a09f4853e6c7f4f1be8d7d0cde7310d";
// '/movie/${movie_id}?api_key=5a09f4853e6c7f4f1be8d7d0cde7310d&language=en-US'
const requests = {
    fetchCredits(media_type, id) {return `/${media_type}/${id}/credits?api_key=${API_KEY}`},
    fetchReviews(media_type, id) {return `/${media_type}/${id}/reviews?api_key=${API_KEY}`},
    fetchRecommendations(media_type, id) {return `/${media_type}/${id}/recommendations?api_key=${API_KEY}`},
    fetchSearchResults(media_type, query, page = 1) {return `/search/${media_type}?api_key=${API_KEY}&language=en-US&page=${page}&query=${query}&include_adult=false`},
    fetchDetails(media_type, id) {return `/${media_type}/${id}?api_key=${API_KEY}`},
    fetchNowPlaying: `/movie/nov_playing?api_key=${API_KEY}&with_networks=213`,
    fetchGenreList(media_type) {return `/genre/${media_type}/list?api_key=${API_KEY}&language=en-US`},
    // fetchByGenre(genre_id) {return ``}
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
    baseURL: "https://www.themoviedb.org/t/p/",
}

export default requests;