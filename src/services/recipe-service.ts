import config from 'config';

const { serverAddress } = config;
const collectionName = 'recipes';

const fetchMany = async (urlParams?: string): Promise<Recipe[]> => {
  let url = `${serverAddress}/${collectionName}`;
  if (urlParams) url += `?${urlParams}`;

  const response = await fetch(url);
  const fetchedRecipe = await response.json();

  return fetchedRecipe as Recipe[];
};

const fetchOne = async (id: any): Promise<Recipe> => {
  const response = await fetch(`${serverAddress}/${collectionName}/${id}`);
  const fetchedRecipe = await response.json();

  return fetchedRecipe as Recipe;
}; 

const RecipeService = {
  fetchMany,
  fetchOne,
};

export default RecipeService;
