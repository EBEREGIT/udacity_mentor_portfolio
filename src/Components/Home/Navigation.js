import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import MenuItems from "./Navigation/MenuItems";

export default function Navigation() {
  return (
    <>
      <AppBar position="static" id="navigation">
        <Toolbar>
          {/* logo */}
          <h1>OOMA</h1>

          {/* nav */}
          <section>
            <Button>HELP</Button>
            <MenuItems />
          </section>
        </Toolbar>
      </AppBar>
    </>
  );
}
