import { Grid } from "@material-ui/core";
import React from "react";

export default function FamilyMP() {
  return (
    <>
      <Grid container id="family_mp">
        <Grid item xs={12} sm={12} md={12} lg={12} id="family_mp_top">
          <img
            src="https://res.cloudinary.com/dsepncuj8/image/upload/v1648390391/Figma%20Wbsite%20Images/Family_Meal_Planning_ods1ik.png"
            alt="family MP"
          />
          <h1>Family meal planning</h1>
          <h2>UNMATCHED CUSTOMER EXPERIENCE</h2>
        </Grid>

        <Content
          src={
            "https://res.cloudinary.com/dsepncuj8/image/upload/v1648390378/Figma%20Wbsite%20Images/Create_a_meal_plan_hlwkjw.png"
          }
          heading={"Create a meal plan"}
          text1={"Select meals of your "}
          text2={"choice to create a plan."}
        />

        <Content
          src={
            "https://res.cloudinary.com/dsepncuj8/image/upload/v1648390384/Figma%20Wbsite%20Images/take_a_survey_2_cim3eo.png"
          }
          heading={"Take a survey"}
          text1={"Our team of professional "}
          text2={"Dietiticians will create a "}
          text3={"plan that suits your lifestyle."}
        />

        <Content
          src={
            "https://res.cloudinary.com/dsepncuj8/image/upload/v1648393998/Figma%20Wbsite%20Images/Create_a_Recipe-removebg-preview_dhig3p.png"
          }
          heading={"Create your own recipe"}
          text1={"Describe the meals you "}
          text2={"want and how it should"}
          text3={" be prepared."}
        />
      </Grid>
    </>
  );
}

export function Content({ src, heading, text1, text2, text3 }) {
  return (
    <Grid item xs={12} sm={12} md={4} lg={4} id="family_mp_content">
      <section>
        <img src={src} alt={heading} />

        <aside>
          <h3>{heading}</h3>
          <p>{text1}</p>
          <p>{text2}</p>
          <p>{text3}</p>
        </aside>
      </section>
    </Grid>
  );
}
