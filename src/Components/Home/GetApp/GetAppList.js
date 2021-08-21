import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

export default function GetAppList() {
  return (
    <>
      <List aria-label="rasons to get the app">
        {getAppList.map((item) => (
          <ListItem>
            <ListItemIcon>
              <CheckCircleIcon style={{ color: "rgba(38, 200, 103, 1)" }} />
            </ListItemIcon>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </>
  );
}

const getAppList = [
  "Customize your meal plan",
  "Make instant order",
  "Keep track of your Nutrition and Health goals",
  "Have your meals delivered. Fresh; and on time",
  "Budget your meals",
];
