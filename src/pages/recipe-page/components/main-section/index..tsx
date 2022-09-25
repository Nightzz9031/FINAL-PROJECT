import * as React from 'react';
import {
  Box,
  Typography,
  Grid,
  Divider,
} from '@mui/material';
import RecipeCard from './recipe-card';
import RecipeContext from '../../contexts/recipe-context';
import DrawerHeader from '../drawer-header';

type MainSectionProps = {
  isExtendedLayout: boolean
};

const MainSection: React.FC<MainSectionProps> = ({ isExtendedLayout }) => {
  const { recipes } = React.useContext(RecipeContext);

  return (
    <Box
      component="main"
      sx={(theme) => ({
        flexGrow: 1,
        p: 3,
        ...(isExtendedLayout && {
          ml: `${theme.common.drawerWidth.md}px`,
        }),
      })}
    >
      <DrawerHeader />
      <Typography component="h1" variant="h5">All recipes:</Typography>
      <Divider sx={{ mt: 2, mb: 3 }} />
      <Grid container spacing={3} sx={{ alignItem: 'stretch' }}>
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            description={recipe.description}
            images={recipe.images}
            calories={recipe.calories}
            protein={recipe.protein}
            carbohydrates={recipe. carbohydrates}
            sugars={recipe.sugars}
            fat={recipe.fat}
            cholesterol={recipe.cholesterol}
            diet={recipe.diet}
            timeToMake={recipe.timeToMake}
            servings={recipe.servings}
            servingSize={recipe.servingSize}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default MainSection;
