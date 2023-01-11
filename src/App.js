import "./css/common.css";
import React from "react";
import { useState } from "react";
//import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./views/HomePage";
import LoginPage from "./views/LoginPage";
import PageNotFound from "./views/PageNotFound";
import RecipeInfoPage from "./views/RecipeInfoPage";
import RecipeSearchPage from "./views/RecipeSearchPage";
import RegisterPage from "./views/RegisterPage";
import UserProfilePage from "./views/UserProfilePage";
import Navbar from "./components/Navbar";

function App() {
	const [jwt, setJWT] = useState();
	const [loggedInUser, setLoggedInUser] = useState();

	return (
		<BrowserRouter>
			<Navbar />
			<br />
			<br />
			<br />
			{jwt ? <p>{jwt}</p> : null}
			{loggedInUser ? <p>{loggedInUser.username}</p> : null}
			<Routes>
				<Route path="/" element={<Homepage />} />

				<Route path="/searchRecipes" element={<RecipeSearchPage />} />
				<Route path="/viewRecipie" element={<RecipeInfoPage />} />
				<Route path="/registerUser" element={<RegisterPage />} />
				<Route path="/UserProfile" element={<UserProfilePage />} />
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
					path="/logout"
					element={
						<LoginPage
							setJWT={setJWT}
							setter={setLoggedInUser}
							action="logout"
						/>
					}
				/>
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
