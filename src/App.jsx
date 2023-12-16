import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./Pages/Signin";
import Login from "./Pages/Login";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signin />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
