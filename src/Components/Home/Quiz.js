import React from "react";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";

export default function Quiz() {
  return (
    <>
      <Grid container id="quiz">
        <Grid item xs={12} sm={12} md={6} lg={5} id="quiz_text">
          <h2>Achieve a healthier </h2>
          <h2>lifestyle. Get a </h2>
          <h2>
            personalized <span>Meal</span>{" "}
          </h2>
          <h2>
            and <span>Exercise</span> plan{" "}
          </h2>
          <h2>now.</h2>

          <Button>Take a Quiz</Button>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={7} id="quiz_image">
          <img
            src="https://pnglux.com/wp-content/uploads/2021/04/1617574435_Laptop-PNG-File-990x594.png"
            alt="laptop"
          />
        </Grid>
      </Grid>
    </>
  );
}
