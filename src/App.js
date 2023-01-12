import "./css/common.css";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import LogOutPage from "./views/LogOutPage";
import PageNotFound from "./views/PageNotFound";
import RecipeInfoPage from "./views/RecipeInfoPage";
import RecipeSearchPage from "./views/RecipeSearchPage";
import RegisterPage from "./views/RegisterPage";
import UserProfilePage from "./views/UserProfilePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"



function App() {
	const [jwt, setJWT] = useState();
	const [loggedInUser, setLoggedInUser] = useState();
	const [searchResults, setSearchResults] = useState();
	const [recipe, setRecipe] = useState();
	const [galleryIndexMemory, setIndexMemory] = useState();


	return (
		<BrowserRouter>
			<Navbar loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} recipe={recipe}/>
			<Routes>
				<Route
					path="/" element={<Homepage />}
				/>

				<Route
					path="/searchRecipes"
					element={
						<RecipeSearchPage
							searchResults={searchResults}
							setSearchResults={setSearchResults}
							setRecipe={setRecipe}
							galleryIndexMemory={galleryIndexMemory}
							 setIndexMemory={setIndexMemory}
						/>
					}
				/>
				{recipe ?
					<Route
						path="/viewRecipie"
						element={
							<RecipeInfoPage
								data={recipe}
							/>
						}
					/>
					:
					null}

				<Route
					path="/registerUser"
					element={<RegisterPage />} />

				<Route
					path="/UserProfile"
					element={
						<UserProfilePage
							loggedInUser={loggedInUser}
							setLoggedInUser={setLoggedInUser}
							jwt={jwt}
							setJWT={setJWT}
						/>}
				/>

				<Route
					path="/logout"
					element={
						<LogOutPage
							setJWT={setJWT}
							setter={setLoggedInUser}
							action="logout"
						/>
					}
				/>

				<Route
					path="/login"
					element={
						<LoginPage
							setJWT={setJWT}
							setter={setLoggedInUser}
							action="login"
						/>
					}
				/>

				<Route
					path="*"
					element={<PageNotFound />}
				/>

			</Routes>
			<Footer/>
		</BrowserRouter>
	);




}

export default App;
