import { Grid } from "@material-ui/core";
import React from "react";
import Contact from "./Footer/Contact";
import Newsletter from "./Footer/Newsletter";
import Resources from "./Footer/Resources";
import TermsOfUse from "./Footer/TermsOfUse";

export default function Footer() {
  return (
    <>
      <Grid container id="footer_v2">
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <Resources />
        </Grid>
        <Grid item xs={12} sm={12} md={2} lg={2}>
          <TermsOfUse />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} id="contact">
          <Contact />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <Newsletter />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} id="lower_footer">
          <h3>Proudly powered by</h3>
          <h1>OOMA TECHNOLOGIES</h1>
        </Grid>
      </Grid>
    </>
  );
}
