import "./css/common.css";
import React from "react";
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/HomePage";
import HomepageScaff from "./pages/HomePageScaff";
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
// import { useNavigate } from "react-router-dom";

// import cookie functions
import { getCookie } from "./common";
import PreFooter from "./components/PreFooter/PreFooter";

function App() {
	const [jwt, setJWT] = useState();
	const [loggedInUser, setLoggedInUser] = useState();
	const [searchResults, setSearchResults] = useState();
	const [recipe, setRecipe] = useState();
	const [galleryIndexMemory, setIndexMemory] = useState();
	const [currentRecipeLiked, setCurrentRecipeLiked] = useState(false);
	const [cookBookName,setCookBookName] = useState("so taxt doen't need slanting")
	const [isRecipeFaved, setIsRecipeFaved] = useState(false);
	const [isRecipeInCurrentBook, setIsRecipeInCurrentBook] = useState(false);
	// set state to update user and cookie
	// const [cookie, setCookie] = useState();
	// const [user, setUser] = useState();

	useEffect(() => {
		let cookie = getCookie("jwt_token");
		console.log(cookie);
		if (cookie !== false) {
			loginWithToken(cookie); //log in with Token if the cookie exist
		}
	}, []);

	// useEffect(() => {
	// 	window.location.replace("/UserProfile");
	// }, [forcelogin]);

	const loginWithToken = async (cookie) => {
		const user = await authCheck(cookie);
		// setUser(user);
		setJWT(cookie);
		setLoggedInUser(user);
	};

	// tests
	// console.log("set user is:", user);
	// console.log("cookie is:", cookie);
	// console.log("jwt is:", jwt);

	return (
		<BrowserRouter>
			<Navbar
				loggedInUser={loggedInUser}
				setLoggedInUser={setLoggedInUser}
				recipe={recipe}
			/>
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/hpblocks" element={<HomepageScaff />} />
				<Route
					path="/searchRecipes"
					element={
						<RecipeSearchPage
							searchResults={searchResults}
							setSearchResults={setSearchResults}
							setRecipe={setRecipe}
							galleryIndexMemory={galleryIndexMemory}
							setIndexMemory={setIndexMemory}
							loggedInUser={loggedInUser}
							jwt={jwt}
							currentRecipeLiked={currentRecipeLiked}
							setCurrentRecipeLiked={setCurrentRecipeLiked}
							cookBookName={cookBookName}
							setCookBookName={setCookBookName}
							isRecipeFaved={isRecipeFaved}
							setIsRecipeFaved={setIsRecipeFaved}
							isRecipeInCurrentBook={isRecipeInCurrentBook}
							setIsRecipeInCurrentBook={setIsRecipeInCurrentBook}
							recipe={recipe}
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
                			searchResults={searchResults}
                			setCurrentRecipeLiked={setCurrentRecipeLiked}
                			setCookBookName={setCookBookName}
                			cookBookName={cookBookName}
							isRecipeFaved={isRecipeFaved}
							setIsRecipeFaved={setIsRecipeFaved}
							isRecipeInCurrentBook={isRecipeInCurrentBook}
							setIsRecipeInCurrentBook={setIsRecipeInCurrentBook}
							recipe={recipe}
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
