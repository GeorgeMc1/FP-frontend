import React, { useState } from 'react';
import "../../css/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";

import FavBookBar from '../FavBookBar/FavBookBar';

//https://www.npmjs.com/package/react-responsive-carousel

const RecipeGallery = ({ jwt,
    currentRecipeLiked,
    setCurrentRecipeLiked,
    searchResults,
    setSearchResults,
    setRecipe,
    galleryIndexMemory,
    setIndexMemory,
    cookBookName,
    setCookBookName,
    loggedInUser,
    isRecipeFaved,
    setIsRecipeFaved,
    isRecipeInCurrentBook,
    setIsRecipeInCurrentBook
}) => {
    const navigate = useNavigate();
    const [galleryIndex, setGalleryIndex] = useState(galleryIndexMemory || 0)

    console.log(searchResults, galleryIndex)

    const onSlideChange = (index) => {
        //store Carousel's current recipie index 
        console.log(index, searchResults.hits)
        //store current gallery slide in state for use outside Carousel
        setGalleryIndex(index)
        setIndexMemory(index)
        setCurrentRecipeLiked(checkIfFavourites())
    }

    const tapped = (index) => {
        console.debug("tapped", index)
        console.debug(searchResults.hits[index])
        setRecipe(searchResults.hits[index]);
        setIndexMemory(index);
        navigate("/viewRecipie", {
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
    if (loggedInUser) console.log("isliked", isRecipeFaved)
    return (
        <>
            <div className="Carousel" >
                {loggedInUser ?
                    <FavBookBar
                        loggedInUser={loggedInUser}
                        galleryIndex={galleryIndex}
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
						setIsRecipeInCurrentBook={setIsRecipeInCurrentBook}/>
                    :
                    <div className="favBox">

                    </div>
                }
                <Carousel
                    selectedItem={galleryIndex >= searchResults?.hits.length ? galleryIndex : 0}
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
                            let image = result.recipe.image
                            let legend = result.recipe.label
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