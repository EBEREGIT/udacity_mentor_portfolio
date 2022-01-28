import { Grid, Hidden } from "@material-ui/core";
import React from "react";

export default function Maintenance() {
  return (
    <>
      <Grid container id="maintenance">
        {/* text */}
        <Grid item xs={12} sm={12} md={7} lg={7} id="text">
          <h1>We are improving to</h1>
          <h1>serve you better.</h1>

          <section>
            <p>We will be back, up and running again. Please download our</p>
            <p>app to enjoy premuim experience</p>
          </section>

          <Hidden smDown>
            <a href="https://play.google.com/store/apps/details?id=com.oma1">
              <img
                src="https://res.cloudinary.com/dsepncuj8/image/upload/v1643365158/Website%20Maintenance%20Page%20/1_9_vvxizo.png"
                alt="Google Play"
              />
            </a>
          </Hidden>
        </Grid>

        {/* image */}
        <Grid item xs={12} sm={12} md={5} lg={5} id="image">
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1643369944/Website%20Maintenance%20Page%20/2_2_1_i0vm7j.png"
            alt="Google Play"
          />

          <Hidden mdUp>
            <div>
              <a href="https://play.google.com/store/apps/details?id=com.oma1">
                <img
                  src="https://res.cloudinary.com/dsepncuj8/image/upload/v1643373993/Website%20Maintenance%20Page%20/1_9_1_j6xpju.png"
                  alt="Google Play"
                />
              </a>
            </div>
          </Hidden>
        </Grid>
      </Grid>
    </>
  );
}
