import {useGridDispatch} from "../../context/OptimizeContext/GridContext";
import React, {useState} from "react";
import Cell from "./Cell";

const Grid = () => {
	const dispatch = useGridDispatch()
	const [rows, setRows] = useState(5);
	const [cols, setCols] = useState(5);
	// @ts-ignore
	const updateGrid = () => dispatch({type: 'UPDATE_GRID'})
	return (
		<div className="mt-4">
			<button onClick={updateGrid} className="bg-green-400 px-4 py-2 rounded-xl text-white">Update Grid Data</button>
			<br/>
			<div className="my-2 flex space-x-4">
				<div>
					<label className="mr-2 font-semibold">Rows</label>
					<input
						type="number"
						value={rows}
						onChange={e => setRows(+e.target.value)}
						className="p-2 outline-0 border-2 border-green-300 mr-2"
					/>
				</div>
				<div>
					<label className="mr-2 font-semibold">Cols</label>
					<input
						type="number"
						value={cols}
						onChange={e => setCols(+e.target.value)}
						className="p-2 outline-0 border-2 border-green-300"
					/>
				</div>
			</div>
			<div style={{width: cols * 40}}>
				{Array.from({length: rows}).map((r, row) => (
					<div key={row} style={{display: 'flex'}}>
						{Array.from({length: cols}).map((c, column) => (
							<Cell key={column} row={row} col={column}/>
						))}
					</div>
				))}
			</div>
		</div>
	)
}

export default React.memo(Grid)
