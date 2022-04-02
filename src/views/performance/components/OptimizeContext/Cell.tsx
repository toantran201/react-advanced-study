import {useGridDispatch, useGridState} from "../../context/OptimizeContext/GridContext";
import React from "react";

export interface CellProps {
	row: number;
	col: number
}

const Cell = ({row, col}: CellProps) => {
	const state = useGridState()
	const dispatch = useGridDispatch()
	// @ts-ignore
	const cell = state.grid[row][col]
	// @ts-ignore
	const handleClick = () => dispatch({type: 'UPDATE_GRID_CELL', row, col})
	return (
		<button
			onClick={handleClick}
			style={{
				color: cell > 50 ? 'white' : 'black',
				background: `rgba(122, 122, 0, ${cell / 100} )`
			}}
			className="w-10 h-10"
		>
			{Math.ceil(cell)}
		</button>
	)
}

export default React.memo(Cell)
