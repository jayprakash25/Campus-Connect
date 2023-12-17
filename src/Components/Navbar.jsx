import { PiHouse } from "react-icons/pi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

import EventAvailableIcon from "@mui/icons-material/EventAvailable";

export default function Navbar() {
  const liststyle = "flex flex-col items-center gap-1 cursor-pointer";

  return (
    <footer className="fixed bottom-0 pb-5 px-5  w-full flex items-center justify-center">
      <div className="w-[70vw] lg:w-[30vw] bg-[#0766AD] rounded-full">
        <ul className="flex items-center  p-3.5 px-2 py-2 text-sm font-semibold text-center text-white justify-evenly">
          <Link to={"/home"}>
            <div className="p-1 rounded-full bg-[#1a2b34] ">
              <li className={liststyle}>
                <PiHouse size={25} color="white" />
              </li>
            </div>
          </Link>
          <Link to={"/events"}>
            <div className="p-1 rounded-full bg-[#1a2b34] ">
              <li className={liststyle}>
                <EventAvailableIcon size={25} color="white" />
              </li>
            </div>
          </Link>

          <Link to={"/user-profile"}>
            <div className="p-1 rounded-full bg-[#1a2b34] ">
              <li className={liststyle}>
                <CgProfile size={25} color="white" />
              </li>
            </div>
          </Link>
        </ul>
      </div>
    </footer>
  );
}
