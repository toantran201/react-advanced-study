import {useGridDispatch, useGridState} from "../../context/OptimizeContext/GridContext";
import React from "react";

export interface CellProps {
	row: number;
	col: number
}

const withStateSlice = (Component: any, slice: any) => {
	const MemoComponent = React.memo(Component)
	const Wrapper = (props: any, ref: any) => {
		const state = useGridState()
		return <MemoComponent ref={ref} state={slice(state, props)} {...props}/>
	}
	Wrapper.displayName = `withStateSlice(${Component.displayName || Component.name} )`
	return React.memo(React.forwardRef(Wrapper))
}

// @ts-ignore
const Cell = ({state: cell, row, col}: CellProps) => {
	const dispatch = useGridDispatch()
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

// @ts-ignore
export default withStateSlice(Cell, (state: any, {row, col}) => state.grid[row][col])
