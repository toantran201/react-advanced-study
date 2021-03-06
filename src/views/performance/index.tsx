import React from "react";
import CodeSplitting from "./section/CodeSplitting";
import Windowing from "./section/Windowing";
import OptimizeContext from "./section/OptimizeContext";
import {GridProvider} from "./context/OptimizeContext/GridContext";
import DogName from "./components/OptimizeContext/DogName";

const Performance = () => {
	return (
		<div>
			<h1 className="text-4xl font-medium mb-4">Performance section</h1>
			<CodeSplitting/>
			<Windowing/>
			<GridProvider>
				<OptimizeContext/>
				<DogName/>
			</GridProvider>
		</div>
	)
}

export default Performance
