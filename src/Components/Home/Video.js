import React from "react";
import { Grid } from "@material-ui/core";

export default function Video() {
  return (
    <>
      <Grid container id="video">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1636646371/OOMA%20KITCHEN/WEB_Giv_dhov5s.gif"
            alt="fleet of dishees"
            width="100%"
            height="auto"
          />
        </Grid>
      </Grid>
    </>
  );
}
