import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useEffect, useState } from "react";
import loader from "../assets/loader.gif";

export default function Header() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const jwt = window.localStorage.getItem("jwt");
  const fetchData = async () => {
    setLoading(true);
    try {
      const docref = doc(db, "Users", jwt);
      const username = await getDoc(docref);
      setUser(username.data());
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {loading ? (
        // Display the loading spinner or GIF while content is loading
        <div className="flex  items-center justify-center h-screen">
          <img className="w-20" src={loader} alt="Loading" />
        </div>
      ) : (
        <div className="bg-[#4CB9E7] text-white space-y-2 font-poppins pt-16 pb-10 px-5">
          <p className="text-2xl">Hi {user.username},</p>
          <p className="text-lg font-semibold">
            Discover upcoming events and check the weather on event days.
          </p>
          {/* <button className="text-black bg-white rounded-full px-4 py-2 font-poppins text-sm mt-5">
            Get Started
          </button> */}
        </div>
      )}
    </>
  );
}
