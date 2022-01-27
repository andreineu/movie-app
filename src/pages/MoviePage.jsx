import { useParams } from "react-router-dom";

import Movie from "../components/movie/Movie";
import ActorsRow from "../components/misc/ActorsRow";
import MediaRow from "../components/misc/MediaRow";

import useFetch from "../hooks/useFetch";
import { serviceGetMovie, serviceGetRecommendations } from "../services";
import { useCallback } from "react";
import LoadingSpiner from "../components/loading/LoadingSpinner";

const MoviePage = () => {
  let params = useParams();
  const id = params.movieID.split("-")[0];
  const getMovie = useCallback(() => serviceGetMovie(id), [id]);
  const getRecommendations = useCallback(
    () => serviceGetRecommendations("movie", id),
    [id]
  );

  const { data, error, loading } = useFetch(getMovie);
  const {
    data: recData,
    error: recError,
    loading: recLoading,
  } = useFetch(getRecommendations);

  return (
    <>
      {loading && <LoadingSpiner />}
      {data && (
        <>
          <Movie movie={data} />
          <div className="site-container">
            <ActorsRow mediaType="movie" id={id} />
            <MediaRow
              data={recData?.results}
              loading={recLoading}
              error={recError}
              title="Recommendations"
            />
          </div>
        </>
      )}
      {error && (
        <div onClick={() => console.log(error)}>
          Error fetching data. Click to log error
        </div>
      )}
    </>
  );
};

export default MoviePage;
