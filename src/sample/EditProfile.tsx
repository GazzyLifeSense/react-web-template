import { useState } from "react"
export default function EditProfile() {
  const [status, setStatus] = useState("saving")
  const [person, setPerson] = useState({
    firstName: "Jane",
    lastName: "Jacobs"
  })
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "editing") {
      setStatus("saving")
    } else {
      setStatus("editing")
    }
  }
  return (
    <form onSubmit={handleSubmit} style={{ border: "1px solid black" }}>
      <p>
        <label>
          First name:&nbsp;
          {status === "editing" ? (
            <input
              value={person.firstName}
              onChange={e => {
                setPerson({ ...person, firstName: e.target.value })
              }}
            />
          ) : (
            <b>{person.firstName}</b>
          )}
        </label>
      </p>
      <p>
        <label>
          Last name:&nbsp;
          {status === "editing" ? (
            <input
              value={person.lastName}
              onChange={e => {
                setPerson({ ...person, lastName: e.target.value })
              }}
            />
          ) : (
            <b>{person.lastName}</b>
          )}
        </label>
      </p>
      <button type="submit">
        {status === "editing" ? "Save Profile" : "Edit Profile"}
      </button>
      <p>
        <i>Hello, {person.firstName + " " + person.lastName}!</i>
      </p>
    </form>
  )
}
