import React from 'react'
import Grid from "@material-ui/core/Grid";
import { GiMeal } from "react-icons/gi";

export default function EachDifferent(props) {
    return (
        <>
         <Grid item xs={12} sm={6} md={6} lg={3} className="each_different">
          <section>
            <GiMeal />
          </section>
          <h4>{props.heading}</h4>
          <p>
            {props.body}
          </p>
        </Grid>   
        </>
    )
}
