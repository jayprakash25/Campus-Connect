import { Link, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherTable from "../Components/WeatherTable";
import Navbar from "../Components/Navbar";
import loader from "../assets/loader.gif";
import Aos from "aos";
import "aos/dist/aos.css";

export default function FullEventPage() {
  const page = useLocation();
  const { image, Tittle, location, Date, Time, FullAddress, Lat, Long } =
    page.state;

  const apiKey = "405e4dc7759a0577b7cfac44e489076e";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Long}&appid=${apiKey}&units=metric`;

  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  const getWeather = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  };

  const isWarmAndSunny = data?.main?.temp >= 24 && data?.clouds?.all < 50;
  const isHotAndHumid = data?.main?.temp >= 29 && data?.main?.humidity >= 70;
  const isCloudyOrCool = data?.clouds?.all >= 50 || data?.main?.temp < 15;

  useEffect(() => {
    Aos.init();
    getWeather();
  }, []);

  return (
    <>
      {loading ? (
        // Display the loading spinner or GIF while content is loading
        <div className="flex  items-center justify-center h-screen">
          <img className="w-20" src={loader} alt="Loading" />
        </div>
      ) : (
        <main>
          <div className="grid place-items-center px-5 py-4 ">
            <div className="w-full text-left pb-4">
              <Link to="/events">
                <ArrowBackIcon />
              </Link>
            </div>
            <div className="lg:flex justify-center lg:space-x-12 w-full items-center lg:items-start">
              <div className="">
                <div
                  data-aos="zoom-in"
                  data-aos-duration="700"
                  className="relative"
                >
                  <img
                    src={image}
                    className="brightness-75 w-[20rem] lg:w-[30rem] object-cover  rounded-lg  
                       "
                    alt=""
                  />

                  <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full absolute space-y-2.5 px-6 text-white">
                    <h1 className="text-2xl font-bold lg:text-4xl">{Tittle}</h1>
                    <p className="text-sm lg:text-2xl">{location}</p>
                  </div>
                </div>
                <div className="mt-5  space-y-2">
                  <h1 className="text-lg lg:text-4xl text-slate-800 font-bold">
                    Address
                  </h1>
                  <p className="max-w-xs lg:text-xl text-sm text-gray-500 leading-6">
                    {FullAddress}
                  </p>
                </div>
                {/* <div className="border-[1px] mt-6 border-gray-100"></div> */}
                <div className="mt-5 flex justify-between w-full ">
                  <div className="space-y-3.5 text-">
                    <h1 className="text-lg font-bold  text-slate-800">DATE</h1>
                    <p className="text-sm text-slate-500 font-semibold">
                      {Date}
                    </p>
                  </div>
                  <div className="space-y-3.5 text-center">
                    <h1 className="text-lg font-bold text-slate-800">TIMING</h1>
                    <p className="text-sm text-slate-500 font-semibold">
                      {Time}
                    </p>
                  </div>
                </div>
              </div>
              {/* </div> */}
              <div className=" text-center py-8 lg:py-0 lg:grid lg:place-items-start ">
                <WeatherTable
                  temp={data?.main?.temp.toString()}
                  sky={data?.weather?.[0]?.description}
                  humidity={data?.main?.humidity.toString()}
                  visibility={data?.visibility?.toString()}
                />
              </div>
            </div>
            <div className=" py-6 text-left w-full">
              <h1 className="text-lg font-bold text-slate-800">
                Fun Outdoors, Whatever the Weather: Your Go-To Activity Guide!
              </h1>
              <ul className="space-y-3 my-3 text-gray-500  text-sm">
                {isHotAndHumid && (
                  <li className="space-y-2">
                    <h2 className="font-bold text-lg">
                      Cool Down with Water Activities!
                    </h2>
                    <p className="font-poppins text-sm">
                      Head to the beach, swim in a pool, or try paddleboarding.
                    </p>
                  </li>
                )}
                {isWarmAndSunny && (
                  <div className="space-y-2">
                    <h2 className="font-bold text-lg">Enjoy Outdoor Sports!</h2>
                    <p className="font-poppins text-sm">
                      Play tennis, golf, or go for a run in the beautiful
                      weather.
                    </p>
                  </div>
                )}
                {isCloudyOrCool && (
                  <div className="space-y-2">
                    <h2 className="font-bold text-lg">
                      Explore Indoor Activities!
                    </h2>
                    <p className="font-poppins text-sm">
                      Visit a museum, try indoor sports, or have a cozy movie
                      night.
                    </p>
                  </div>
                )}
              </ul>
            </div>
          </div>
          <div className="mt-10">
            <Navbar />
          </div>
        </main>
      )}
    </>
  );
}
