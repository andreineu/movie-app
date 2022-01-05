import { useParams } from "react-router-dom";

import requests from "../API/requests";
import useFetching from "../hooks/useFetching";

import Show from "../components/Show/Show";
import ActorsRow from "../components/misc/ActorsRow";
import MediaRow from "../components/misc/MediaRow";
import Loading from "../components/loading/Loading";

const ShowPage = () => {
  let params = useParams();
  const id = params.movieID.split("-")[0];
  const fetchUrl = requests.fetchDetails("tv", id);

  const {data: show,loading} = useFetching(fetchUrl)

  return loading ? (
    <Loading />
  ) : show ? (
    <>
      <Show show={show} />
      <div className="site-container">
        <ActorsRow mediaType="tv" id={id} />
        <MediaRow
          fetchUrl={requests.fetchRecommendations("tv", id)}
          title="Recommendations"
        />
      </div>
    </>
  ) : (
    <div onClick={() => console.log({ data: show, loading })}>
      Error fetching data
    </div>
  );
};

export default ShowPage;
