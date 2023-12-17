import { useEffect, useState } from "react";
import cloudy from "../assets/cloudy.png";
import axios from "axios";
import Aos from "aos";
import "aos/dist/aos.css";
import PropTypes from "prop-types";

const WeatherCard = ({ logo, weather, activity }) => {
  return (
    <div
      className="flex space-x-3 border shadow px-3 py-3 justify-between rounded-md"
      data-aos="zoom-in"
      data-aos-duration="500"
    >
      <div className="w-20 flex h-14 items-center rounded-full p-2 border shadow">
        <img className="w-20" src={logo} alt="logo" />
      </div>
      <div>
        <h1 className="font-poppins font-semibold">{weather}</h1>
        <p>{activity}</p>
      </div>
    </div>
  );
};

WeatherCard.propTypes = {
  logo: PropTypes.string.isRequired,
  weather: PropTypes.string.isRequired,
  activity: PropTypes.string.isRequired,
};

const Cards = () => {
  const [weatherData, setWeatherData] = useState("");

  const getActivitySuggestion = (temperature) => {
    if (temperature < 10) {
      return "It's cold! Consider staying indoors and enjoying a warm drink.";
    } else if (temperature >= 10 && temperature < 25) {
      return "Cool weather! Perfect for a walk in the park.";
    } else {
      return "Warm weather! Pack a picnic and enjoy the outdoors.";
    }
  };

  const getUserLocation = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (location, err) => {
          if (err) {
            alert("Unexpected error. Try again later.");
            return;
          }

          const api_key = `405e4dc7759a0577b7cfac44e489076e`;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${api_key}&units=metric`;

          try {
            const response = await axios.get(url);
            setWeatherData(response.data);
          } catch (error) {
            console.error("Error fetching weather data:", error);
          }
        });
      }
    } catch (error) {
      console.error("Error getting user location:", error);
    }
  };

  useEffect(() => {
    Aos.init();
    getUserLocation(); // Fetch user location
  }, []);

  const data = [
    {
      logo: cloudy,
      weather: weatherData?.weather?.[0]?.description,
      activity: getActivitySuggestion(weatherData?.main?.temp),
    },
  ];

  return (
    <div className="px-5">
      <h1 className="text-2xl font-semibold py-6">Your Activity</h1>
      {data.map(({ logo, weather, activity }, i) => (
        <WeatherCard
          key={i}
          logo={logo}
          weather={weather}
          activity={activity}
        />
      ))}
    </div>
  );
};

export default Cards;
