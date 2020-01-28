import React from "react"

import Aux from "../../hoc/aux"
import classes from "./Layout.css"

const layout = props => (
  <Aux>
    <main className={classes.mainContent}>{props.children}</main>
  </Aux>
)

export default layout
