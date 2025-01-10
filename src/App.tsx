import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"
import "./App.css"
import { Link, NavLink, useNavigate } from "react-router"

function App() {
  const navigate = useNavigate()

  return (
    <>
      <div className="text-center">
        <div>
          <a href="https://vite.dev" target="_blank">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
        <nav>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-500" : "")}
          >
            Home
          </NavLink>

          <br />
          <Link to="/sample">try sample</Link>
          <br />
          <Link to="/sample/Reducer">try reducer</Link>
          <br />
          <Link to="/sample/Redux">try redux</Link>
          <br />
          <button onClick={() => navigate("/notExist")}>nav to 404</button>
        </nav>
      </div>
    </>
  )
}

export default App
