import React, { useState } from "react";
// import "semantic-ui-css/semantic.min.css";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Stickers from "./Components/Stickers";
import FAQs from "./Components/FAQs";
import Footer from "./Components/Footer";
import "./App.scss";
import { Suspense, lazy } from "react";
import { Loader } from 'semantic-ui-react'
import ContactModal from "./Components/ContactModal";

const Fotoroma = lazy(() => import("./Components/Fotoroma"));
const Testimonials = lazy(() => import("./Components/Testimonials"));

const App = () => {
  const [openModal,setOpenModal]=useState(false)
  return (
    <div className="maincontainer">
      <Header />
      <Navbar setOpenModal={(x)=>setOpenModal(x)} />
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
       <br />
      <br />
      <br />
      <br />
     <FAQs/>
      <br />
      <br />
      <br />
      <br />
     <Footer/> 
     <ContactModal openModal={openModal} setOpenModal={(x)=>setOpenModal(x)}/>
    </div>
  );
};

export default App;
