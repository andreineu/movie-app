import requests from "../API/requests";
import BrowseRow from "../components/misc/BrowseRow";
import Filters from "../components/UI/Filters";

const Browse = () => {
  return ( 
    <div className="site-container">
      <Filters />
      <BrowseRow fetchUrl={requests.fetchTrending} title="Trending"/>
      <BrowseRow fetchUrl={requests.fetchRomanceMovies} title="R"/>

    </div> 
  );
}
 
export default Browse;