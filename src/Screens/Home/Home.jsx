import React from "react";
import "../Home/home.css";

//Home Components
import Hero from "./components/hero/Hero";
import BsNav from "./components/nav/Nav";
import Beranda from "./components/beranda/Beranda";
import Produk from "./components/produk/Produk";
import Why from "./components/why/Why";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <BsNav />
      <Beranda />
      <Produk />
      <Why />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
