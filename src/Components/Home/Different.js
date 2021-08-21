import React from "react";
import Grid from "@material-ui/core/Grid";
import EachDifferent from "./Different/EachDifferent";

export default function Different() {
  return (
    <>
      <Grid container id="different">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h2>What</h2>
          <h2>makes us different?</h2>
        </Grid>
        <EachDifferent
          heading="Meal plan customization"
          body="Select and schedule meals of choice, for yourself and others."
        />

        <EachDifferent
          heading="Nutrition and health goal settings"
          body="Achieve more, have your desired body and improved nourishment."
        />

        <EachDifferent
          heading="Professional Health service"
          body="Talk to a registered Dietitian and get a personalized meal plan, based on your unique needs."
        />

        <EachDifferent
          heading="Safe and hygenic food"
          body="Enjoy hygenic food that provides the essential nourishment for healthy living."
        />
      </Grid>
    </>
  );
}
