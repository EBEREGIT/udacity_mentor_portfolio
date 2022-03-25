import { Grid } from "@material-ui/core";
import React from "react";

export default function FamilyMP() {
  return (
    <>
      <Grid container id="family_mp">
        <Grid item xs={12} sm={12} md={12} lg={12} id="family_mp_top">
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1648193105/Figma%20Wbsite%20Images/Foods_are_Gotten_from_Trusted.._wnaqkb.png"
            alt="family MP"
          />
          <h1>Family meal planning</h1>
          <h2>UNMATCHED CUSTOMER EXPERIENCE</h2>
        </Grid>

        <Content />
        <Content />
        <Content />
      </Grid>
    </>
  );
}

function Content(params) {
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} id="family_mp_content">
      <section>
        <img
          src="https://res.cloudinary.com/dsepncuj8/image/upload/v1648193105/Figma%20Wbsite%20Images/Foods_are_Gotten_from_Trusted.._wnaqkb.png"
          alt=""
        />

        <aside>
          <h3>Create a meal plan</h3>
          <p>Our team of professional </p>
          <p>Dietiticians will create a </p>
          <p>plan that suits your lifestyle.</p>
        </aside>
      </section>
    </Grid>
  );
}
