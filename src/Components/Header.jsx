import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useEffect, useState } from "react";
import loader from "../assets/loader.gif";

export default function Header() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);

  const jwt = window.localStorage.getItem("jwt");

  useEffect(() => {
    let isMounted = true;

    const fetchData = async () => {
      setLoading(true);

      try {
        const docref = doc(db, "Users", jwt);
        const username = await getDoc(docref);

        if (isMounted) {
          setUser(username.data());
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [jwt]);

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
        </div>
      )}
    </>
  );
}
