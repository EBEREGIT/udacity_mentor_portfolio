import React from "react";
import { Grid } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

export default function Footer() {
  return (
    <>
      <Grid container id="footer">
        {/* social_media */}
        <Grid item xs={12} sm={12} md={6} lg={6} id="social_media">
          <ButtonGroup>
            <Button>
              <FacebookIcon />
            </Button>
            <Button>
              <TwitterIcon />
            </Button>
            <Button>
              <InstagramIcon />
            </Button>
          </ButtonGroup>
        </Grid>

        {/* copy_right */}
        <Grid item xs={12} sm={12} md={6} lg={6} id="copy_right">
          © 2021 ooma. All Rights reserved.
        </Grid>
      </Grid>
    </>
  );
}
