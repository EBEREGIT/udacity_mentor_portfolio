import { Grid } from "@material-ui/core";
import React from "react";
import Contact from "./Footer/Contact";
import Resources from "./Footer/Resources";

export default function Footer() {
  return (
    <>
      <Grid container id="footer_v2">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Resources />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6} id="contact">
          <Contact />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} id="lower_footer">
          <h3>Proudly powered by</h3>
          <h1>Njoku Samson Ebere</h1>
        </Grid>
      </Grid>
    </>
  );
}
