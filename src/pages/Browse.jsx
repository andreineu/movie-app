import BrowseList from "../components/browse/BrowseList";
import Filters from "../components/UI/Filters";
import useFetch from "../hooks/useFetch";

import { serviceGetTopRated, serviceGetTrendingWeek } from "../services";

const Browse = () => {
  const {
    data: trendingData,
    loading: trendingLoading,
    error: trendingError,
  } = useFetch(serviceGetTrendingWeek);

  const {
    data: topRatedData,
    loading: topRatedLoading,
    error: topRatedError,
  } = useFetch(serviceGetTopRated);
  return (
    <div className="site-container">
      <Filters />
      <BrowseList
        data={trendingData?.results}
        loading={trendingLoading}
        error={trendingError}
        title="Trending"
      />
      <BrowseList
        data={topRatedData?.results}
        loading={topRatedLoading}
        error={topRatedError}
        title="Top Rated"
      />
    </div>
  );
};

export default Browse;
