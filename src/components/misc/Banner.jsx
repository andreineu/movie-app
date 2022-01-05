import { useState } from "react";
import requests from "../API/requests";
import useFetching from "../hooks/useFetching";


const Banner = () => {
  const baseUrl = "https://www.themoviedb.org/t/p/original";

  const fetchUrl = requests.fetchTrending
  const [loading, setLoading] = useState(true);
  const response = useFetching(fetchUrl, setLoading)
  const movies = response.results
  return ( 
    loading ?<h3>Loading</h3>:
    <div>
      <button onClick={()=> console.log(movies)}>Movies</button>
      <div className="h-[684px] w-[1216px] rounded-3xl overflow-hidden"
        // style={{
        // backgroundImage: `url(${baseUrl + movies[1].backdrop_path})`,
        // backgroundPosition: "right -200px top",
        // backgroundSize: "cover",}}
      >
        <img src={`${baseUrl + movies[3].backdrop_path}`} alt="" />
      </div>
      Banner
      {movies.map(movie => <div key={movie.name? movie.name : movie.title}>{movie.name? movie.name : movie.title}</div>)}
    </div> );

}
 
export default Banner;