// message disply maybe use as overlay??

import classes from "./MessagePopup.module.css";
import { useSelector } from "react-redux";

const MessagePopup = (props) => {
  const isRunning = useSelector((state) => state.game.isRunning);
  const gameOver = useSelector((state) => state.game.gameOver);
  let message = "";
  let isHidden = "hidden";

  if (gameOver) {
    message = "Game Over";
    isHidden = "";
  } else if (!isRunning) {
    message = "Paused";
    isHidden = "";
  }

  return (
    <div className={`${classes.message_popup} ${classes[isHidden]}`}>
      <h1>{message}</h1>
    </div>
  );
};

export default MessagePopup;
