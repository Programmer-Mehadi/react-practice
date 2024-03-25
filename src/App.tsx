import "./App.css"
import useSetTitle from "./Hooks/CustomHook/useSetTitle"

function App() {
  useSetTitle({ title: "Home - React Practice" })
  return <div></div>
}

export default App
