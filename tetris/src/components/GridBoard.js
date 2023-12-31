// setting the grid for the game
import React, { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { moveDown } from "../actions";
import { shapes } from "../utils";

import GridSquare from "./GridSquare";
import classes from "./GridBoard.module.css";

const GridBoard = (props) => {
  const requestRef = useRef();
  const lastUpdateTimeRef = useRef(0);
  const progressTimeRef = useRef(0);
  const dispatch = useDispatch();

  const game = useSelector((state) => state.game);
  const { grid, shape, rotation, x, y, isRunning, speed } = game;

  useEffect(() => {
    requestRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(requestRef.current);
  }, [isRunning]);

  const update = (time) => {
    requestRef.current = requestAnimationFrame(update);
    if (!isRunning) {
      return;
    }
    if (!lastUpdateTimeRef.current) {
      lastUpdateTimeRef.current = time;
    }
    const deltaTime = time - lastUpdateTimeRef.current;
    progressTimeRef.current += deltaTime;
    if (progressTimeRef.current > speed) {
      dispatch(moveDown());
      progressTimeRef.current = 0;
    }
    lastUpdateTimeRef.current = time;
  };

  const block = shapes[shape][rotation];
  const blockColor = shape;
  const gridSquares = grid.map((rowArray, row) => {
    // map columns
    return rowArray.map((square, col) => {
      // Find the block x and y on the shape grid
      // By subtracting the x and y from the col and the row we get the position of the upper left corner of the block array as if it was superimposed over the main grid
      const blockX = col - x;
      const blockY = row - y;
      let color = square;
      // Map current falling block to grid.
      // For any squares that fall on the grid we need to look at the block array and see if there is a 1 in this case we use the block color.
      if (
        blockX >= 0 &&
        blockX < block.length &&
        blockY >= 0 &&
        blockY < block.length
      ) {
        color = block[blockY][blockX] === 0 ? color : blockColor;
      }
      // Generate a unique key for every block
      const k = row * grid[0].length + col;
      // Generate a grid square
      return <GridSquare key={k} color={color} />;
    });
  });
  // const grid = [];
  // for (let row = 0; row < 18; row++) {
  //   grid.push([]);
  //   for (let col = 0; col < 10; col++) {
  //     grid[row].push(<GridSquare key={`${col}${row}`} color="0" />);
  //   }
  // }

  return <div className={classes.grid_board}>{gridSquares}</div>;
};

export default GridBoard;
