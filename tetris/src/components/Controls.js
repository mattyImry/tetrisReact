//setting control for the game
import { useSelector, useDispatch } from "react-redux";

import { moveDown, moveLeft, moveRight, rotate } from "../actions";
import classes from "./Controls.module.css";
import { useEffect } from "react";

const Controls = (props) => {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.isRunning);

  useEffect(() => {
    function handleKeyDown(e) {
      if (e.keyCode === 37) {
        dispatch(moveLeft());
      }

      if (e.keyCode === 39) {
        dispatch(moveRight());
      }

      if (e.keyCode === 40) {
        dispatch(moveDown());
      }

      if (e.keyCode === 32) {
        dispatch(rotate());
      }

      // console.log(e.keyCode);
    }

    document.addEventListener("keydown", handleKeyDown);

    // Don't forget to clean up
    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  return (
    <div className={classes.controls}>
      <button
        className={classes.control_button}
        onClick={(e) => {
          dispatch(moveLeft());
        }}
      >
        Left
      </button>

      <button
        className={classes.control_button}
        onClick={(e) => {
          dispatch(moveRight());
        }}
      >
        Right
      </button>

      <button
        className={classes.control_button}
        onClick={(e) => {
          dispatch(rotate());
        }}
      >
        Rotate
      </button>

      <button
        className={classes.control_button}
        onClick={(e) => {
          dispatch(moveDown());
        }}
      >
        Down
      </button>
    </div>
  );
};

export default Controls;
