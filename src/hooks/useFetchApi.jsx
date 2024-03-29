import { useState, useEffect } from "react";

export const useFetchApi = (url, props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async (url) => {
      setIsLoading(true);

      try {
        let response = await fetch(url, {
          method: "GET",
        });
        if (response.status === 200) {
          const data = await response.json();
          setData(data);
          setIsLoading(false);
        } else {
          throw new Error(response.statusText);
        }
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };

    fetchData(url);
  }, [props]);

  return [isLoading, data, error];
};
