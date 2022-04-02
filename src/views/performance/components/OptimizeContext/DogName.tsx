import {useGridDispatch, useGridState} from "../../context/OptimizeContext/GridContext";
import React, {ChangeEvent} from "react";

const DogName = () => {
	const state = useGridState()
	const dispatch = useGridDispatch()
	// @ts-ignore
	const {dogName} = state
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		// @ts-ignore
		dispatch({type: 'TYPED_IN_DOG_INPUT', dogName: e.target.value})
	}
	// @ts-ignore
	return (
		<div className="mt-2">
			<input
				value={dogName}
				type="text"
				onChange={handleInputChange}
				placeholder={"Dog name here"}
				className="p-2 rounded-xl border-2 border-amber-500 focus:border-amber-600 outline-0"
			/>
		</div>
	)
}

export default DogName
