import Header from "./components/Header";
import './globals.css';
import About from "./components/About";
import Services from "./components/Services";
import MyWork from "./components/MyWork";
import Testimonals from "./components/Testimonals";
import GetInTouch from "./components/GetInTouch";
import HomePage from "./components/Home";
import '@fortawesome/fontawesome-free/css/all.min.css';




export default function Home() {

  return (
    <>
      <Header />
      <HomePage />
      <About />
      <Services />
      <MyWork />
      <Testimonals />
      <GetInTouch />
    </>
  );
}
