import { useEffect, useState } from "react";
import cloudy from "../assets/cloudy.png";
import axios from "axios";
export default function Cards() {
  const [weatherData, setWeatherData] = useState("");

  const getUserLocation = async () => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (location, err) => {
          const api_key = `405e4dc7759a0577b7cfac44e489076e`;
          const url = `https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=${api_key}&units=metric`;

          axios.get(url).then((response) => {
            setWeatherData(response.data);
            console.log(weatherData);
          });

          if (err) {
            alert("Unexpected error. Try again later.");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getActivitySuggestion = (temperature) => {
    if (temperature < 10) {
      return "It's cold! Consider staying indoors and enjoying a warm drink.";
    } else if (temperature >= 10 && temperature < 20) {
      return "Cool weather! Perfect for a walk in the park.";
    } else {
      return "Warm weather! Pack a picnic and enjoy the outdoors.";
    }
  };

  const data = [
    {
      logo: cloudy,
      weather: weatherData?.weather?.[0]?.description,
      activity: getActivitySuggestion(weatherData?.main?.temp),
    },
  ];

  useEffect(() => {
    getUserLocation(); // Fetch user location
  }, []);

  return (
    <div className="px-5">
      <h1 className="text-2xl font-semibold py-6">Your Activity</h1>
      {data.map((_, i) => {
        return (
          <div
            className="flex space-x-3 border shadow px-3 py-3 justify-between rounded-md"
            key={i}
          >
            <div className="w-20 flex h-14 items-center rounded-full p-2 border shadow">
              <img className="w-20" src={_.logo} alt="logo" />
            </div>
            <div>
              <h1 className="font-poppins font-semibold">{_.weather}</h1>
              <p>{_.activity}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
