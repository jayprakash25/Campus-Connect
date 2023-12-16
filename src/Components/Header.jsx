import { doc, getDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState("");
  const jwt = window.localStorage.getItem("jwt");
  const fetchData = async () => {
    try {
      const docref = doc(db, "Users", jwt);
      const username = await getDoc(docref);
      setUser(username.data());
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div className="bg-[#4CB9E7] text-white font-poppins pt-16 px-5">
      <p>Hi {user.username},</p>
      <p className="text-xl font-bold">Discover Events</p>
    </div>
  );
}
