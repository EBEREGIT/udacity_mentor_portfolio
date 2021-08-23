import React from "react";
import { Grid } from "@material-ui/core";

export default function PageNotFound() {
  return (
    <>
      <Grid container id="page_not_found">
        <Grid item xs={12} sm={12} md={7} lg={7} id="pnf_img">
          <a href="/">
            <img
              src="https://91b6be3bd2294a24b7b5-da4c182123f5956a3d22aa43eb816232.ssl.cf1.rackcdn.com/contentItem-10034053-91216985-8uv9n4p2h4zqj-or.jpg"
              alt="Page Not Found"
            />
          </a>
        </Grid>

        <Grid item xs={12} sm={12} md={5} lg={5} id="pnf_text">
          <h2>Finally someone got lost!</h2>
          <p>
            We are here to take you <a href="/">home</a>
          </p>
          Just Click Us
        </Grid>
      </Grid>
    </>
  );
}
