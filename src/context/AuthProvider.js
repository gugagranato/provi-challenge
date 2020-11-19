import React, { createContext, useState, useContext, useEffect, useCallback } from "react";

import api from '../services/api';

const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [data, setData] = useState();

  const signIn = useCallback(async ({ email, password }) => {

    fetch("https://reqres.in/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      .then(response => {
        console.log(response)
        const logged = response.ok
        console.log(logged)
        localStorage.setItem('@Provi:logged', logged);
        setData(response)
      })



  }, []);

  const signOut = useCallback(() => {
    localStorage.removeItem('@Provi:logged');
    setData();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        setData,
        data,
        signOut
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