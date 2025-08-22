import React from "react";
import "semantic-ui-css/semantic.min.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Products from "./Components/Products";
import Testimonials from "./Components/Testimonials";
import Stickers from "./Components/Stickers";
import FAQs from "./Components/FAQs";
import Footer from "./Components/Footer";
import "./App.scss";
import Fotoroma from "./Components/Fotoroma";

const App = () => {
  return (
    <div className="maincontainer">
      <Header />
      <Navbar />
      <Fotoroma/>
      <Products/>
     {/* <Testimonials/>
     <Stickers/>
     <FAQs/>
     <Footer/> */}
    </div>
  );
};

export default App;
