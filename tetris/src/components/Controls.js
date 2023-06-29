//setting control for the game
import { useSelector, useDispatch } from "react-redux";

import { moveDown, moveLeft, moveRight, rotate } from "../actions";
import classes from "./Controls.module.css";
import { useEffect } from "react";

const Controls = (props) => {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.game.isRunning);
  const gameOver = useSelector((state) => state.game.gameOver);

  // useEffect(() => {
  //   function handleKeyDown(e) {
  //     if (!isRunning || gameOver) {
  //       return;
  //     }
  //     if (e.keyCode === 37) {
  //       dispatch(moveLeft());
  //     }

  //     if (e.keyCode === 39) {
  //       dispatch(moveRight());
  //     }

  //     if (e.keyCode === 40) {
  //       dispatch(moveDown());
  //     }

  //     if (e.keyCode === 32) {
  //       dispatch(rotate());
  //     }
  //   }

  //   document.addEventListener("keydown", handleKeyDown);

  //   return function cleanup() {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // });

  return (
    <div className={classes.controls}>
      <button
        disabled={!isRunning || gameOver}
        className={classes.control_button}
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveLeft());
        }}
      >
        Left
      </button>

      <button
        className={classes.control_button}
        disabled={!isRunning || gameOver}
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveRight());
        }}
      >
        Right
      </button>

      <button
        className={classes.control_button}
        disabled={!isRunning || gameOver}
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(rotate());
        }}
      >
        Rotate
      </button>

      <button
        className={classes.control_button}
        disabled={!isRunning || gameOver}
        onClick={(e) => {
          if (!isRunning || gameOver) {
            return;
          }
          dispatch(moveDown());
        }}
      >
        Down
      </button>
    </div>
  );
};

export default Controls;
