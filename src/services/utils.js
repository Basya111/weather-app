import thunderstorm from "../assets/images/thunderstorm.png";
import drizzle from "../assets/images/thunderstorm.png";
import rain from "../assets/images//raining.png";
import cloud from "../assets/images/cloudy.png";
import clear from "../assets/images/sunny.png";

export const getWeatherIcon = (weather) => {
  console.log(weather);
  switch (weather) {
    case "Thunderstorm":
      return thunderstorm;
    case "Drizzle":
      return drizzle;
    case "Rain":
      return rain;
    case "Clouds":
      return cloud;
    case "Clear":
    default:
      return clear;
  }
};
