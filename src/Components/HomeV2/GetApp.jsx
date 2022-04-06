import { Grid } from "@material-ui/core";
import React from "react";
import Resume from "../../Pages/Resume";

export default function GetApp() {
  return (
    <>
      <Grid container id="get_app_v2">
        <Grid item xs={12} sm={12} md={12} lg={12} id="get_app_content">
          <h1>Get To Know Me</h1>
        </Grid>

        <Grid item xs={12} sm={12} md={7} lg={7} id="get_app_content">
          <h3>
            A Software Engineer with an eye for detail. I derive so much joy
            from sharing knowledge through writing and mentoring. Workout and
            Bodybuilding make up the other part of me.
          </h3>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5} id="mobile_phone">
          <img
            src="https://dev-to-uploads.s3.amazonaws.com/uploads/articles/bps6eh20wrilyxrqntro.png"
            alt="about me"
          />
        </Grid>
      </Grid>

      <Resume />
    </>
  );
}
