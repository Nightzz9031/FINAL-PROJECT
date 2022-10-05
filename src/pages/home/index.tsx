import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';
import RecipeCard from './recipe-card';
import RecipeService from 'services/recipe-service';


const Home: React.FC = () => {
    const [recipes, setRecipe] = React.useState<Recipe[]>();
    
    const handleClick = () => {
        console.log(recipes);
    };

    React.useEffect(() => {
        (async () => {
          const fetchedRecipe = await RecipeService.fetchMany();
    
          setRecipe(fetchedRecipe);
        })();
      }, []);
      
    return (
        <Box>
            <Box component="main">
            <Typography>THIS IS A HOMEPAGE</Typography>
            <Toolbar sx={{ alignItems: 'stretch'}}>
                <Link to="/profile">Profile</Link>
                <Link to="/favorites">Favorites</Link>
                <Link to="/recipes">Recipe</Link>
                <Link to="/auth/register">Register here!</Link>
                <button onClick={handleClick}>CLICK</button>
            </Toolbar>
            {recipes?.map((recipe) => (
            <RecipeCard 
                key={recipe.id}
                id={recipe.id}
                title={recipe.title}
                description={recipe.description}
                images={recipe.images}
                calories={recipe.calories}
            />
            ))}
            </Box>
        </Box>
        
    )
}

export default Home;