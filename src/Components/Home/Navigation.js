import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import MenuItems from "./Navigation/MenuItems";

export default function Navigation() {
  return (
    <>
      <AppBar position="sticky" id="navigation">
        <Toolbar>
          {/* logo */}
          <h1>
            <a href="/">
              <img
                src="https://play-lh.googleusercontent.com/IqrjpOUFUeWIzSDh6CvMz1Ad-jSAri04-M6dftiIqcMSo4jwaSlYwSwUU8lJR3FrIUw=s360-rw"
                alt="ooma logo"
                width="50px"
                height="50px"
              />
            </a>
          </h1>

          {/* nav */}
          <section>
            <Button
              href="https://play.google.com/store/apps/details?id=com.oma1"
              variant="outlined"
            >
              Get The App
            </Button>
            <MenuItems />
          </section>
        </Toolbar>
      </AppBar>
    </>
  );
}
