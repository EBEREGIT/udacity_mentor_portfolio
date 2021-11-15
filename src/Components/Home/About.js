import React from "react";
import Grid from "@material-ui/core/Grid";

export default function About() {
  return (
    <>
      <Grid container id="home_about">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h2>OOMA Kitchen</h2>
          <p>is your digital personal and family chef. We make varieties of</p>
          <p>Healthy-good-for-you-foods.</p>

          <h3>We're reimagining how food is made & delivered to you.</h3>
          <section>
            <ul>
              <li>Cutting Edge Technology</li>
              <li>Quality and Healthy Foods</li>
              <li>Diverse Categories of Meals</li>
              <li>Super Convenience</li>
            </ul>
          </section>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1636653422/OOMA%20KITCHEN/At_OOMA_Kitchen_lpipor.jpg"
            alt="Slicing Vegetables By the kitchen staff"
          />
        </Grid>
      </Grid>
    </>
  );
}
