import { Button, Grid } from "@material-ui/core";
import React from "react";
import Options from "./GetApp/Options";

export default function GetApp() {
  return (
    <>
      <Grid container id="get_app_v2">
        <Grid item xs={12} sm={12} md={7} lg={7} id="get_app_content">
          <h3>THE APP IS ALL YOU NEED</h3>

          <section>
            <h1>Over 100 varieties of healthy</h1>
            <h1>meals in your palms.</h1>
          </section>

          <Options />

          <section id="btn">
            <Button
              href="https://play.google.com/store/apps/details?id=com.oma1"
              className="btn_green"
            >
              Get The App
            </Button>
          </section>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5} id="mobile_phone">
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1648193110/Figma%20Wbsite%20Images/Mobile_app_MOCKUP_reqik5.png"
            alt="mobile phone"
          />
        </Grid>
      </Grid>
    </>
  );
}
