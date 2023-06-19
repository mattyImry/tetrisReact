//4 by 4 grid tha show next block coming in 

import GridSquare from "./GridSquare";
import classes from "./NextBlock.module.css"

const NextBlock = props =>{
    const box = [[0,0,0,0], [0,0,0,0], [0,0,0,0], [0,0,0,0]];

    const grid = box.map((rowArray, row) => {
        return rowArray.map((square, col) => {
            return <GridSquare key={`${row}${col}`} color={square} />
        })
    })

    return (
        <div className={classes.next_block}>
            {grid}
        </div>
    )
}

export default NextBlock;