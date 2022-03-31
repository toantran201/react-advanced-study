import {useState} from "react";
import React from "react";

const Performance = () => {
  const loadSmileFace = () =>  import ("./components/SmileFace")
  const SmileFace = React.lazy(loadSmileFace)

  const [showSmileFace, setShowSmileFace] = useState(false);

  return(
    <div>
      <h1 className="text-4xl font-medium">Performance section</h1>
      <h2 className="text-xl font-normal">Code splitting</h2>
      <div>
        <label
          onMouseEnter={loadSmileFace}
          onFocus={loadSmileFace}
        >
          <input type="checkbox"
            checked={showSmileFace}
            onChange={e => setShowSmileFace(e.target.checked)}
          />
          {'Show smile face'}
        </label>
        <div className="h-40 w-40">
          <React.Suspense fallback={<div>Loading ....</div>}>
            {showSmileFace ? <SmileFace/> : null}
          </React.Suspense>
        </div>
      </div>
    </div>
  )
}

export default Performance
