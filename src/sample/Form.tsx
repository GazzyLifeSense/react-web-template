import { useRef, useImperativeHandle, MutableRefObject } from "react"

type InputHandle = {
  focus: () => void
}

function MyInput({ ref }: { ref: MutableRefObject<InputHandle | null> }) {
  const realInputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => ({
    // 只暴露 focus，没有别的
    focus() {
      realInputRef.current?.focus()
    }
  }))
  return <input ref={realInputRef} />
}

export default function Form() {
  const inputRef = useRef<HTMLInputElement>(null)

  function handleClick() {
    inputRef.current?.focus()
  }

  return (
    <>
      <MyInput ref={inputRef} />
      <button onClick={handleClick}>聚焦输入框</button>
    </>
  )
}
