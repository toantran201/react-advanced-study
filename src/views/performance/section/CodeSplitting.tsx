import React, {useState} from "react";

const CodeSplitting = () => {
  const loadSmileFace = () => import ("../components/SmileFace")
  const SmileFace = React.lazy(loadSmileFace)

  const [showSmileFace, setShowSmileFace] = useState(false);

  return (
    <div>
      <h2 className="text-xl font-normal">Code splitting</h2>
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
      <div>
        <React.Suspense fallback={<div>Loading ....</div>}>
          {showSmileFace ? <SmileFace/> : null}
        </React.Suspense>
      </div>
    </div>
  )
}

export default CodeSplitting
