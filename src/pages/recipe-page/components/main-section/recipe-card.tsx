import * as React from 'react';
import {
  Grid,
  Paper,
  Box,
  Typography,
  Button,
} from '@mui/material';
import Swiper from '.../components/swiper';


type RecipeMacros = Recipe | Macros;

const RecipeCard: React.FC<Recipe> = ({
  id,
  title,
  description,
  images,
  calories,

}) => (
  <Grid item xs={12} sm={6} md={4} lg={3}>
    <Paper
      elevation={3}
      sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}
    >
      <Box>
        <Swiper images={images} />
      </Box>
      <Box sx={{
        p: 2,
        pt: 1,
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      >
        <Box>
          <Box sx={{ mb: 1 }}>
            <Typography
              component="div"
              variant="h5"
              sx={{
                float: 'right',
                ml: 1,
                mb: 1,
                color: 'success.main',
                fontWeight: 'fontWeightMedium',
              }}
            >
              {`${calories} calories per serving`}
            </Typography>
            <Typography component="h2" variant="h5">{title}</Typography>
          </Box>
          <Box sx={{ height: 80, my: 2 }}>
            <Typography
              sx={{
                display: '-webkit-box',
                WebkitLineClamp: 3,
                WebkitBoxOrient: 'vertical',
                overflow: 'hidden',
                textOverflow: 'elipsis',
              }}
            >
              {description}
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="contained"
            sx={{ width: '50%' }}
            onClick={() => console.log('View recipe:', id)}
          >
            View recipe
          </Button>
          <Button
            variant="contained"
            sx={{ width: '50%' }}
            onClick={() => console.log('Add to favorites:', id)}
          >
            Add to favorites
          </Button>
        </Box>
      </Box>
    </Paper>
  </Grid>
);

export default RecipeCard;
