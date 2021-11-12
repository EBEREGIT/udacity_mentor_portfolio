import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Hidden } from "@material-ui/core";

export default function Quiz() {
  return (
    <>
      <Grid container id="quiz">
        <Grid item xs={12} sm={12} md={5} lg={5} id="quiz_text">
          <h2>Achieve a healthier </h2>
          <h2>lifestyle. Get a </h2>
          <h2>
            personalized <span>Meal</span>{" "}
          </h2>
          <h2>
            and <span>Exercise</span> plan{" "}
          </h2>
          <h2>now.</h2>

          <Hidden smDown>
            <Button className="btn_green">Take a Quiz</Button>
          </Hidden>
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={7} id="quiz_image">
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1636654062/OOMA%20KITCHEN/Achieve_a_Healthier_Lifestyle_2_q3ko03.jpg"
            alt="Best Soup from Nigeria"
          />

          
        <Hidden mdUp>
          <Button className="btn_green">Take a Quiz</Button>
        </Hidden>
        </Grid>

      </Grid>
    </>
  );
}
