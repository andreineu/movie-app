import { useCallback } from "react";
import { baseURL } from "../../api";
import useFetch from "../../hooks/useFetch";
import { serviceGetCredits } from "../../services";
import ActorCardLoading from "../loading/ActorCardLoading";

const ActorCard = ({ actor }) => {
  return (
    <div className="flex flex-col w-[154px] rounded-lg overflow-hidden shadow-lg border dark:border-gray-700 flex-shrink-0 group cursor-pointer mb-4">
      <div className="h-[180px] overflow-hidden">
        {actor.profile_path ? (
          <img
            loading="lazy"
            src={baseURL + "w300" + actor.profile_path}
            alt="tom"
          />
        ) : (
          <div className="bg-gray-300 dark:bg-gray-500 h-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-20 w-20 text-gray-400 dark:text-gray-700"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        )}
      </div>

      <p className="dark:text-zinc-300 dark:group-hover:text-zinc-400 font-bold px-2 pt-2 group-hover:text-zinc-500 transition-colors leading-4">
        {actor.original_name}
      </p>
      <p className="px-2 leading-4 pb-4 pt-1 text-sm">{actor.character}</p>
    </div>
  );
};

const ActorsRow = ({ mediaType, id }) => {
  const getActors = useCallback(
    () => serviceGetCredits(mediaType, id),
    [mediaType, id]
  );

  const { data: credits, loading, error } = useFetch(getActors);

  const cast = credits?.cast;
  return (
    <div>
      <h3 className="text-2xl font-bold py-6">Cast</h3>
      <div className="flex gap-4 pb-4 mb-4 overflow-x-scroll scroller">
        {loading && [...Array(10)].map((_, i) => <ActorCardLoading key={i} />)}

        {cast &&
          cast
            .slice(0, 10)
            .map((actor) => <ActorCard key={actor.id} actor={actor} />)}
        {error && (
          <div onClick={() => console.log(error)}>
            Error fetching data. Click to log error
          </div>
        )}
      </div>
    </div>
  );
};

export default ActorsRow;
