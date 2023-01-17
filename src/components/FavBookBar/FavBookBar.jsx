import React from "react";
import { toggleFav } from '../../common/toggleFav';
import { toggleBookEntry } from '../../common/toggleBookEntry';
import FavHeartIcon from "../../components/FavHeartIcon/FavHeartIcon.jsx";
import CookBookIcon from '../CookBookIcon/CookBookIcon';
import BookChanger from '../BookChanger/BookChanger';
import { getBook } from "../../common/getBook";

const FavBookBar = ({
    loggedInUser,
    galleryIndex, 
    searchResults,
    setIndexMemory,
    jwt,
    setSearchResults,
    setCurrentRecipeLiked,
    setCookBookName,
    cookBookName,
    isRecipeFaved,
    setIsRecipeFaved,
    isRecipeInCurrentBook,
    setIsRecipeInCurrentBook,
    recipe
}) => {
    let tempRecipe
    const checkIfFavourites = () => {
        if (searchResults?.hits){
            if (galleryIndex >= searchResults?.hits?.length) { setIndexMemory(0) }
            if (loggedInUser && searchResults) {
                //match if logged in user favourites contains the recipie.self   
                let match = loggedInUser?.favRecipes.includes(searchResults?.hits[galleryIndex]?._links.self.href)
                console.log("matched", match);
                // console.log("fav recipes", loggedInUser?.favRecipes);
                console.log("what we're looking for", searchResults?.hits[galleryIndex]?._links.self.href);
                console.log("search results",searchResults)
                tempRecipe = searchResults?.hits[galleryIndex];
                setIsRecipeFaved(true);
                return match
            }
        } else {
            if (loggedInUser && searchResults) {
                //match if logged in user favourites contains the recipie.self   
                let match = loggedInUser?.favRecipes.includes(searchResults?._links.self.href)
                console.log("matched", match);
                console.log("fav recipes", loggedInUser?.favRecipes);
                console.log("search results",searchResults)
                tempRecipe = searchResults[galleryIndex];
                setIsRecipeFaved(true);
                return match
            }
        }
    }
    const checkIfInCurrentBook = async (currentRecipe) => {
        console.log(currentRecipe)
        if(loggedInUser){
            try{
                let book = await getBook(cookBookName, loggedInUser);
                console.log("current recipe",currentRecipe)
                if(book.recipes.includes(currentRecipe)){
                    console.log("recipe is in current book");
                    setIsRecipeInCurrentBook(true);
                    return true;
                } else {
                    setIsRecipeInCurrentBook(false);
                    console.log("not in book");
                    return false;
                }
            } catch(error){
                console.log(error);
            }
        }
    }
    return (
        <>
        {loggedInUser ?
                    <div className="favBox">
                        <FavHeartIcon
                            isLiked={checkIfFavourites()}
                            loggedInUser={loggedInUser}
                            toggleFav={toggleFav}
                            recipe={tempRecipe}
                            jwt={jwt}
                            setCurrentRecipeLiked={setCurrentRecipeLiked}
                            isRecipeFaved={isRecipeFaved}
                            setIsRecipeFaved={setIsRecipeFaved}
                            isRecipeInCurrentBook={isRecipeInCurrentBook}
                            setIsRecipeInCurrentBook={setIsRecipeInCurrentBook}
                            />
                        <div className="favTotal">
                            <p >
                                {galleryIndex}
                            </p>
                        </div >
                        <div className="cooKbook">
                            <CookBookIcon
                                isLiked={checkIfFavourites()}
                                updateFav={false}
                                loggedInUser={loggedInUser}
                                toggleCookBookEntry={toggleBookEntry}
                                recipe={tempRecipe}
                                jwt={jwt}
                                setCurrentRecipeLiked={setCurrentRecipeLiked}
                                cookBookName={cookBookName}
                                isRecipeFaved={isRecipeFaved}
                                setIsRecipeFaved={setIsRecipeFaved}
                                isRecipeInCurrentBook={isRecipeInCurrentBook}
                                setIsRecipeInCurrentBook={setIsRecipeInCurrentBook}
                                inCurrentBook={checkIfInCurrentBook(recipe)}/>
                        </div>
                        <div className="bookchanger" >
                            <BookChanger setSearchResults={setSearchResults} setCookBookName={setCookBookName} cookBookName={cookBookName} loggedInUser={loggedInUser} />
                        </div>
                    </div>
                    :
                    <div className="favBox">
                    </div>
                }
        </>
    )
}

export default FavBookBar;