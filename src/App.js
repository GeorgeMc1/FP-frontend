import "./css/common.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import { authCheck } from "./utils";
import LogOutPage from "./pages/LogOutPage";
import PageNotFound from "./pages/PageNotFound";
import RecipeInfoPage from "./pages/RecipeInfoPage";
import RecipeSearchPage from "./pages/RecipeSearchPage";
import RegisterPage from "./pages/RegisterPage";
import UserProfilePage from "./pages/UserProfilePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import PreFooter from "./components/PreFooter/PreFooter";


// import cookie functions
import { getCookie } from "./common";

function App() {
	const [jwt, setJWT] = useState();
	const [loggedInUser, setLoggedInUser] = useState();
	const [searchResults, setSearchResults] = useState();
	const [recipe, setRecipe] = useState();
	const [galleryIndexMemory, setIndexMemory] = useState();
	const [currentRecipeLiked, setCurrentRecipeLiked] = useState(false);
	const [cookBookName, setCookBookName] = useState("test")
	const [currentRecipeInCurrentBook, setCurrentInCurrentBook] = useState();
	const [favList, setFavList] = useState();
	const [isInBook, setIsInBook] = useState();
	useEffect(() => {
		let cookie = getCookie("jwt_token");
		if (cookie !== false) {
			loginWithToken(cookie); //log in with Token if the cookie exist
		}
	}, []);
	
	useEffect(() => { console.log("cookbook chaged", cookBookName) }, [cookBookName])
	useEffect(() => { console.log("recipe chaged", recipe) }, [recipe])

	const loginWithToken = async (cookie) => {
		const user = await authCheck(cookie);

		setJWT(cookie);
		setLoggedInUser(user);
	};

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
					path="/searchRecipes"
					element={
						<RecipeSearchPage
							searchResults={searchResults}
							setSearchResults={setSearchResults}

							galleryIndexMemory={galleryIndexMemory}
							setIndexMemory={setIndexMemory}
							loggedInUser={loggedInUser}
							jwt={jwt}
							recipe={recipe} setRecipe={setRecipe}
							currentRecipeLiked={currentRecipeLiked}
							setCurrentRecipeLiked={setCurrentRecipeLiked}
							cookBookName={cookBookName}
							setCookBookName={setCookBookName}
							currentRecipeInCurrentBook={currentRecipeInCurrentBook}
							setCurrentInCurrentBook={setCurrentInCurrentBook}
							favList={favList}
							setFavList={setFavList}
							isInBook={isInBook} setIsInBook={setIsInBook}

						/>
					}
				/>
				{recipe ? (
					<Route
						path="/viewRecipie"
						element={<RecipeInfoPage
							data={recipe}
							loggedInUser={loggedInUser}
							setSearchResults={setSearchResults}
							setIndexMemory={setIndexMemory}
							jwt={jwt}
							recipe={recipe}
							searchResults={searchResults}
							setCurrentRecipeLiked={setCurrentRecipeLiked}
							setCookBookName={setCookBookName}
							cookBookName={cookBookName}
							currentRecipeInCurrentBook={currentRecipeInCurrentBook}
							setCurrentInCurrentBook={setCurrentInCurrentBook}
							favList={favList}
							setFavList={setFavList}
							isInBook={isInBook} setIsInBook={setIsInBook}
						/>}
					/>
				) : null}


				<Route
					path="/SignUp"
					element={
						<RegisterPage
							setJWT={setJWT}
							setter={setLoggedInUser}
						/>
					}
				/>
				{/* {jwt ? ( */}
				<Route
					path="/UserProfile"
					element={
						jwt ? (
							<UserProfilePage
								loggedInUser={loggedInUser}
								setLoggedInUser={setLoggedInUser}
								jwt={jwt}
								setJWT={setJWT}
								setSearchResults={setSearchResults}
								cookBookName={cookBookName}
								setCookBookName={setCookBookName}
							/>
						) : (
							<Homepage />
						)
					}
				/>
				{/* ) : null} */}

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
							jwt={jwt}
						/>
					}
				/>

				<Route path="*" element={<PageNotFound />} />
			</Routes>
			<PreFooter />
			<Footer />
		</BrowserRouter>
	);
}

export default App;
