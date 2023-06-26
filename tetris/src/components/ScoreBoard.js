//score board to display score and main control

import classes from "./ScoreBoard.module.css";
import { useSelector, useDispatch } from "react-redux";
import { pause, resume, restart } from "../actions";
import { useEffect } from "react";

const ScoreBoard = (props) => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { score, isRunning, gameOver } = game;

  useEffect(() => {
    function handleKeyPause(e) {
      if (e.keyCode === 13 && isRunning) {
        dispatch(pause());
      } else {
        dispatch(resume());
      }
    }

    document.addEventListener("keydown", handleKeyPause);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyPause);
    };
  });

  return (
    <div className="score_board">
      <div>Score:{score}</div>
      <div>Level: 1</div>
      <button
        className={classes.score_board_button}
        onClick={(e) => {
          if (gameOver) {
            return;
          }
          if (isRunning) {
            dispatch(pause());
          } else {
            dispatch(resume());
          }
        }}
      >
        {isRunning ? "Pause" : "Play"}
      </button>
      <button
        className={classes.score_board_button}
        onClick={(e) => {
          dispatch(restart());
        }}
      >
        Restart
      </button>
      <div className={classes.keys}>
          
          <p>Left: &#x2190;</p>
          <p>Right: &#x2192;</p>
          <p>Up: &#x2191;</p>
          <p>Down: &#x2193;</p>
          <p>Rotate: Space bar</p>
          <p>Pause/Start: Enter</p>
        </div>
      
    </div>
  );
};
export default ScoreBoard;
