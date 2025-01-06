import { useState } from "react"

/*
 * Input Hook
 * Usage: const firstNameProps = useFormInput('Mary');
 *        <input {...firstNameProps} />
 */
export function useFormInput(initialValue: unknown) {
  const [value, setValue] = useState(initialValue)

  function handleChange(e: InputEvent) {
    setValue((e.target as HTMLInputElement).value)
  }

  const inputProps = {
    value: value,
    onChange: handleChange
  }

  return inputProps
}
