// this component rapresent a grid square with color

import classes from "./GridSquare.module.css";

const GridSquare = (props) => {
  const cssColor = `color_${props.color}`;
  return <div className={`${classes.gridsquare} ${classes[cssColor]}`}></div>;
};

export default GridSquare;
