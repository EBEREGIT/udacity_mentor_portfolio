import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";

export default function NewsLetter() {
  return (
    <>
      <Grid container id="newsletter">
        <Grid item xs={12} sm={12} md={6} lg={6} id="newsletter_img">
          <img
            src="https://themiraclemovement.org/wp-content/uploads/2020/11/Contact-Us_Hero-Image-1-1280x640-1.jpg"
            alt="newsletter"
          />
        </Grid>

        {/* form */}
        <Grid item xs={12} sm={12} md={6} lg={6} id="newsletter_form">
          <h2>Get in Touch</h2>

          <p>samsoneberenjoku@gmail.com</p>

          <form>
            <TextField
              label="Enter e-mail address"
              variant="outlined"
              fullWidth
            />

            <TextField
              label="Enter mobile number"
              variant="outlined"
              fullWidth
            />

            <TextField label="Enter Message" variant="outlined" fullWidth />

            <Button className="btn_green">Submit</Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
