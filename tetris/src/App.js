import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";

import classes from "./App.module.css";

import Controls from "./components/Controls";
import GridBoard from "./components/GridBoard";
import MessagePopup from "./components/MessagePopup";
import NextBlock from "./components/NextBlock";
import ScoreBoard from "./components/ScoreBoard";
import KeyControls from "./components/KeyControls";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <div className={classes.App}>
        <header className={classes.App_header}>
          <h1 className={classes.App_title}>Tetris</h1>
        </header>
        <GridBoard />
        <NextBlock />
        <ScoreBoard />
        <Controls />
        <MessagePopup />
        <KeyControls />
      </div>
    </Provider>
  );
}

export default App;
