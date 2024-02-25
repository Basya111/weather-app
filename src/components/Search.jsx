import { useContext, useEffect, useState } from "react";
import { StateContext } from "../context/GlobalState";
import { useFetchApi } from "../hooks/useFetchApi";

export const Search = () => {
  const [city, setCity] = useState("");
  const { setLocation } = useContext(StateContext);

  const url = `http://api.openweathermap.org/geo/1.0/direct?q=${city}&&appid=248d2efb006413b786b246d1276a3dd9`;

  const [isLoading, data, error] = useFetchApi(url, city);
  console.log("data", data);

  useEffect(() => {
    // const { name, lat, lon } = data?.[0];
    // setLocation({ cityName: name[0].name, lat, lon });
  }, [data]);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(city);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="Search City"
        value={city}
        onChange={(event) => setCity(event.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};
