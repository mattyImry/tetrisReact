import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import {
  moveDown,
  moveLeft,
  moveRight,
  rotate,
  pause,
  resume,
  restart,
} from "../actions";

import classes from "./KeyControls.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowRight,
  faArrowLeft,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const KeyControls = () => {
  const dispatch = useDispatch();
  const game = useSelector((state) => state.game);
  const { score, isRunning, gameOver } = game;

  useEffect(() => {
    function handleKeyDown(e) {
      if (!isRunning || gameOver) {
        return;
      }
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
    }

    document.addEventListener("keydown", handleKeyDown);

    return function cleanup() {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

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
    <div className={classes.keys}>
      <p>
        Left: <FontAwesomeIcon icon={faArrowLeft} />
      </p>
      <p>
        Right: <FontAwesomeIcon icon={faArrowRight} />
      </p>
      <p>
        Up: <FontAwesomeIcon icon={faArrowUp} />
      </p>
      <p>
        Down: <FontAwesomeIcon icon={faArrowDown} />
      </p>
      <p>
        Rotate: <span>Space bar</span>
      </p>
      <p>
        Pause/Start: <span>Enter</span>
      </p>
    </div>
  );
};

export default KeyControls;
