import Home from 'pages/home';
import ProfilePage from 'pages/profile';
import FavoritesPage from 'pages/favorites';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipePage from 'pages/recipe';
import RegistrationPage from 'pages/auth/register';
import AuthLayout from 'pages/auth/components/auth-layout';

const App: React.FC = () => (
  <BrowserRouter>
  <Routes>

    <Route>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/favorites" element={<FavoritesPage />} />
      <Route path="/recipes/:id" element={<RecipePage />} />
    </Route>

    <Route path="/auth">
      <Route path="/auth/register" element={<RegistrationPage />} />
      {/* <Route path="/login" element={<LoginPage />} /> */}
    </Route>

  </Routes> 
</BrowserRouter>
);

export default App;



