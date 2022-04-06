import { Hidden } from "@material-ui/core";
import React, { useContext } from "react";
import { HelperContext } from "../../../Context/Helper";
import NavMobile from "./NavMobile";

export default function NavV2() {
  const { scrolled } = useContext(HelperContext);

  return (
    <>
      <section id="nav" className={scrolled ? "nav_scroll" : ""}>
        <a href="/">
          <img
            src={
              "https://www.investopedia.com/thmb/NRuWnsAjUre5v7C4MgIbb9hef-Y=/2121x1414/filters:fill(auto,1)/PortfolioAnalysisforBeginners-5a011cc7ec2f64003784666f.jpg"
            }
            alt="site identity"
          />
        </a>

        <aside>
          <Hidden smDown>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/portfolio">Portfolio</a>
            <a href="/contact">Contact</a>
            <a href="/resume">Resume</a>
          </Hidden>

          <Hidden mdUp>
            <NavMobile />
          </Hidden>
        </aside>
      </section>
    </>
  );
}
