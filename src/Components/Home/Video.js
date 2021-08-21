import React from "react";
import { Grid } from "@material-ui/core";

export default function Video() {
  return (
    <>
      <Grid container id="video">
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <iframe
            width="100%"
            height="650px"
            src="https://www.youtube.com/embed/bV2sg6mmSH8"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </Grid>
      </Grid>
    </>
  );
}
