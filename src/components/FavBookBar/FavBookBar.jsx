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
cookBookName
    
}) => {
    const checkIfFavourites = () => {
        if (galleryIndex >= searchResults?.hits.length) { setIndexMemory(0) }
        if (loggedInUser && searchResults?.hits.length > 0) {
            //match if logged in user favourites contains the recipie.self   
            let match = loggedInUser?.favRecipes.includes(searchResults?.hits[galleryIndex]?._links.self.href)
            return match
        }
    }
    return (
        <>
        {loggedInUser ?
                    <div className="favBox">
                        <FavHeartIcon isLiked={checkIfFavourites()} loggedInUser={loggedInUser} toggleFav={toggleFav} recipe={searchResults.hits[galleryIndex]} jwt={jwt} setCurrentRecipeLiked={setCurrentRecipeLiked} />
                        <div className="favTotal">
                            <p >
                                {galleryIndex}
                            </p>
                        </div >
                        <div className="cooKbook">
                            <CookBookIcon isLiked={checkIfFavourites()} updateFav={false} loggedInUser={loggedInUser} toggleCookBookEntry={toggleBookEntry} recipe={searchResults.hits[galleryIndex]} jwt={jwt} setCurrentRecipeLiked={setCurrentRecipeLiked} cookBookName={cookBookName} />
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