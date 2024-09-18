import "./App.css";
import Footer from "./Components/Footer/Footer";
import Apply from "./Components/MainPage/Apply";
import Classification from "./Components/MainPage/Classification";
import ContactUs from "./Components/MainPage/ContactUs";
import Dataflow from "./Components/MainPage/Dataflow";
import Hero from "./Components/MainPage/Hero";
import PayPalIntegration from "./Components/MainPage/Paypal";
import Reviews from "./Components/MainPage/Reviews";
import WhyUs from "./Components/MainPage/WhyUs";
import Navbar from "./Components/NavBar/Navbar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import SmoothScroll from "smooth-scroll";
export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
function App() {
  return (
    <>
     
       
     
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/apply/dataflow" element={<Dataflow />} />
          <Route path="/apply/classification" element={<Classification />} />
          <Route path="/apply/dataflow/paypal" element={<PayPalIntegration />} />
        </Routes>
        <Footer />
      </Router>

      {/* <Router>
     
        <Routes>
          <Route path="apply" element={<Apply />} />
          <Route path="/dataflow" element={<Dataflow />} />
          <Route path="/classification" element={<Classification />} />
        </Routes>
      
      </Router> */}
     
     
    </>
  );
}

export default App;
