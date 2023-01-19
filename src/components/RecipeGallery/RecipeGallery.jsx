import React, { useState } from 'react';
import "../../css/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";

import FavBookIconBar from '../FavBookIconBar/FavBookIconBar';

//https://www.npmjs.com/package/react-responsive-carousel

const RecipeGallery = ({ jwt,
    currentRecipeLiked, setCurrentRecipeLiked,
    searchResults, setSearchResults,
    setRecipe, recipe,
    galleryIndexMemory, setIndexMemory,
    cookBookName, setCookBookName,
    currentRecipeInCurrentBook, setCurrentInCurrentBook,
    loggedInUser,
    favList,
    setFavList,
    isInBook,setIsInBook
}) => {

    const navigate = useNavigate();
    const [galleryIndex, setGalleryIndex] = useState(galleryIndexMemory || 0)

    console.log("entering gallery searchresults / index = ", searchResults, galleryIndex)

    const onSlideChange = (index) => {
        //store Carousel's current recipie index 
        //store current gallery slide in state for use outside Carousel
        setGalleryIndex(index)
        setIndexMemory(index)
        setCurrentRecipeLiked(checkIfFavourites())
    }

    const tapped = (index) => {
        setRecipe(searchResults.hits[index]);
        setIndexMemory(index);
        navigate("/viewRecipe", {
        });
    }

    const checkIfFavourites = () => {
        if (galleryIndex >= searchResults?.hits.length) { setIndexMemory(0) }
        if (loggedInUser && searchResults.hits.length > 0) {
            //match if logged in user favourites contains the recipie.self   
            let match = loggedInUser?.favRecipes.includes(searchResults?.hits[galleryIndex]?._links.self.href)
            return match
        }
    }

    //liked state needed to rerender 
    //can use in html isLiked but before slide change states not fixed so first 
    //side wont toggle on/off properly
    //easiest work around is as is
    //console.log here to use the state so netlfy stops crying
    if (galleryIndex >= searchResults?.hits.length) { setIndexMemory(0); }
  
    return (
        <>

            <div className="Carousel" >
                {loggedInUser ?

                    <FavBookIconBar
                        loggedInUser={loggedInUser}
                        galleryIndex={galleryIndex}
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
                        isInBook={isInBook}
                         setIsInBook={setIsInBook}
                    />
                    :
                    <div className="favBox">

                    </div>

                }

                <Carousel
                    selectedItem={galleryIndex >= searchResults?.hits?.length ? galleryIndex : 0}
                    // infiniteLoop={true}
                    useKeyboardArrows={true}
                    emulateTouch={true}
                    className='search-carousel'
                    onChange={onSlideChange}
                    onClickItem={tapped}
                    swipeable={true}
                // autoPlay={true}
                >
                    {
                        searchResults.hits.map((result, index) => {
                            let image = result?.recipe?.image
                            let legend = result?.recipe?.label
                            return (
                                <div key={index}>

                                    <img src={image} alt={legend} ></img>
                                    <p className="legend">{legend} 1</p>
                                </div>
                            )
                        }
                        )
                    }
                </Carousel>
            </div></>
    )

};
export default RecipeGallery;