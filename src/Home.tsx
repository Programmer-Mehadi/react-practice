/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext } from "react"
import { UserContext } from "./Hooks/UseContextHook/AuthContext"

const Home = () => {
  const { data, setUserData, clearUserData }: any = useContext(UserContext)

  return (
    <div>
      <div>
        <p>Name: {data?.name || "No data"}</p>
        <p>Age: {data?.age || "No data"}</p>
      </div>
      <button onClick={() => clearUserData()}>Clear User data</button>
      <button
        onClick={() =>
          setUserData({
            name: "Mehadi",
            age: 25,
          })
        }
      >
        Set User data
      </button>
    </div>
  )
}

export default Home
