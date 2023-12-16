import axios from "axios";
import Button from "../Components/Button";
import { useState } from "react";

export default function Signin() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const submit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/", {
        user,
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="px-5">
      <div className="flex flex-col justify-center h-screen w-full">
        <div className="flex flex-col items-center px-2 py-5 space-y-4 text-2xl font-semibold">
          <p className="text-center">
            As a <span className="text-slate-500">user</span>, I am entering my
          </p>
          <form className="space-y-4">
            <input
              type="text"
              className=" outline-none text-lg w-full py-2.5 border border-b-2 px-5"
              placeholder="Username"
              value={user.username}
              onChange={(e) => {
                setUser({
                  ...user,
                  username: e.target.value,
                });
              }}
            />
            <input
              type="email"
              className=" outline-none text-lg w-full py-2.5 border border-b-2 px-5"
              placeholder="Email"
              value={user.email}
              onChange={(e) => {
                setUser({
                  ...user,
                  email: e.target.value,
                });
              }}
            />
            <input
              type="password"
              className="outline-none w-full py-2.5 text-lg bg-slate-100 px-5"
              placeholder="Password"
              value={user.password}
              onChange={(e) => {
                setUser({
                  ...user,
                  password: e.target.value,
                });
              }}
            />
          </form>
        </div>

        <div className="px-2 py-5 space-y-6">
          <Button handleSubmit={submit} title="Sign-Up" />
        </div>
      </div>
    </div>
  );
}
