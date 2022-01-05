import { useParams } from "react-router-dom";

import requests from "../API/requests";
import useFetching from "../hooks/useFetching";

import Movie from "../components/Movie/Movie";
import ActorsRow from "../components/misc/ActorsRow";
import MediaRow from "../components/misc/MediaRow";
import Loading from "../components/loading/Loading";

const MoviePage = () => {
  let params = useParams();
  const id = params.movieID.split("-")[0];
  const fetchUrl = requests.fetchDetails("movie", id);

  // const [isLoading, setIsLoading] = useState(true);
  // const movie = useFetching(fetchUrl, setIsLoading);

  const { data: movie, loading } = useFetching(fetchUrl);

  return loading ? (
    <Loading />
  ) : movie ? (
    <>
      <Movie movie={movie} />
      <div className="site-container">
        <ActorsRow mediaType="movie" id={id} />
        <MediaRow
          fetchUrl={requests.fetchRecommendations("movie", id)}
          title="Recommendations"
        />
      </div>      
    </>
  ) : (
    <div onClick={() => console.log({ data: movie, loading })}>
      Error fetching data
    </div>
  );
};

export default MoviePage;
