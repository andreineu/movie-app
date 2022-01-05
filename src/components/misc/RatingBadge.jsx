const RatingBadge = ({ rating, classes }) => {
  return (
    <div className={"w-8 h-8 rounded-full flex items-center justify-center bg-black border-2 border-teal-600 text-white font-semibold ".concat(classes)}>
      { Math.round(rating * 10 + "") }
    </div>
  );
};

export default RatingBadge;
