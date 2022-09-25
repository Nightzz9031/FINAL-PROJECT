import useFetchedState from 'hooks/use-fetched.state';
import * as React from 'react';
import DietService from 'services/diet-service';
import RecipeService from 'services/recipe-service';
import useCheckboxFilter, { type CheckboxFilter } from '../hooks/use-checkbox-filter';
import useRangeFilter, { type RangeFilter } from '../hooks/use-range-filter'


type RecipeContextValue = {
  recipes: Recipe[],
  calorieFilter: RangeFilter,
  dietFilter: CheckboxFilter,
};

const fetchDietOptions = async () => {
    const FetchedDiet = await DietService.fetchMany();
  
    return FetchedDiet.map(({ id, title }) => ({
      value: id,
      label: title,
    }));
  };

const RecipeContext = React.createContext({} as RecipeContextValue);

export const RecipeContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const recipes = useFetchedState({
    fetchEntities: RecipeService.fetchMany,
    watchUrl: true,
  });

  const dietFilter = useCheckboxFilter({
    urlParamName: 'diet',
    fetchOptions: fetchDietOptions,
  });

  const calorieFilter = useRangeFilter({
    urlParamNames: ['calories_gte', 'calories_lte'],
    fetchRange: RecipeService.fetchCalorieRange,
  });


  const recipeContextValue: RecipeContextValue = React.useMemo(() => ({
    recipes,
    calorieFilter,
    dietFilter,
  }), [recipes, calorieFilter, dietFilter]);

  return (
    <RecipeContext.Provider value={recipeContextValue}>{children}</RecipeContext.Provider>
  );
};

export default RecipeContext;
