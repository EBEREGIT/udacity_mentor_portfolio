import { Grid } from "@material-ui/core";
import React from "react";
import Healthy from "./Cards/Healthy";
import Ingredients from "./Cards/Ingredients";
import Kitchen from "./Cards/Kitchen";

export default function Cards() {
  return (
    <>
      <Grid container id="cards">
        <Healthy />
        <Ingredients />
        <Kitchen />
      </Grid>
    </>
  );
}
