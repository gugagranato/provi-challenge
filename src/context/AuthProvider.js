import React, { createContext, useState, useContext, useEffect, useCallback } from "react";

import api from '../services/api';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [data, setData] = useState();




  useEffect(() => {
    const isLogged = () => {
      const token = localStorage.getItem('@Provi:token')
      const user = localStorage.getItem('@Provi:user')
    }
    isLogged()
  }, [])

  const signIn = useCallback(async ({ email, password }) => {

    //  main.js 

    // POST request using fetch() 
    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: "eve.holt@reqres.in",
        password: "pistol",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => response.json())
      .then(json => console.log(json));
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}