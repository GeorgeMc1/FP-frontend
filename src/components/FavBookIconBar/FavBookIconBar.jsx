import React, { useState } from "react";
import { toggleFav } from '../../common/toggleFav';
import { toggleBookEntry } from '../../common/toggleBookEntry';
import FavHeartIcon from "../FavHeartIcon/FavHeartIcon.jsx";
import CookBookIcon from '../CookBookIcon/CookBookIcon';
import BookChanger from '../BookChanger/BookChanger';
import "../../css/favBookIconBar.css"

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
    setLoggedInUser,
    favList,
    setFavList, setIsInBook,
    isInBook,
    //only sent from recipeinfopage
    recipeObj
}) => {

    const [update,setUpdate] =useState(false);

    const checkIfFavourites = () => {
        if (!loggedInUser) { return false }
        if (recipeObj) {
            //   console.log("recipie object", recipeObj, recipe, searchResults?.hits, galleryIndex)
            let match = loggedInUser?.favRecipes.includes(recipeObj._links.self.href)
            console.log("match in favs?", match)
            if (match !== update) {setUpdate(match)}
            return match
        } else {
            // console.log("!recipieobj", galleryIndex, searchResults?.hits.length)
            if (galleryIndex >= searchResults?.hits.length) { setIndexMemory(0); galleryIndex = 0 }

            if (loggedInUser) {
                //match if logged in user favourites contains the recipie.self   
                let match = loggedInUser?.favRecipes.includes(searchResults?.hits[galleryIndex]?._links.self.href)
                console.log("match in favs?", match)
                if (match !== update) {setUpdate(match)}
                return match
            }
        }
    }

    const checkIfInCurrentBook = (setIsInBook) => {
        try {


            let currentBook;
            let match;
            for (let i = 0; i < loggedInUser?.books?.length; i++) {
                if (loggedInUser.books[i].bookName === cookBookName) {

                    currentBook = loggedInUser.books[i];
                    console.log(`book found "${cookBookName}" with ${currentBook?.recipes?.length}`)
                }
            }

            if (recipeObj) {
                match = currentBook?.recipes?.includes(recipeObj)
            }
            else {
                match = currentBook?.recipes?.includes(searchResults?.hits[galleryIndex])
            }
            console.log("match in book?", match)
            setIsInBook(match)
            return match;
        }
        catch (err) { console.log(err) }
    }


    return (
        <>
            {loggedInUser ?

                <div className="favBoxIconContainer">

                    <FavHeartIcon
                        favList={favList}
                        setFavList={setFavList}
                        isLiked={checkIfFavourites()}
                        loggedInUser={loggedInUser}
                        toggleFav={toggleFav}
                        recipe={
                            recipeObj ? recipeObj : searchResults.hits[galleryIndex]
                        }
                        jwt={jwt} setCurrentRecipeLiked={setCurrentRecipeLiked}
                        setIsInBook={setIsInBook}
                        isInBook={isInBook} />



                    <CookBookIcon
                        favList={favList}
                        setFavList={setFavList}
                        isLiked={checkIfFavourites()}
                        setIsInBook={setIsInBook}
                        isInBook={checkIfInCurrentBook(setIsInBook)}
                        updateFav={
                            checkIfFavourites() ? false : true

                        }
                        setLoggedInUser={setLoggedInUser}
                        loggedInUser={loggedInUser}
                        toggleCookBookEntry={toggleBookEntry}
                        recipe={
                            recipeObj ? recipeObj : searchResults.hits[galleryIndex]
                        }
                        jwt={jwt}
                        setCurrentRecipeLiked={setCurrentRecipeLiked}
                        cookBookName={cookBookName} />
                    <BookChanger
                        setSearchResults={setSearchResults}
                        setCookBookName={setCookBookName}
                        cookBookName={cookBookName}
                        loggedInUser={loggedInUser} />


                </div>



                :
                <div className="favBox">
                </div>
            }
        </>
    )
}

export default FavBookBar;