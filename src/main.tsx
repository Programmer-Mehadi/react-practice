import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import AuthContext from "./Hooks/UseContextHook/AuthContext.tsx"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <AuthContext>
      <App />
    </AuthContext>
  </>
)
