import Cards from "../Components/Cards";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";
import Snowfall from "react-snowfall";

export default function Home() {
  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          background: "#282c34",
          position: "relative",
        }}
      >
        <Snowfall />
        <Header />
        <Cards />
        <Navbar />
      </div>
    </div>
  );
}
