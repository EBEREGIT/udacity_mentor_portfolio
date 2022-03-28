import React from "react";
import Cards from "../Components/HomeV2/Cards";
import FamilyMP from "../Components/HomeV2/FamilyMP";
import GetApp from "../Components/HomeV2/GetApp";
import HeroAndNav from "../Components/HomeV2/HeroAndNav";

export default function HomeV2() {
  return (
    <div>
      <HeroAndNav />
      <FamilyMP />
      <GetApp />
      <Cards />
    </div>
  );
}
