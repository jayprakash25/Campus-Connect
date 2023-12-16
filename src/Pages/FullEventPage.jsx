import { Link, useLocation } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherTable from "../Components/WeatherTable";
import Navbar from "../Components/Navbar";
export default function FullEventPage() {
  const page = useLocation();
  const [data, setData] = useState("");
  const api_key = `405e4dc7759a0577b7cfac44e489076e`;

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${api_key}&units=metric`;

  const getWeather = () => {
    axios.get(url).then((response) => {
      setData(response.data);
      console.log(data);
    });
  };

  useEffect(() => {
    getWeather();
  }, []);

  const { image, Tittle, location, Date, Time, FullAddress } = page.state;
  // const { image } = page.state;

  return (
    <>
      <div className="grid place-items-center px-5 py-4 ">
        <div className="w-full text-left pb-4">
          <Link to="/events">
            <ArrowBackIcon />
          </Link>
        </div>
        <div className="relative">
          <img
            src={image}
            className="brightness-75 w-[20rem] object-cover  rounded-lg  
                       "
            alt=""
          />

          <div className="top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full absolute space-y-2.5 px-6 text-white">
            <h1 className="text-2xl font-bold">{Tittle}</h1>
            <p className="text-sm ">{location}</p>
          </div>
        </div>
        <div className="mt-5  space-y-2">
          <h1 className="text-lg text-slate-800 font-bold">Address</h1>
          <p className="max-w-xs text-sm text-gray-500 leading-6">
            {FullAddress}
          </p>
        </div>
        {/* <div className="border-[1px] mt-6 border-gray-100"></div> */}
        <div className="mt-5 flex justify-between w-full ">
          <div className="space-y-3.5 text-">
            <h1 className="text-lg font-bold  text-slate-800">DATE</h1>
            <p className="text-sm text-slate-500 font-semibold">{Date}</p>
          </div>
          <div className="space-y-3.5 text-center">
            <h1 className="text-lg font-bold text-slate-800">TIMING</h1>
            <p className="text-sm text-slate-500 font-semibold">{Time}</p>
          </div>
        </div>
        <div className=" text-center py-8 ">
          <WeatherTable
            temp={data?.main?.temp.toString()}
            sky={data?.weather?.[0]?.description}
            humidity={data?.main?.humidity.toString()}
            visibility={data?.visibility?.toString()}
          />
        </div>
        <div className=" py-6 text-left w-full">
          <h1 className="text-lg font-bold text-slate-800">Things to do:</h1>
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
    </>
  );
}
