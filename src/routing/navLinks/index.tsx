import React from 'react';
import {
  styled,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  height: '100%',
  padding: theme.spacing(0, 2),
  color: theme.palette.grey[200],
  textDecoration: 'none',

  ':hover': {
    backgroundColor: theme.palette.primary.dark,
    color: theme.palette.grey[50],
  },

  '&.active': {
    boxShadow: `inset 0 -4px 0 ${theme.palette.common.white}`,
  },
}));

export default Link;