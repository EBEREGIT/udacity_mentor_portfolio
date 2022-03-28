import React, { useContext } from "react";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import MenuIcon from "@material-ui/icons/Menu";
import { HelperContext } from "../../../Context/Helper";

export default function NavMobile(props) {
  const [state, setState] = React.useState(false);
  const { scrolled } = useContext(HelperContext);

  const toggleDrawer = (update) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState(update);
  };

  return (
    <div id="nav_drawer">
      {/* drawer trigger */}
      <Button onClick={toggleDrawer(true)}>
        <MenuIcon
          style={{ color: scrolled ? "black" : "white", fontSize: "50" }}
        />
      </Button>

      {/* drawer body */}
      <Drawer anchor={"right"} open={state} onClose={toggleDrawer(false)}>
        <section id="mobile_nav">
          <p>
            <a href="/">Meal plans</a>
          </p>
          <p>
            <a href="/">Our meals</a>
          </p>
          <p>
            <a href="/">Contact us</a>
          </p>
        </section>
      </Drawer>
    </div>
  );
}
