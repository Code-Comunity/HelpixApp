import React, { createContext, useState } from "react";
import { IAuth } from "./IAuth";

export const AuthContext = createContext( {} as IAuth )


export const AuthProvider: React.FC = ({ children }) => {

  const [ user, setUser ] = useState<boolean>(false)

  return (
    <AuthContext.Provider value={{ signed: !!user }} >
      { children }
    </AuthContext.Provider>
  )
}