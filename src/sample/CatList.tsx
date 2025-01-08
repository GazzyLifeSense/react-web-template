import { useRef, useState } from "react"
import { flushSync } from "react-dom"
import { useParams } from "react-router"
/* ref管理列表*/
export function CatList() {
  const params = useParams()
  switch (params.id) {
    case "1":
      return <CatList1 />
    case "2":
      return <CatList2 />
    default:
      return <b>CatList id not exist~</b>
  }
}
// 方法一：使用ref存储当前指向节点
export function CatList1() {
  const selectedRef = useRef<HTMLLIElement>(null)
  const [index, setIndex] = useState(0)

  return (
    <>
      <nav style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            flushSync(() => {
              if (index < catList.length - 1) {
                setIndex(index + 1)
              } else {
                setIndex(0)
              }
            })
            selectedRef.current?.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            })
          }}
        >
          下一步
        </button>
      </nav>
      <div>
        <ul
          className={"mx-auto flex items-center max-w-[400px] overflow-x-auto"}
        >
          {catList.map((cat, i) => (
            <li
              className={"shrink-0"}
              key={cat.id}
              ref={index === i ? selectedRef : null}
              style={index === i ? { border: "10px solid skyblue" } : undefined}
            >
              <img
                className={(index === i ? "active" : "") + " w-20"}
                src={cat.imageUrl}
                alt={"猫猫 #" + cat.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

// 方法二：使用ref存储Map
export function CatList2() {
  const [index, setIndex] = useState(0)
  const itemRefs = useRef(new Map())
  return (
    <>
      <nav style={{ textAlign: "center" }}>
        <button
          onClick={() => {
            let nextIndex
            if (index < catList.length - 1) {
              nextIndex = index + 1
            } else {
              nextIndex = 0
            }
            setIndex(nextIndex)
            itemRefs.current.get(catList[nextIndex].id).scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center"
            })
          }}
        >
          下一个
        </button>
      </nav>
      <div>
        <ul
          className={"mx-auto flex items-center max-w-[400px] overflow-x-auto"}
        >
          {catList.map((cat, i) => {
            const node = (
              <li
                className={"shrink-0"}
                key={cat.id}
                ref={node => {
                  const map = itemRefs.current
                  if (node == null) {
                    map.delete(cat.id)
                  } else {
                    map.set(cat.id, node)
                  }
                }}
              >
                <img
                  className={(index === i ? "active" : "") + " w-20"}
                  src={cat.imageUrl}
                  style={
                    index === i ? { border: "10px solid skyblue" } : undefined
                  }
                  alt={"猫猫 #" + cat.id}
                />
              </li>
            )

            itemRefs.current.set(cat.id, node)
            return node
          })}
        </ul>
      </div>
    </>
  )
}

const catList: { id: number; imageUrl: string }[] = []
for (let i = 0; i < 10; i++) {
  catList.push({
    id: i,
    imageUrl: "/vite.svg?n=" + i
  })
}
