import React from "react";
import { Grid, Button, Hidden } from "@material-ui/core";
import GetAppList from "./GetApp/GetAppList";

export default function GetApp() {
  return (
    <>
      <Grid container id="get_app">
        <Grid item xs={12} sm={12} md={7} lg={7} id="get_app_image">
          <Hidden mdUp>
            <h2>Yes! There’s more.</h2>
          </Hidden>

          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1636653422/OOMA%20KITCHEN/App_Web_ibyaiq.png"
            alt="Get The App"
          />
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5} id="get_app_text">
          <Hidden smDown>
            <h2>Yes! There’s more.</h2>
          </Hidden>

          <GetAppList />

          <Button
            href="https://play.google.com/store/apps/details?id=com.oma1"
            className="btn_green"
          >
            Get The App
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
