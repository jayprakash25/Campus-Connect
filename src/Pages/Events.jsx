import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Navbar from "../Components/Navbar";

export default function Events() {
  const data = [
    {
      image:
        "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "The Lalit",
      location: "Hyderabad Kompally ",
      Address: "SNR Gardens Kompally",
      Date: "31 Dec 2023",
      Time: "6:30pm - 12:30am",
      FullAddress: "Hyderabad Kompally SNR Garden beside sri Chaithyna School",
    },
    {
      image:
        "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "The Lalit",
      location: "Hyderabad Kompally ",
      Address: "SNR Gardens Kompally",
      Date: "31 Dec 2023",
      Time: "6:30pm - 12:30am",
      FullAddress: "Hyderabad Kompally SNR Garden beside sri Chaithyna School",
    },
    {
      image:
        "https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=600",
      Tittle: "The Lalit",
      location: "Hyderabad Kompally ",
      Address: "SNR Gardens Kompally",
      Date: "31 Dec 2023",
      Time: "6:30pm - 12:30am",
      FullAddress: "Hyderabad Kompally SNR Garden beside sri Chaithyna School",
    },
  ];

  return (
    <main>
      {/* <div className="w-full text-left pb-4">
        <Link to="/home">
          <ArrowBackIcon />
        </Link>
      </div> */}
      <div className="p-7 px-5">
        <h1 className="text-3xl font-semibold">Events</h1>
      </div>
      {/* events */}
      <div className="px-5 grid justify-center   items-center gap-7 my-5">
        {data.map((item, i) => {
          return (
            <React.Fragment key={i}>
              <Link
                to={"/eventpage"}
                state={{
                  image: `${item.image}`,
                  Tittle: `${item.Tittle}`,
                  location: `${item.location}`,
                  Address: `${item.Address}`,
                  Date: `${item.Date}`,
                  Time: `${item.Time}`,
                  FullAddress: `${item.FullAddress}`,
                }}
              >
                <div className="shadow-sm shadow-gray-200 space-y-4 cursor-pointer">
                  <div className="relative space-y-4">
                    <img
                      src={item.image}
                      className={`w-[20rem] object-cover blur-[1px]  rounded-lg  brightness-50
                       ease-in-out duration-500`}
                      alt={item.image}
                    />
                    <div
                      className={` p-5  absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full border-gray-200 grid grid-cols-2 place-content-between items-center`}
                    >
                      <div className="space-y-3 font-poppins">
                        <h1 className="text-2xl font-semibold  text-white">
                          {item.Tittle}
                        </h1>
                        <p className="text-white font-semibold text-sm">
                          {item.location}
                        </p>
                      </div>
                      <div className="space-y-3 text-sm text-white text-right font-semibold">
                        <h1 className="text-sm">{item.Date}</h1>
                        <h1 className="text-sm">{item.Address}</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          );
        })}
      </div>
      <Navbar />
    </main>
  );
}
