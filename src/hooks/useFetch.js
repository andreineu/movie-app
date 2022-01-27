import { useEffect, useState } from "react";

const useFetch = (serviceFn) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    setLoading(true);
    serviceFn()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [serviceFn]);

  return { data, error, loading };
};

export default useFetch;
