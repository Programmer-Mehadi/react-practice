/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useState } from "react"

export const UserContext = createContext({})

const AuthContext = ({ children }: { children: React.ReactNode }) => {
  const [data, setData] = useState({})

  // Function to set data
  const setUserData = (userData: any) => {
    setData(userData)
  }
  // Function to clear data
  const clearUserData = () => {
    setData({})
  }

  const initialContext = { setUserData, clearUserData, data }
  return (
    <UserContext.Provider value={initialContext}>
      {children}
    </UserContext.Provider>
  )
}

export default AuthContext
