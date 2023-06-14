// this component rapresent a grid square with color

import classes from "./GridSquare.module.css"

const GridSquare = (props) =>{
    const classGrid = `grid-square color-${props.color}`
    return <div className={classGrid}></div>
}

export default GridSquare