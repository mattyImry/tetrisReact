//setting control for the game
import { useSelector, useDispatch } from "react-redux";
import { moveDown, moveLeft, moveRight, rotate } from "../actions";
import classes from "./Controls.module.css";

const Controls = (props) => {
  const dispatch = useDispatch();
  const isRunning = useSelector((state) => state.isRunning);
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
