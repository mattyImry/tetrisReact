//setting control for the game

import classes from "./Controls.module.css";

const Controls = (props) => {
  return (
    <div className={classes.controls}>
      <button className={classes.control_button} onClick={(e) => {}}>
        Left
      </button>

      <button className={classes.control_button} onClick={(e) => {}}>
        Right
      </button>

      <button className={classes.control_button} onClick={(e) => {}}>
        Rotate
      </button>

      <button className={classes.control_button} onClick={(e) => {}}>
        Down
      </button>
    </div>
  );
};

export default Controls;
