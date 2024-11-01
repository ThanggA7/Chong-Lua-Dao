import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const API = async () => {
      try {
        const fetchAPI = await fetch(url);
        const res = await fetchAPI.json();
        setData(res.data);
      } catch (error) {}
    };
    API(url);
  }, [url]);

  return data;
}

export default useFetch;
