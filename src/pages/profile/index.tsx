import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Toolbar } from '@mui/material';
import { Box } from '@mui/system';
import Link from 'routing/navLinks';



const ProfilePage: React.FC = () => {
    return (
        <Box>
        <Typography>THIS IS A PROFILE PAGE</Typography>
          <Toolbar sx={{ alignItems: 'stretch'}}>
            <Link to="/" end>Home</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/recipes">Recipe</Link>
          </Toolbar>
        </Box>
    )
}

export default ProfilePage;