import React from "react";
import Grid from "@material-ui/core/Grid";

export default function EachDifferent(props) {
  return (
    <>
      <Grid item xs={12} sm={6} md={6} lg={3} className="each_different">
        <div>
          <img
            alt={props.heading}
            src={props.src}
          />
        </div>

        <h4>{props.heading}</h4>
        <p>{props.body}</p>
      </Grid>
    </>
  );
}
