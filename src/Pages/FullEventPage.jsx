import { Link, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherTable from "../Components/WeatherTable";
import Navbar from "../Components/Navbar";
import loader from "../assets/loader.gif";

export default function FullEventPage() {
  const page = useLocation();
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const { image, Tittle, location, Date, Time, FullAddress, Lat, Long } =
    page.state;

  const api_key = `405e4dc7759a0577b7cfac44e489076e`;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Long}&appid=${api_key}&units=metric`;

  const getWeather = () => {
    setLoading(true);
    axios.get(url).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    getWeather();
  }, []);

  // const { image } = page.state;

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
                <div className="relative">
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
                Things to do:
              </h1>
              <ul className="space-y-3 my-3 text-gray-500  text-sm">
                <li>Thing1</li>
                <li>Thing2</li>
                <li>Thing3</li>
                <li>Thing4</li>
                <li>Thing5</li>
              </ul>
            </div>
          </div>

          <Navbar />
        </main>
      )}
    </>
  );
}
