import classes from "./ScoreBoard.module.css";

const ScoreBoard = (props) => {
  return (
    <div className="score_board">
      <div>Score:{props.score}</div>
      <div>Level: 1</div>
      <button className={classes.score_board_button} onClick={(e) => {}}>
        Play
      </button>
      <button className={classes.score_board_button} onClick={(e) => {}}>
        Restart
      </button>
    </div>
  );
};
export default ScoreBoard;
