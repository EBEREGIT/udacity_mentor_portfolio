import React from "react";
import Hero from "./HeroAndNav/Hero";
import NavV2 from "./HeroAndNav/NavV2";

export default function HeroAndNav() {
  return (
    <>
      <section id="hero_nav">
        <NavV2 />
        <Hero />
      </section>
    </>
  );
}
