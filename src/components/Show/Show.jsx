import ShowDetails from "./ShowDetails";

const Show = ({ show }) => {
  const baseUrl = "https://www.themoviedb.org/t/p/original";

  return (
    <div
      onClick={() => console.log(show)}
      className="w-full relative"
      style={{
        backgroundImage: `url(${baseUrl + show.backdrop_path})`,
        backgroundPosition: "right -200px top",
        backgroundSize: "cover",
      }}
    >
      <div className="background py-8">
        <div className="container mx-auto px-8 flex text-white">
          <img
            className="w-80 rounded-xl mr-8"
            src={baseUrl + show.poster_path}
            alt={`${show.name} poster`}
          />
          <ShowDetails show={show} />
        </div>
      </div>
    </div>
  );
};

export default Show;
