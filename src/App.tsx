import RegisterPage from 'pages/auth/register';
import RecipePage from 'pages/recipe-page/index';
import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';



const App: React.FC = () => (
    <BrowserRouter>
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/recipes" element={<RecipePage />} />
    </Routes>
  </BrowserRouter>
);

export default App;



