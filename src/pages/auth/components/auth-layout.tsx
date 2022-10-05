import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/material';

const AuthLayout: React.FC = () => (
  <Box sx={{
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
    backgroundImage: 'url(/login-bg.png)',
    backgroundSize: 'cover',
  }}
  >
    <Outlet />
  </Box>
);

export default AuthLayout;
