import * as React from 'react';
import {
  Grid,
  Paper,
  Box,
  Typography,
  Button,
} from '@mui/material';
import Swiper from 'components/swiper';
import { useNavigate } from 'react-router-dom';

type RecipeCardProps = {
    id: any,
    title: string,
    description: string,
    images: string[],
    calories: number,
};

const RecipeCard: React.FC<RecipeCardProps> = ({
  id,
  title,
  description,
  images,
  calories,
}) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: 500, height: 650, display: "flex-wrap"}}>
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
                {`${calories}calories per serving`}
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
              onClick={() => navigate(`/recipes/${id}`)}
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
    </Box>
  );
};

export default RecipeCard;
