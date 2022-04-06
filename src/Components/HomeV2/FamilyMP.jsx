import { Grid } from "@material-ui/core";
import React from "react";

export default function FamilyMP() {
  return (
    <>
      <Grid container id="family_mp">
        <Grid item xs={12} sm={12} md={12} lg={12} id="family_mp_top">
          <img
            src="https://www.smartserve.co/wp-content/uploads/2018/03/portfolio-stock.jpg"
            alt="portfolio"
          />
          <h1>Portfolio</h1>
          <h2>Checkout some of my works...</h2>
        </Grid>

        <Content
          src={
            "https://res.cloudinary.com/dunksyqjj/image/upload/v1597094132/LogoMakr_6cGYpQ_h58asa.png"
          }
          heading={"Ideas Repository"}
          text1={"Recruiters Share ideas "}
          text2={"Junior Techies Build ideas"}
          text3={"Everyone is satisfied"}
          link={"https://ideas-repo.netlify.app/"}
        />

        <Content
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJBLYKssbS6gDB5QltcECfLwYG3k1rM31wPw&usqp=CAU"
          }
          heading={"Covid-19 Tracker"}
          text1={"Learn About the virus "}
          text2={"Get the right numbers every 15 minutes  "}
          text3={"Get the most trending news about it"}
          link={"https://covid19-stat.netlify.app/"}
        />
      </Grid>
    </>
  );
}

export function Content({ src, heading, text1, text2, text3, link }) {
  return (
    <Grid item xs={12} sm={12} md={6} lg={6} id="family_mp_content">
      <section>
        <img src={src} alt={heading} />

        <aside>
          <h3>{heading}</h3>
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
          <p>
            <a href={link}>See More Here...</a>
          </p>
        </aside>
      </section>
    </Grid>
  );
}
