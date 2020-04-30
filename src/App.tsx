import React from 'react';

import GlobalStyle from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import AppProvider from './hooks';

import { AuthProvider } from './hooks/auth';

const App: React.FC = () => (
  <>
    <AppProvider>
      <SignIn />
    </AppProvider>

    <GlobalStyle />
  </>
);

export default App;
