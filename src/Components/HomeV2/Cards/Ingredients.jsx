import { Grid } from "@material-ui/core";
import React from "react";

export default function Ingredients() {
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} id="ingredients">
      <section>
        <h3>Ingredients are </h3>
        <h3>gotten from </h3>
        <h3>trusted sources &</h3>
        <h3>prepared fresh.</h3>

        <img
          src="https://res.cloudinary.com/dsepncuj8/image/upload/v1648193105/Figma%20Wbsite%20Images/Foods_are_Gotten_from_Trusted.._wnaqkb.png"
          alt="Ingredients"
        />
      </section>
    </Grid>
  );
}
