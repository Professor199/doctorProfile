import React from "react";
// import "semantic-ui-css/semantic.min.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Stickers from "./Components/Stickers";
import FAQs from "./Components/FAQs";
import Footer from "./Components/Footer";
import "./App.scss";
import { Suspense, lazy } from "react";
import { Loader } from 'semantic-ui-react'

const Fotoroma = lazy(() => import("./Components/Fotoroma"));
const Testimonials = lazy(() => import("./Components/Testimonials"));

const App = () => {
  return (
    <div className="maincontainer">
      <Header />
      <Navbar />
      <Suspense fallback={<div><Loader active inline='centered' /></div>}>
        <Fotoroma />
        <br />
        <br />
        <br />
        <br />
        <Testimonials />
      </Suspense>
      <br />
      <br />
      <br />
      <br />
      <Stickers />
      {/* <FAQs/>
     <Footer/> */}
    </div>
  );
};

export default App;
