import {createContext, useContext, useReducer} from "react";

const initialGrid = Array.from({length: 100}, () =>
	Array.from({length: 100}, () => Math.random() * 100),
)

export interface GridAction {
	type: string;
	dogName?: string;
	row?: number;
	col?: number;
}

export interface GridData {
	dogName: string;
	grid: number[][];
}

// @ts-ignore
const GridStateContext = createContext()
// @ts-ignore
const GridDispatchContext = createContext()
const gridReducer = (state: GridData, action: GridAction) => {
	switch (action.type) {
		case 'TYPED_IN_DOG_INPUT': {
			return {...state, dogName: action.dogName}
		}
		case 'UPDATE_GRID_CELL': {
			const gridClone = state.grid.map((cells, rI) => {
				if (rI === action.row) {
					return cells.map((cell, cI) => {
						if (cI === action.col) {
							return Math.random() * 100
						}
						return cell
					})
				}
				return cells
			})
			return {...state, grid: gridClone}
		}
		case 'UPDATE_GRID': {
			const gridClone = state.grid.map(row => {
				return row.map(cell => (Math.random() > 0.7 ? Math.random() * 100 : cell))
			})
			return {...state, grid: gridClone}
		}
		default: {
			throw new Error(`Unhandled action type: ${action.type}`)
		}
	}
}

// @ts-ignore
export const GridProvider = ({children}) => {
	// @ts-ignore
	const [state, dispatch] = useReducer(gridReducer, {
		dogName: '',
		grid: initialGrid,
	})
	return (
		<GridStateContext.Provider value={state}>
			<GridDispatchContext.Provider value={dispatch}>
				{children}
			</GridDispatchContext.Provider>
		</GridStateContext.Provider>
	)
}

export const useGridState = () => {
	const context = useContext(GridStateContext)
	if (!context) {
		throw new Error('useGridState must be used within the GridProvider')
	}
	return context
}

export const useGridDispatch = () => {
	const context = useContext(GridDispatchContext)
	if (!context) {
		throw new Error('useGridDispatch must be used within the GridProvider')
	}
	return context
}



