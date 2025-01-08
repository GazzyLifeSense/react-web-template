import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.tsx"
import { BrowserRouter, Outlet, Route, Routes } from "react-router"
import Canvas from "./sample/Canvas.tsx"
import Form from "./sample/Form.tsx"
import EditProfile from "./sample/EditProfile.tsx"
import { CatList } from "./sample/CatList.tsx"
import { NotFound } from "./components/NotFound.tsx"

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <StrictMode>
      <Routes>
        <Route path="/" element={<App />} />

        <Route path="/sample">
          <Route index element={<Canvas />} />
          <Route path="CatList/:id?" element={<CatList />} />
        </Route>

        <Route
          element={
            <div id="other-container">
              <Outlet />
            </div>
          }
        >
          <Route path="form" element={<Form />} />
          <Route path="profile" element={<EditProfile />} />
        </Route>

        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </StrictMode>
  </BrowserRouter>
)
