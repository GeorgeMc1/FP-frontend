import './css/common.css';
import React from "react";
//import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Homepage from "./views/HomePage"
import LoginPage from "./views/LoginPage"
import PageNotFound from './views/PageNotFound';
import RecipeInfoPage from './views/RecipeInfoPage';
import RecipeSearchPage from './views/RecipeSearchPage';
import RegisterPage from "./views/RegisterPage";
import UserProfilePage from "./views/UserProfilePage"
import Navbar from "./components/Navbar"
import { useState } from 'react';



function App() {


  const [searchResults, setSearchResults] = useState();
  const [recipe,setRecipe]=useState()
  return (
    

  
    <BrowserRouter >
    <Navbar />
    <Routes>
      <Route
        path="/"
        element={
          <Homepage />
        }
      />

      <Route
        path="/searchRecipes"
        element={
          <RecipeSearchPage searchResults={searchResults} setSearchResults={setSearchResults} setRecipe={setRecipe}/>
        }
      />
      <Route
        path="/viewRecipie"
        element={
          <RecipeInfoPage recipe={recipe}/>
        }
      />
      <Route
        path="/registerUser"
        element={
          <RegisterPage />
        }
      />
      <Route
        path="/UserProfile"
        element={
          <UserProfilePage />
        }
      />
      <Route
        path="/login"
        element={
          <LoginPage action="login" />
        }
      />
      <Route
        path="/logout"
        element={
          <LoginPage action="logout" />
        }
      />
      <Route
        path="*"
        element={
        <PageNotFound />
        }
      />
    </Routes>
    
    </BrowserRouter>
   

  );
}

export default App;
