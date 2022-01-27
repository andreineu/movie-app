const FilterItem = ({ label, type = "input" }) => {
  return (
    <label className="flex flex-col">
      <div className="font-semibold dark:text-gray-400 text-gray-600 py-3">
        {label}
      </div>
      <div className="flex items-center dark:bg-gray-700 dark:text-gray-300 rounded-md shadow-lg">
        <input
          className="outline-none dark:bg-gray-700 dark:text-gray-300 text-gray-500 py-3 pl-3 rounded-md"
          type={type}
        />
        <button type="submit">
          
        </button>
      </div>
    </label>
  );
};

export default FilterItem;
