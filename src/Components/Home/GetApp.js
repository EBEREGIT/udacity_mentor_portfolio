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
            src="https://images.anandtech.com/doci/9770/X-T30_DSF5320_678x452.jpg"
            alt="phones"
          />
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5} id="get_app_text">
          <Hidden smDown>
            <h2>Yes! There’s more.</h2>
          </Hidden>

          <GetAppList />

          <Button className="btn_green">Get The App</Button>
        </Grid>
      </Grid>
    </>
  );
}
