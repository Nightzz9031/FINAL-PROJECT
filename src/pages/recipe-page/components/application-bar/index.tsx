import React from 'react';
import {
  Toolbar,
  Typography,
  AppBar,
} from '@mui/material';
import SearchBar from '../search-bar/searchBar';


const ApplicationBar: React.FC = () => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h5" noWrap component="div">
        Cook with what you got
      </Typography>
      <SearchBar />
    </Toolbar>
  </AppBar>
);

export default ApplicationBar;
