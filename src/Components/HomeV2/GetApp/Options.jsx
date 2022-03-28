import { Grid } from "@material-ui/core";
import React from "react";
import { Content } from "../FamilyMP";

export default function Options() {
  return (
    <>
      <Grid container id="get_app_options">
        <Content
          src={
            "https://res.cloudinary.com/dsepncuj8/image/upload/v1648391668/Figma%20Wbsite%20Images/Super_convinient_qutgst.png"
          }
          heading={"Super convinient"}
        />

        <Content
          src={
            "https://res.cloudinary.com/dsepncuj8/image/upload/v1648391657/Figma%20Wbsite%20Images/Manage_your_plans_kxvivr.png"
          }
          heading={"Manage your plans"}
        />
        <Content
          src={
            "https://res.cloudinary.com/dsepncuj8/image/upload/v1648391665/Figma%20Wbsite%20Images/Fast_Delivery_ycpgak.png"
          }
          heading={"Fast Delivery"}
        />
      </Grid>
    </>
  );
}
