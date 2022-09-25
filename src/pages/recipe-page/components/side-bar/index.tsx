import React from 'react';
import { Divider } from '@mui/material';
import SideBarContainer from './side-bar-container';

import RangeField from 'components/form-controls/range-field';
import CheckboxGroup from 'components/form-controls/checkbox-group';
import DrawerContext from 'pages/recipe-page/contexts/drawer-context';
import RecipeContext from 'pages/recipe-page/contexts/recipe-context';
import DrawerHeader from '../drawer-header';


type SideBarProps = {
  isExtendedLayout: boolean
};

const SideBar: React.FC<SideBarProps> = ({ isExtendedLayout }) => {
  const { open } = React.useContext(DrawerContext);

  const { calorieFilter, dietFilter } = React.useContext(RecipeContext);

  return (
    <SideBarContainer variant={isExtendedLayout ? 'permanent' : 'temporary'} open={open}>
      <DrawerHeader />
      <RangeField
        label="Calories"
        min={calorieFilter.bounds[0]} 
        max={calorieFilter.bounds[1]}
        value={calorieFilter.range}
        onChange={(_, newRange) => calorieFilter.onChange(newRange)}
      />
      <Divider sx={{ my: 2 }} />
      <CheckboxGroup
        label="Diet"
        name="diet"
        options={dietFilter.options}
        value={dietFilter.selectedOptions}
        onChange={(_, newDiet) => dietFilter.onChange(newDiet)}
      />
    </SideBarContainer>
  );
};

export default SideBar;
