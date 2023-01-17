import React, { useState } from 'react';
import "../../css/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";

import FavHeartIcon from "../../components/FavHeartIcon/FavHeartIcon.jsx";
import CookBookIcon from '../CookBookIcon/CookBookIcon';

import { toggleFav } from '../../common/toggleFav';
import { toggleBookEntry } from '../../common/toggleBookEntry';
import BookChanger from '../BookChanger/BookChanger';

//https://www.npmjs.com/package/react-responsive-carousel

const RecipeGallery = ({ jwt,
    currentRecipeLiked,
    setCurrentRecipeLiked,
    searchResults,
    setSearchResults,
    setRecipe,
    galleryIndexMemory,
    setIndexMemory,
    loggedInUser }) => {

    const navigate = useNavigate();

    // const [searchResults.hits] = useState(searchResults.hits);
    const [cookBookName,setCookBookName] = useState("so taxt doen't need slanting")
    console.log(galleryIndexMemory)

    const [galleryIndex, setGalleryIndex] = useState(galleryIndexMemory || 0)
    // const [liked, setLiked] = useState(false)
    console.log(searchResults, searchResults.hits, galleryIndex)

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

        if (loggedInUser && searchResults.hits.length > 0) {
            //match if logged in user favourites contains the recipie.self 
            console.log(`galleryIndex ${galleryIndex} searchresultshits `, searchResults.hits)
            if (galleryIndex >= searchResults.hits.length) { setIndexMemory(0) }
            let match = loggedInUser?.favRecipes.includes(searchResults.hits[galleryIndex]._links.self.href)
            console.log("match in favs =", match)
            return match
        }


    }






    //liked state needed to rerender 
    //can use in html isLiked but before slide change states not fixed so first 
    //side wont toggle on/off properly
    //easiest work around is as is
    //console.log here to use the state so netlfy stops crying
    if (loggedInUser) console.log("isliked", checkIfFavourites(), currentRecipeLiked)
    return (
        <>

            <div className="Carousel" >

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
                            
                            <BookChanger setSearchResults={setSearchResults}setCookBookName={setCookBookName} cookBookName={cookBookName} loggedInUser={loggedInUser}/>
                        </div>
                    </div>
                    :
                    <div className="favBox">
                    </div>
                }

                <Carousel
                    selectedItem={galleryIndex}
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