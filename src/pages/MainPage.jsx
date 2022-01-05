import MediaRow from "../components/misc/MediaRow";
import requests from "../API/requests";
import SearchBanner from "../components/Search/SearchBanner";

const MainPage = () => {
  return (
    <div className="site-container">
      {/* <Banner /> */}
      <SearchBanner />
      <MediaRow fetchUrl={requests.fetchTopRated} title="Top rated" />
      <MediaRow fetchUrl={requests.fetchTrending} title="Trending" />
    </div>
  );
};

export default MainPage;
