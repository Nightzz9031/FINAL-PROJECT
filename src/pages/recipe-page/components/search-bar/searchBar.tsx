import { TextField, Box } from '@mui/material';
import * as React from 'react';

type searchBarProps = {
    onChange?: React.ChangeEventHandler;
}

const SearchBar: React.FC<searchBarProps> = () => (
        <Box sx={{ ml: 8, backgroundColor: '#B8F9D9', display: 'flex', alignItems: 'center'}}>
            
            <TextField 
                id="filled-search" 
                label="Search field" 
                type="search" 
                variant='filled'
                />
        </Box>
);

export default SearchBar;
