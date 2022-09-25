import config from "config";


const { serverAddress } = config;
const collectionName = 'recipes';

const fetchMany = async (urlParams?: string): Promise<Recipe[]> => {
  let url = `${serverAddress}/${collectionName}`;
  if (urlParams) url += `?${urlParams}`;

  const response = await fetch(url);
  const fetchedRecipe = await response.json();

  return fetchedRecipe as Recipe[];
};

const fetchCalorieRange = async (): Promise<NumberRange> => {
  const sortedCalories = (await fetchMany())
    .map((recipe) => recipe.calories)
    .sort((x, y) => x - y);

  return [sortedCalories[0], sortedCalories[sortedCalories.length - 1]];
};

const RecipeService = {
  fetchMany,
  fetchCalorieRange,
};

export default RecipeService;
