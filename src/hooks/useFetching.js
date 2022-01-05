import { useEffect, useReducer } from "react";

import axiosInstance from "../API/axios";
import axios from "axios";

const ACTIONS = {
  FETCH_DATA: "fetch-data",
  ERROR: "error",
};
const initialState = {
  data: [],
  loading: true,
  error: null,
};

function reducer(state, { type, payload }) {
  switch (type) {
    case "fetch-data":
      return { ...state, data: payload, loading: false };
    case "error":
      console.log(payload)
      return { ...state, data: [], error: true, loading: false };
    default:
      return state;
  }
}

const useFetching = (url) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const source = axios.CancelToken.source();

    axiosInstance
      .get(url, { cancelToken: source.token })
      .then((response) =>
        dispatch({ type: ACTIONS.FETCH_DATA, payload: response.data })
      )
      .catch((error) => {
        if (error.name === "cancelled") {
          console.log('fetching aborted')
        } else {
        dispatch({ type: ACTIONS.ERROR, payload: error })}
      });

    return () => {
      source.cancel("cancelled");
    };
  }, [url]);

  return state;
};

export default useFetching;
