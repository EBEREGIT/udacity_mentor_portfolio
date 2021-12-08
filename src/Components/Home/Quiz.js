import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button, Hidden } from "@material-ui/core";

export default function Quiz() {
  return (
    <>
      <Grid container id="quiz">
        <Grid item xs={12} sm={12} md={5} lg={5} id="quiz_text">
          <h2>
            Eat Right, Live Healthy. Get a personalized <span>Meal plan</span>{" "}
            that fits your <span>Lifestyle</span>{" "}
          </h2>

          <Hidden smDown>
            <Button
              href="https://play.google.com/store/apps/details?id=com.oma1"
              className="btn_green"
            >
              Get The App
            </Button>
          </Hidden>
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={7} id="quiz_image">
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1637061275/OOMA%20KITCHEN/ACHIEVE_A_HEALTHIER_LIFESTYLE_pbubdo.jpg"
            alt="Best Soup from Nigeria"
          />

          <Hidden mdUp>
            <Button
              href="https://play.google.com/store/apps/details?id=com.oma1"
              className="btn_green"
            >
              Get The App
            </Button>
          </Hidden>
        </Grid>
      </Grid>
    </>
  );
}
