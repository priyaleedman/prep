import React from 'react';
import axios from 'axios';
import { Button } from '@mui/material';
// import { Navigate } from 'react-router-dom';

function Logout ({ token, setToken }) {
  const logout = async () => {
    try {
      await axios.post('http://localhost:5005/admin/auth/logout', {}, {
        headers: {
          Authorization: token,
        }
      });
      await setToken('null');
    } catch (err) {
      console.log(err);
      alert(err.response.data.error);
    }
  };

  return (
    <Button variant='outlined' onClick={logout} color='cadet' aria-label='logout'>Logout</Button>
  );
}

export default Logout;
