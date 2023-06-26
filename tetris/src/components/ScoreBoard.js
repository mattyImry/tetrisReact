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
    function handleKeyGame(e) {
      if (e.keyCode === 13 && isRunning) {
        dispatch(pause());
      } else {
        dispatch(resume());
      }

      console.log(e.keyCode);
    }

    document.addEventListener("keydown", handleKeyGame);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyGame);
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
    </div>
  );
};
export default ScoreBoard;
