import ShowDetails from "./ShowDetails";

import { baseURL } from "../../api";

const Show = ({ show }) => {
  return (
    <div
      onClick={() => console.log(show)}
      className="w-full relative"
      style={{
        backgroundImage: `url(${baseURL}original${show.backdrop_path})`,

        backgroundPosition: "right -200px top",
        backgroundSize: "cover",
      }}
    >
      <div className="background py-8">
        <div className="container mx-auto px-8 flex text-white">
          <img
            className="w-80 rounded-xl mr-8"
            src={baseURL + "original" + show.poster_path}
            alt={`${show.name} poster`}
          />
          <ShowDetails show={show} />
        </div>
      </div>
    </div>
  );
};

export default Show;
