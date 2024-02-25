import { Link } from "react-router-dom";
import { useFetchApi } from "../hooks/useFetchApi";
import { useContext } from "react";
import { getWeatherIcon } from "../services/utils";
import { Search } from "../components/Search";
import { StateContext } from "../context/GlobalState";

export const Home = () => {
  const { location } = useContext(StateContext);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.lon}&appid=248d2efb006413b786b246d1276a3dd9`;

  const [isLoading, data, error] = useFetchApi(url);
  console.log(data);

  const image = getWeatherIcon(data?.main);

  return (
    <div>
      <h1>Weather App</h1>
      <Search />
      {location.cityName && (
        <Link to={`/city/${location.cityName}`}>
          More about {location.cityName}
        </Link>
      )}
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {data ? (
            <>
              <div className="image-wrapper">
                <img src={image} />
              </div>
              <div className="weather-info">
                <h3>Temperature: {data?.main.temp}K</h3>
                <h3>Humidity: {data?.main.humidity}</h3>
              </div>
            </>
          ) : (
            <p>{error}</p>
          )}
        </div>
      )}
    </div>
  );
};
