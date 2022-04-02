import {photos} from "data/photos";
import {useCallback, useMemo, useRef} from "react";
import {useVirtual} from "react-virtual";

const Windowing = () => {
  const photoList = useMemo(() => photos, []);
  const listRef = useRef<any>()

  const rowVirtualizer = useVirtual({
    size: photoList.length,
    parentRef: listRef,
    estimateSize: useCallback(() => 20, []),
    overscan: 10
  })
  /*
    size: number of items
     estimateSize: a memoized callback function that returns the size for each item
     overscan: the number of additional rows to render outside the scrollable view
  */

  return(
    <div className="mt-4">
      <h2 className="text-xl font-bold">Windowing</h2>
      <ul ref={listRef} className="relative h-40 overflow-scroll">
        <li style={{height: rowVirtualizer.totalSize}}/>
        {rowVirtualizer.virtualItems.map(({index, size, start}) => {
          const item = photoList[index]
          return (
            <li
              key={item.id}
              className="absolute top-0 left-0 w-full"
              style={{
                height: size,
                transform: `translateY(${start}px)`,
              }}
            >
              {item.title}
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default Windowing
