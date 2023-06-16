import classes from "./App.module.css";
import GridBoard from "./components/GridBoard";
import NextBlock from "./components/NextBlock";
import ScoreBoard from "./components/ScoreBoard";

function App() {
  return (
    <div className={classes.App}>
      <header className={classes.App_header}>
        <h1 className={classes.App_title}>Tetris</h1>
      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
    </div>
  );
}

export default App;
