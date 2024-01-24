// react
import { useState } from "react";

/**
 * Custom hook for performing asynchronous fetch requests.
 *
 * Maintains the fetched data state, initializes with an optional base URL.
 *
 * @param {string} baseURL - The base URL for fetch request, defaults to "".
 * @returns {[any[], Function]} Fetched data array and the fetch function.
 */
export default function useFetch(baseURL = "") {
  const [data, setData] = useState([]);

  // if baseURL is provided lets us it as a "host" variable for future requests
  const host = baseURL;

  const fetchData = async (url) => {
    try {
      const uri = `${host}${url}`;
      const response = await fetch(uri);
      const json = await response.json();

      setData(json);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return [data, fetchData];
}
