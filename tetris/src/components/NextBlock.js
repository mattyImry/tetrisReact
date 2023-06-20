//4 by 4 grid tha show next block coming in

import GridSquare from "./GridSquare";
import classes from "./NextBlock.module.css";
import { useSelector } from "react-redux";
import { shapes } from "../utils";

const NextBlock = (props) => {
  const nextShape = useSelector((state) => state.game.nextShape);
  const box = shapes[nextShape][0]; // Get the first rotation
  //   const box = [
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0],
  //     [0, 0, 0, 0],
  //   ];

  const grid = box.map((rowArray, row) => {
    return rowArray.map((square, col) => {
      return <GridSquare key={`${row}${col}`} color={square} />;
    });
  });

  return <div className={classes.next_block}>{grid}</div>;
};

export default NextBlock;
