import FilterItem from "./FilterItem";
import FilterSearch from "./FilterSearch";

const Filters = () => {
  return (
    <div className="flex gap-10 mt-4">
      <FilterSearch />
      <FilterItem label={"type"} />
    </div>
  );
};

export default Filters;
