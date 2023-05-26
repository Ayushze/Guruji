import logo from "./logo.svg";
import "./App.css";
import Carousal from "./components/Carousal";
import NavbarPage from "./components/NavbarPage";
import Ad from "./components/Ad";
import Carousel2 from "./components/Carousel2";
import Footer from "./components/Footer";

//I din't have asrtrology related API website. That's why i used the newsApi website instead. Hope you understand!

function App() {
  return (
    <>
      <div>
        <NavbarPage />
        <Carousal />
        <Ad />
        <Carousel2 />
        <Footer />
      </div>
    </>
  );
}

export default App;
