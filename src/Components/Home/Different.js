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
          src="https://res.cloudinary.com/byterestaurant/image/upload/v1636637815/ooma%20web/1_5_ylshts.png"
          heading="Meal plan customization"
          body="Select and schedule meals of choice, for yourself and others."
        />

        <EachDifferent
          src="https://res.cloudinary.com/byterestaurant/image/upload/v1636638397/ooma%20web/1_6_sjnxcb.png"
          heading="Super Convenience"
          body="Enjoy the taste of a fresh-home-cooked meal delivered to you, how you want it, where you want it and when you want it."
        />

        <EachDifferent
          src="https://res.cloudinary.com/byterestaurant/image/upload/v1636638343/ooma%20web/1_7_qoqubi.png"
          heading="Safe and hygenic food"
          body="Enjoy hygenic food that provides the essential nourishment for healthy living."
        />
      </Grid>
    </>
  );
}
