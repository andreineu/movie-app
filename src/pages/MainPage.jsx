import MediaRow from "../components/misc/MediaRow";

import SearchBanner from "../components/search/SearchBanner";
import useFetch from "../hooks/useFetch";
import { serviceGetTopRated, serviceGetTrendingWeek } from "../services";

const MainPage = () => {
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
      <SearchBanner />
      <MediaRow
        data={topRatedData?.results}
        loading={topRatedLoading}
        error={topRatedError}
        title="Top rated"
      />
      <MediaRow
        data={trendingData?.results}
        loading={trendingLoading}
        error={trendingError}
        title="Trending"
      />
    </div>
  );
};

export default MainPage;
