import { useRef, useImperativeHandle, forwardRef, ForwardedRef } from "react"

type InputHandle = {
  focus: () => void
}

// React19前通过forwardRef向父组件传递ref，19后废弃forwardRef，通过props传递ref
export const MyInput = forwardRef(function MyInput(
  _: unknown,
  ref: ForwardedRef<InputHandle>
) {
  const realInputRef = useRef<HTMLInputElement>(null)
  useImperativeHandle(ref, () => ({
    // 只暴露 focus，没有别的
    focus() {
      realInputRef.current?.focus()
    }
  }))
  return <input ref={realInputRef} placeholder="please input" />
})

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
