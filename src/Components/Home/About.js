import React from "react";
import Grid from "@material-ui/core/Grid";

export default function About() {
  return (
    <>
      <Grid container id="home_about">
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h2>At OOMA Kitchen</h2>
          <p>we are re-imagining how food is made</p>
          <p>and delivered</p> <p>to you.</p>
          <section>
            <ul>
              <li>Cutting edge Technology</li>
              <li>Quality food</li>
              <li>Unmatched customer experience</li>
            </ul>
          </section>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img
            src="https://post.healthline.com/wp-content/uploads/2020/08/tips-to-stop-mindless-eating-1200x628-facebook-1200x628.jpg"
            alt="Eating"
          />
        </Grid>
      </Grid>
    </>
  );
}
