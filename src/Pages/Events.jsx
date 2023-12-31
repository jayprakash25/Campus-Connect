import { useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { hack, car, event } from "../assets/events";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";

const EventItem = ({
  image,
  Tittle,
  location,
  Address,
  Date,
  Time,
  FullAddress,
  Lat,
  Long,
}) => {
  return (
    <Link
      to={"/eventpage"}
      state={{
        image,
        Tittle,
        location,
        Address,
        Date,
        Time,
        FullAddress,
        Lat,
        Long,
      }}
    >
      <div
        data-aos="zoom-in"
        data-aos-duration="700"
        className="shadow-sm shadow-gray-200 space-y-4 cursor-pointer"
      >
        <div className="relative space-y-4">
          <img
            src={image}
            className={`w-[20rem] lg:w-[30rem] object-cover blur-[1px] rounded-lg brightness-50 ease-in-out duration-500`}
            alt={image}
          />
          <div
            className={` p-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full border-gray-200 grid grid-cols-2 place-content-between items-center`}
          >
            <div className="space-y-3 font-poppins">
              <h1 className="text-2xl font-semibold text-white">{Tittle}</h1>
              <p className="text-white font-semibold text-sm">{location}</p>
            </div>
            <div className="space-y-3 text-sm text-white text-right font-semibold">
              <h1 className="text-sm">{Date}</h1>
              <h1 className="text-sm">{Address}</h1>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

// Prop types for EventItem
EventItem.propTypes = {
  image: PropTypes.string.isRequired,
  Tittle: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  Address: PropTypes.string.isRequired,
  Date: PropTypes.string.isRequired,
  Time: PropTypes.string.isRequired,
  FullAddress: PropTypes.string.isRequired,
  Lat: PropTypes.string.isRequired,
  Long: PropTypes.string.isRequired,
};

const Events = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  const data = [
    {
      image: hack,
      Tittle: "Hack The Verse",
      location: "CMRTC, Kandlakoya ",
      Address: "CMRTC, Kandlakoya",
      Date: "21 Dec 2023",
      Time: "6:30pm - 12:30am",
      Lat: "17.5971",
      Long: "78.4865",
      FullAddress:
        " Kandlakoya Village, Medchal Rd,, Hyderabad, Telangana 501401",
    },
    {
      image: car,
      Tittle: "Cars",
      location: "Hitech-City ",
      Address: "Hitech-City, Hyderabad",
      Date: "1 Jan 2024",
      Time: "6:30pm - 12:30am",
      Lat: "17.4435",
      Long: "78.3772",
      FullAddress: "Hitech-City, 500081",
    },
    {
      image: event,
      Tittle: "The Lalit",
      location: "Hyderabad Kompally ",
      Address: "SNR Gardens Kompally",
      Date: "31 Dec 2023",
      Time: "6:30pm - 12:30am",
      Lat: "17.5366",
      Long: "78.4845",
      FullAddress: "Hyderabad Kompally SNR Garden beside sri Chaithyna School",
    },
  ];

  return (
    <main>
      <div className="p-7 px-5 lg:px-24 bg-[#0766AD]">
        <h1 className="text-2xl font-semibold text-white font-poppins">
          Events
        </h1>
      </div>
      {/* events */}
      <div className="px-5 lg:px-24 grid justify-center lg:grid lg:grid-cols-3  items-center gap-7 my-5 lg:my-10 lg:place-items-center">
        {data.map((item, i) => (
          <EventItem key={i} {...item} />
        ))}
      </div>
      <div className="mt-16">
        <Navbar />
      </div>
    </main>
  );
};

export default Events;
