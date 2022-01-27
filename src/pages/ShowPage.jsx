import { useCallback } from "react";
import { useParams } from "react-router-dom";

import Show from "../components/show/Show";
import ActorsRow from "../components/misc/ActorsRow";
import MediaRow from "../components/misc/MediaRow";

import { serviceGetTvShow, serviceGetRecommendations } from "../services";
import useFetch from "../hooks/useFetch";
import LoadingSpiner from "../components/loading/LoadingSpinner";

const ShowPage = () => {
  let params = useParams();
  const id = params.movieID.split("-")[0];

  const getTvShow = useCallback(() => serviceGetTvShow(id), [id]);
  const getRecommendations = useCallback(
    () => serviceGetRecommendations("movie", id),
    [id]
  );

  const { data: tvShow, error, loading } = useFetch(getTvShow);
  const {
    data: recData,
    error: recError,
    loading: recLoading,
  } = useFetch(getRecommendations);

  return (
    <>
      {loading && <LoadingSpiner />}
      {tvShow && (
        <>
          <Show show={tvShow} />
          <div className="site-container">
            <ActorsRow mediaType="tv" id={id} />
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

export default ShowPage;
