import React from "react";
import About from "../Components/Home/About";
import Different from "../Components/Home/Different";
import Footer from "../Components/Home/Footer";
import GetApp from "../Components/Home/GetApp";
import HeroSlider from "../Components/Home/HeroSlider";
import Navigation from "../Components/Home/Navigation";
import NewsLetter from "../Components/Home/NewsLetter";
import Quiz from "../Components/Home/Quiz";
import Video from "../Components/Home/Video";

export default function Home() {
  return (
    <div>
      <Navigation />
      <HeroSlider />
      <About />
      <Different />
      <Quiz />
      <GetApp />
      <Video />
      <NewsLetter />
      <Footer />
    </div>
  );
}
