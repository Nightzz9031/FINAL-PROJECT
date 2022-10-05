import * as React from 'react';
import Typography from '@mui/material/Typography';
import { Button, Divider, IconButton, InputBase, Paper, Skeleton, Toolbar } from '@mui/material';
import { Box, Container } from '@mui/system';
import Link from 'routing/navLinks';
import { Navigate, useParams } from 'react-router-dom';
import RecipeService from 'services/recipe-service';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import Swiper from 'components/swiper';



const RecipePage: React.FC = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = React.useState<Recipe | null>(null);

  if (id === undefined) return <Navigate to="/page-not-found" />;

  React.useEffect(() => {
    (async () => {
      const fetchedRecipe = await RecipeService.fetchOne(id);

      setRecipe(fetchedRecipe);
    })();
  }, []);
  
    return (
    <Container sx={{ mt: 4 }}>
        <Box>
          <Toolbar sx={{ alignItems: 'stretch'}}>
            <Link to="/" end>Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/favorites">Favorites</Link>
            <Link to="/auth/register">Register here!</Link>
          </Toolbar>
        </Box>
        {recipe ? (
          <Paper
            elevation={0}
            sx={(theme) => ({
              mx: 'auto',
              maxWidth: { xs: 400, md: 'initial' },
              p: { xs: 3 },
              boxShadow: { xs: theme.shadows[3] },
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              gap: 2,
            })}
          >
            <Box sx={{ width: { md: 900 } }}>
              <Swiper
                images={recipe.images}
                sx={{ height: { xs: 300, md: 500 } }}
              />
            </Box>
            <Box sx={{
              flexGrow: { md: 1 },
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            >
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                  <Typography component="h1" variant="h4">{recipe.title}</Typography>
                  <Typography
                    component="div"
                    variant="h5"
                    color="success.main"
                    sx={{
                      fontWeight: 'medium',
                      whiteSpace: 'nowrap',
                      pt: 0.5,
                    }}
                  >
                    {`${recipe.calories} calories per serving`}
                  </Typography>
                </Box>
  
                <Divider textAlign="left" sx={{ my: 2 }}>Recipe info:</Divider>
  
                <Typography variant="body1" sx={{ fontWeight: 'medium', my: 2 }}>
                  {recipe.description}
                </Typography>
              </Box>
  
              <Box>
                <Divider textAlign="left" sx={{ my: 2 }}>Komercija</Divider>
                <Paper
                  elevation={3}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    py: 0.5,
                    px: 2,
                    mb: 2,
                  }}
                >
                  <Typography>Servings:</Typography>
                  <Box>
                    <IconButton><AddIcon /></IconButton>
                    <InputBase value={1} sx={{ width: 40 }} inputProps={{ sx: { textAlign: 'center' } }} />
                    <IconButton><RemoveIcon /></IconButton>
                  </Box>
                </Paper>
  
                <Button variant="contained" fullWidth size="large">Add to favorites</Button>
              </Box>
  
            </Box>
          </Paper>
        ) : (
          <>
            <Skeleton variant="rectangular" width="100%" height={300} sx={{ mb: 3 }} />
            <Skeleton variant="rectangular" width="100%" height={20} sx={{ mb: 3 }} />
            <Skeleton variant="rectangular" width="100%" height={60} sx={{ mb: 3 }} />
          </>
        )}
      </Container>




    )
}

export default RecipePage;