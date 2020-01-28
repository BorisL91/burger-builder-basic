import React from "react"

import classes from "./buildControls.module.css"
import BuildControl from "../BuildControls/buildControl"

const controls = [
  { label: "salad", type: "salad" },
  { label: "meat", type: "meat" },
  { label: "cheese", type: "cheese" },
  { label: "bacon", type: "bacon" }
]

const BuildControls = ({
  ingredientAdded,
  ingredientRemoved,
  disabled,
  price
}) => {
  return (
    <div className={classes.BuildControls}>
      <p>Curent Price: {price}</p>
      {controls.map(ctrl => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          removed={() => ingredientRemoved(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      ))}
    </div>
  )
}
export default BuildControls
