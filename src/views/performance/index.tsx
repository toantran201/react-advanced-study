import React from "react";
import CodeSplitting from "./section/CodeSplitting";
import Windowing from "./components/Windowing";

const Performance = () => {
  return (
    <div>
      <h1 className="text-4xl font-medium mb-4">Performance section</h1>
      <CodeSplitting/>
      <Windowing/>
    </div>
  )
}

export default Performance
