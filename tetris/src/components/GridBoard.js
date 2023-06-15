import GridSquare from "./GridSquare";
import classes from "./GridBoard.module.css"


const GridBoard = (props) => {
    const grid = [];
    for (let row = 0; row < 18; row ++) {
        grid.push([])
        for (let col = 0; col < 10; col ++) {
            grid[row].push(<GridSquare key={`${col}${row}`} color="1" />)
        }
    }

    return (
        <div className={classes.grid_board}>
            {grid}
        </div>
    )
}

export default GridBoard;