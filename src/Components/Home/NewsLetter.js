import React from "react";
import { Button, Grid, TextField } from "@material-ui/core";

export default function NewsLetter() {
  return (
    <>
      <Grid container id="newsletter">
        <Grid item xs={12} sm={12} md={6} lg={6} id="newsletter_img">
          <img
            src="https://higherlogicdownload.s3.amazonaws.com/NACE/cedda8a4-c3c0-4583-b1b6-3b248e6eb1f2/UploadedImages/Resources/newsletters/email-newsletter.png"
            alt="newsletter"
          />
        </Grid>

        {/* form */}
        <Grid item xs={12} sm={12} md={6} lg={6} id="newsletter_form">
          <h2>Subscribe to our Newsletter!</h2>

          <p>Be the first to know about our latest recipes, updates and </p>

          <p> meal plans. Subscribe to our newsletter, to stay in</p>

          <p>the loop.</p>

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

            <Button className="btn_green">Subscribe</Button>
          </form>
        </Grid>
      </Grid>
    </>
  );
}
