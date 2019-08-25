import React from "react";

import classes from "./buildControls.module.css";
import BuildControl from "../BuildControls/buildControl";

const controls = [
  { label: "salad", type: "salad" },
  { label: "meat", type: "meat" },
  { label: "cheese", type: "cheese" },
  { label: "patty", type: "patty" }
];

const BuildControls = props => {
  return (
    <div className={classes.BuildControls}>
      {controls.map(ctrl => (
        <BuildControl key={ctrl.label} label={ctrl.label} />
      ))}
    </div>
  );
};

export default BuildControls;
