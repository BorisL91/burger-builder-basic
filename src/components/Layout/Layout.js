import React from "react";

import Aux from "../../hoc/aux";
import classes from "./Layout.css";

const layout = props => (
  <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.mainContent}>{props.children}</main>
  </Aux>
);

export default layout;
