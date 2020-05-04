import React, { useCallback } from 'react';

import { Container } from './styles';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  useCallback(() => {
    signOut();
  }, [signOut]);

  return (
    <>
      <Container>
        <h1>Dashboard</h1>

        <button type="button" onClick={signOut}>
          Logout
        </button>
      </Container>
    </>
  );
};

export default Dashboard;
