
import React from 'react';

import LoanProvider from './LoanProvider'
import AuthProvider from './AuthProvider'

const AppProvider = ({ children }) => (
  <AuthProvider>
    <LoanProvider>{children}</LoanProvider>
  </AuthProvider>
);

export default AppProvider;