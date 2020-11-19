import React, { createContext, useState, useContext, useEffect } from "react";

import api from '../services/api';

const LoanContext = createContext();

export default function LoanProvider({ children }) {
  const [loans, setLoans] = useState();
  const [loanDetails, setLoanDetails] = useState();

  useEffect(() => {
    api.get('5c923b0932000029056bce39')
      .then(event => {
        setLoanDetails(event.data)
        setLoans(event.data.installments)
      })

  }, [setLoans, setLoanDetails])

  return (
    <LoanContext.Provider
      value={{
        loans,
        setLoans,
        loanDetails,
        setLoanDetails
      }}
    >
      {children}
    </LoanContext.Provider>
  );
}

export function useLoan() {
  const context = useContext(LoanContext);
  if (!context) throw new Error("useLoan must be used within a LoanProvider");
  const { loans, setLoans, loanDetails, setLoanDetails } = context;
  return { loans, setLoans, loanDetails, setLoanDetails };
}