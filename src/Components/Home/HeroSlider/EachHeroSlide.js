import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

export default function EachHeroSlide(props) {
  return (
    <div className="each-slide" id="first-hero-slider">
      {/* hero-text-image */}
      <img src={props.desktopImage} alt={props.alt} />

      {/* hero-text */}
      <div
        id="content"
        data-aos="fade-right"
        data-aos-offset="300"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        {/* hero-text */}
        <Grid container id="content_text">
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <h1>Live Healthier</h1>
            <p>Get a personalized meal plan,</p>{" "}
            <p>with unique recipes that fits your</p>
            <p>lifestyle.</p>
            {/* call to action button */}
            {/* <Button>TAKE A QUIZ</Button> */}
            <Button
              href="https://play.google.com/store/apps/details?id=com.oma1"
              className="btn_green"
            >
              Get The App
            </Button>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
