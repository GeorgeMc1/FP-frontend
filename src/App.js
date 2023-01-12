import "./css/common.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import { authCheck } from "./utils";
import LogOutPage from "./views/LogOutPage";
import PageNotFound from "./views/PageNotFound";
import RecipeInfoPage from "./views/RecipeInfoPage";
import RecipeSearchPage from "./views/RecipeSearchPage";
import RegisterPage from "./views/RegisterPage";
import UserProfilePage from "./views/UserProfilePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// import cookie functions
import { getCookie } from "./common";

function App() {
	const [jwt, setJWT] = useState();
	const [loggedInUser, setLoggedInUser] = useState();
	const [searchResults, setSearchResults] = useState();
	const [recipe, setRecipe] = useState();
	const [galleryIndexMemory, setIndexMemory] = useState();
	// set state to update user and cookie

	const [cookie, setCookie] = useState();
	const [user, setUser] = useState();

	useEffect(() => {
		let cookie = getCookie("jwt_token");
		if (cookie !== false) {
			loginWithToken(cookie); //log in with Token if the cookie exist
		}
	}, []);

	const loginWithToken = async (cookie) => {
		const user = await authCheck(cookie);
		setUser(user);
		setCookie(cookie);
	};

	// tests
	console.log("set user is:", user);
	console.log("cookie is:", cookie);
	console.log("jwt is:", jwt);

	return (
		<BrowserRouter>
			<Navbar
				loggedInUser={loggedInUser}
				setLoggedInUser={setLoggedInUser}
				recipe={recipe}
			/>
			<Routes>
				<Route path="/" element={<Homepage />} />

				<Route
					path="/SearchRecipes"
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
				{recipe ? (
					<Route
						path="/ViewRecipie"
						element={<RecipeInfoPage data={recipe} />}
					/>
				) : null}

				<Route path="/SignUp"
					element={
						<RegisterPage
							setJWT={setJWT}
							setter={setLoggedInUser}
						/>
					}
				/>

				<Route
					path="/UserProfile"
					element={
						<UserProfilePage
							loggedInUser={loggedInUser}
							setLoggedInUser={setLoggedInUser}
							jwt={jwt}
							setJWT={setJWT}
						/>
					}
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

				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
