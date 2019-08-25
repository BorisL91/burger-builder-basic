import React from "react";
import classes from "./burgerIngredients.module.css";
import { string } from "prop-types";

class BurgerIngredients extends React.Component {
  render() {
    let ingredient = null;
    if (this.props.type === "bread-bottom") {
      ingredient = <div className={classes.breadBottom}></div>;
    }
    if (this.props.type === "bread-top") {
      ingredient = (
        <div className={classes.breadTop}>
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      if (this.props.type === "meat") {
        ingredient = <div className={classes.Meat}></div>;
      }
      if (this.props.type === "salad") {
        ingredient = <div className={classes.Salad}></div>;
      }
      if (this.props.type === "bacon") {
        ingredient = <div className={classes.Bacon}></div>;
      }
      if (this.props.type === "cheese") {
        ingredient = <div className={classes.Cheese}></div>;
      }
    }
    return ingredient;
  }
}
BurgerIngredients.propTypes = {
  type: string.isRequired
};
export default BurgerIngredients;

// switch(props.type) {
//   case('bread-bottom'): ingredient = <div className={classes.breadBottom}></div>
//     break
//   case('bread-top') : ingredient = (
//     <div className={classes.breadTop}>
//       <div className={classes.Seeds1}></div>
//       <div className={classes.Seeds2}></div>
//     </div>
//   )
//     break
//   case('meat') : ingredient = <div className={classes.Meat}></div>
//     break
//   case('salad') : ingredient = <div className={classes.Salad}></div>
//     break
//   case('bacon') : ingredient = <div className={classes.Bacon}></div>
//     break

//   default: ingredient = null
// }
