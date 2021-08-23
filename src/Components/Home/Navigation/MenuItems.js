import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function MenuItems() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component="a" href="/#home_about">About</MenuItem>
        <MenuItem component="a" href="/#different">Difference</MenuItem>
        <MenuItem component="a" href="/#quiz">Take Quiz</MenuItem>
        <MenuItem component="a" href="/#home_gallery">Gallery</MenuItem>
        <MenuItem component="a" href="/#get_app">Get App</MenuItem>
        <MenuItem component="a" href="/#video">Take Tour</MenuItem>
        <MenuItem component="a" href="/#newsletter">Subscribe</MenuItem>
      </Menu>
    </div>
  );
}
