import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import { useId, useState } from "react";
import GoogleIcon from "@mui/icons-material/Google";
import { doc, setDoc } from "firebase/firestore";
import { GoogleAuthProvider } from "firebase/auth";

import { auth, db } from "../Firebase";

import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";

export default function Signin() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const UserToken = useId();

  const GoogleSignIn = async () => {
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          // const credential = GoogleAuthProvider.credentialFromResult(result);
          // const token = credential.accessToken;
          // The signed-in user info.
          // const user = result.user;
          // ...
          console.log(result);
        })
        .catch((error) => {
          // Handle Errors here.
          // The email of the user's account used.
          // The AuthCredential type that was used.
          // ...
          console.log(error.message);
        });

      const docRef = doc(db, "Users", UserToken);
      await setDoc(docRef, user);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
      createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          console.log(error);
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
        <div className="flex items-start justify-center space-x-3 text-center text-slate-500">
          <span>--------------</span>
          <h1>OR</h1>
          <span>--------------</span>
        </div>
        <div className="px-2 py-5 space-y-6">
          <Button
            title="Continue with Google"
            logo={<GoogleIcon />}
            handleSubmit={GoogleSignIn}
          />
        </div>
      </div>
    </div>
  );
}
