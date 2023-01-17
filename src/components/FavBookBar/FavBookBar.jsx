import React from "react";
import { toggleFav } from '../../common/toggleFav';
import { toggleBookEntry } from '../../common/toggleBookEntry';
import FavHeartIcon from "../../components/FavHeartIcon/FavHeartIcon.jsx";
import CookBookIcon from '../CookBookIcon/CookBookIcon';
import BookChanger from '../BookChanger/BookChanger';

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
    favList,
    setFavList,
    //only sent from recipeinfopage
    recipeObj
}) => {
    const checkIfFavourites = () => {
        if (!loggedInUser) { return false }
        if (recipeObj) {
         //   console.log("recipie object", recipeObj, recipe, searchResults?.hits, galleryIndex)
            let match = loggedInUser?.favRecipes.includes(recipeObj._links.self.href)
           // console.log(match)
            return match
        } else {
           // console.log("!recipieobj", galleryIndex, searchResults?.hits.length)
            if (galleryIndex >= searchResults?.hits.length) { setIndexMemory(0); galleryIndex = 0 }

            if (loggedInUser) {
                //match if logged in user favourites contains the recipie.self   
                let match = loggedInUser?.favRecipes.includes(searchResults?.hits[galleryIndex]?._links.self.href)
                return match
            }
        }
    }
    return (
        <>
            {loggedInUser ?
                <div className="favBox">
                    <FavHeartIcon
                        favList={favList}
                        setFavList={setFavList}
                        isLiked={checkIfFavourites()}
                        loggedInUser={loggedInUser}
                        toggleFav={toggleFav}
                        recipe={
                            recipeObj ? recipeObj : searchResults.hits[galleryIndex]
                        }
                        jwt={jwt} setCurrentRecipeLiked={setCurrentRecipeLiked} />
                    <div className="favTotal">
                        <p >
                            {galleryIndex}
                        </p>
                    </div >
                    <div className="cooKbook">
                        <CookBookIcon
                            favList={favList}
                            setFavList={setFavList}
                            isLiked={checkIfFavourites()}
                            updateFav={false}
                            loggedInUser={loggedInUser}
                            toggleCookBookEntry={toggleBookEntry}
                            recipe={
                                recipeObj ? recipeObj : searchResults.hits[galleryIndex]
                            }
                            jwt={jwt}
                            setCurrentRecipeLiked={setCurrentRecipeLiked}
                            cookBookName={cookBookName} />
                    </div>
                    <div className="bookchanger" >

                        <BookChanger
                            setSearchResults={setSearchResults}
                            setCookBookName={setCookBookName}
                            cookBookName={cookBookName}
                            loggedInUser={loggedInUser} />
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