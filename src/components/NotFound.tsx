import { useParams } from "react-router"

export function NotFound() {
  const { "*": splat } = useParams()
  return <b>route: {splat} not found~</b>
}
