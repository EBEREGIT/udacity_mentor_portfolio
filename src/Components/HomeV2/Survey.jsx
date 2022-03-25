import { Button, Grid } from "@material-ui/core";
import React from "react";

export default function Survey() {
  return (
    <>
      <Grid container id="survey">
        <Content
          src={
            "https://res.cloudinary.com/dsepncuj8/image/upload/v1648193116/Figma%20Wbsite%20Images/Take_a_Survey_wywgit.png"
          }
          heading={"Take a survey"}
          text1={"Provide us all the vital "}
          text2={"information, to give you"}
          text3={" the best."}
        />

        <Content
          src={
            "https://res.cloudinary.com/dsepncuj8/image/upload/v1648193123/Figma%20Wbsite%20Images/Recieve_your_meals_jgobr4.png"
          }
          heading={"Receive your meals"}
          text1={"Get your choice of meals "}
          text2={"throughout the duration of "}
          text3={"your subscription"}
        />
        <Content
          src={
            "https://res.cloudinary.com/dsepncuj8/image/upload/v1648193142/Figma%20Wbsite%20Images/Enjoy_a6aon6.png"
          }
          heading={"Receive your meals"}
          text1={"Provide us all the vital "}
          text2={"information, to give you"}
          text3={" the best."}
        />

        <Grid item xs={12} sm={12} md={12} lg={12} id="survey_btn">
          <Button
            href="https://play.google.com/store/apps/details?id=com.oma1"
            className="btn"
          >
            TAKE A SURVEY
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

function Content({ src, heading, text1, text2, text3 }) {
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} id="survey_item">
      <img src={src} alt={heading} />

      <h3>{heading}</h3>

      <aside>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
      </aside>
    </Grid>
  );
}
