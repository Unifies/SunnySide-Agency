import React from "react";
import NavBar from "./components/Navbar/NavBar";
import BackgroundImage from "./components/Navbar/BackgroundImage";
import Hero from "./components/Hero/Hero";
import Banner1 from "./components/Banners/Banner1";
import Banner2 from "./components/Banners/Banner2";
import Banner3 from "./components/Banners/Banner3";
import Testimonials from "./components/Testimonial/Testimonials";
import FooterBanner from "./components/Footer/FooterBanner";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <>
      <main>
        <BackgroundImage>
          <NavBar />
          <Hero />
        </BackgroundImage>
        <Banner1 />
        <Banner2 />
        <Banner3 />
        <Testimonials />
        <FooterBanner />
        <Footer />
      </main>
    </>
  );
};

export default App;
