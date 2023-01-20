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

import Footer from "./components/Footer";
import PreFooter from "./components/PreFooter/PreFooter";


// import cookie functions
import { getCookie } from "./common";
import NavMenu from "./components/NavMenu/NavMenu";
import { getBook } from "./common/getBook";

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
	useEffect(() => { console.log("searchResults chaged", searchResults) }, [searchResults])
	useEffect(() => { console.log("galleryIndexMemory chaged", galleryIndexMemory) }, [galleryIndexMemory])
	useEffect(() => { console.log("currentRecipeLiked chaged", currentRecipeLiked) }, [currentRecipeLiked])
	useEffect(() => { console.log("loggedInUser data updated", loggedInUser) }, [loggedInUser])
	
	//cookbook chaged
	useEffect(() => {
		console.log("cookbook chaged", cookBookName)
		try {
			 getBook(cookBookName, loggedInUser)
			
			console.log("swapped search results")
		} catch (err) { console.log(err) }
	}, [cookBookName,loggedInUser])

	useEffect(() => { console.log("recipe chaged", recipe) }, [recipe])
	useEffect(() => { console.log("isInBook chaged", isInBook) }, [isInBook])

	useEffect(() => { console.log("favList chaged", favList?.length) }, [favList])

	const loginWithToken = async (cookie) => {
		const user = await authCheck(cookie);

		setJWT(cookie);
		setLoggedInUser(user);
	};

	return (
		<BrowserRouter>
			<NavMenu loggedInUser={loggedInUser}
				recipe={recipe} />


			<Routes>
				<Route path="/" element={<Homepage />} />

				<Route
					path="/searchRecipes"
					element={
						<RecipeSearchPage
							searchResults={searchResults}
							setSearchResults={setSearchResults}
							setLoggedInUser={setLoggedInUser}
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
						path="/viewRecipe"
						element={<RecipeInfoPage
							data={recipe}
							loggedInUser={loggedInUser}
							setSearchResults={setSearchResults}
							setIndexMemory={setIndexMemory}
							jwt={jwt}
							recipe={recipe}
							setLoggedInUser={setLoggedInUser}
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
								setRecipe={setRecipe}
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
