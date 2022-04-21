import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { Link } from "react-router-dom";
import './App.css';
import DisplaySearch from './components/DisplaySearch';
import FavoritesList from './components/FavoritesList';
import MainPage from './components/MainPage';
import SearchForm from './components/SearchForm';
import RecipeDetails from './components/RecipeDetails';
import RecipeContextProvider from './context/RecipeContextProvider';

const linkStyles={
  color: 'peachpuff',
}

function App() {
  return (
    <RecipeContextProvider>
      <Router>
        <header>
          <h1><Link to="/" style={linkStyles}>Recipes</Link></h1>
          <Link to="/favorites" style={linkStyles}>View Favorites</Link>
        </header>
        <Routes>
          <Route path="/" element={<MainPage/>}/>
          <Route path ="/details" element = {<RecipeDetails/>}/>
          <Route path = "/searchResults" element = {<DisplaySearch/>}/>
          <Route path = "/favorites" element = {<FavoritesList/>}/>
          <Route path = "/searchForm" element = {<SearchForm/>}/>
          <Route path = "*" element={<Navigate to = "/"/>}/>
        </Routes>
      </Router>
    </RecipeContextProvider>
  );
}

export default App;
