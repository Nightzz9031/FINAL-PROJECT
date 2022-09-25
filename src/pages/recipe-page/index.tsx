import * as React from 'react';
import { useMediaQuery, type Theme } from '@mui/material';



import { DrawerProvider } from './contexts/drawer-context';
import { RecipeContextProvider } from './contexts/recipe-context';
import DrawerButton from './components/drawer-button';
import MainSection from './components/main-section/index.';
import ApplicationBar from './components/application-bar';
import SideBar from './components/side-bar';

const RecipePage: React.FC = () => {
  const isExtendedLayout = useMediaQuery<Theme>((theme) => theme.breakpoints.up('xl'));

  return (
    <RecipeContextProvider>
      <DrawerProvider>
        <ApplicationBar />
        <SideBar isExtendedLayout={isExtendedLayout} />
        <MainSection isExtendedLayout={isExtendedLayout} />
        {!isExtendedLayout && <DrawerButton />}
      </DrawerProvider>
    </RecipeContextProvider>
  );
};

export default RecipePage; 