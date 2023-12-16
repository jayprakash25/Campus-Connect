import { Route, Routes } from "react-router-dom";
import "./App.css";
import Signin from "./Pages/Signin";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import Events from "./Pages/Events";
import FullEventPage from "./Pages/FullEventPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/sign-up" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/eventpage" element={<FullEventPage />} />
      </Routes>
    </>
  );
}

export default App;
