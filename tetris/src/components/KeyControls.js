import classes from "./KeyControls.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowRight,
  faArrowLeft,
  faArrowDown,
} from "@fortawesome/free-solid-svg-icons";

const KeyControls = () => {
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
