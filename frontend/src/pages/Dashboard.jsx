import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';

function Dashboard ({ token }) {
  const navigate = useNavigate();

  React.useEffect(() => {
    if (token === 'null') {
      navigate('/login');
    }
  }, [token]);

  return <>
    <Container component="main">
        Prep
    </Container>
  </>;
}

export default Dashboard;
