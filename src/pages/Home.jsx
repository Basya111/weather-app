import { Link } from "react-router-dom";
import { useFetchApi } from "../hooks/useFetchApi";
import { useContext } from "react";
import { getWeatherIcon } from "../services/utils";
import { StateContext } from "../context/GlobalState";

export const Home = () => {
  const { location } = useContext(StateContext);
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location?.lat}&lon=${location?.lon}&appid=248d2efb006413b786b246d1276a3dd9`;

  const [isLoading, data, error] = useFetchApi(url, location);
  console.log(data);

  const image = getWeatherIcon(data?.main);

  return (
    <div className="home">
      {location.cityName ? (
        <h1>The Weather in {location.cityName}</h1>
      ) : (
        <h1>Weather App</h1>
      )}
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
            <div className="content">
              <img className="image-wrapper" src={image} />
              <div className="card-wrapper">
                <h3>Temperature</h3>
                <p>{data?.main.temp}K</p>
              </div>
              <div className="card-wrapper">
                <h3>Humidity</h3>
                <p>{data?.main.humidity}</p>
              </div>
            </div>
          ) : (
            <p>{error}</p>
          )}
        </div>
      )}
    </div>
  );
};
