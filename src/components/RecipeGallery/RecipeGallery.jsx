import React, { useState } from 'react';
import "../../css/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";

import FavHeartIcon from "../../components/FavHeartIcon/FavHeartIcon.jsx";
import CookBookIcon from '../CookBookIcon/CookBookIcon';

import { toggleFav } from '../../common/toggleFav';
import { toggleBookEntry } from '../../common/toggleBookEntry';

//https://www.npmjs.com/package/react-responsive-carousel

const RecipeGallery = ({ jwt, 
    currentRecipeLiked,
    setCurrentRecipeLiked, 
    searchResults, 
    setRecipe, 
    galleryIndexMemory, 
    setIndexMemory, 
    loggedInUser }) => {

    const navigate = useNavigate();

    const [searchResultHits] = useState(searchResults.hits);
    const [cookBookName]=useState("Valentine")
    console.log(galleryIndexMemory)

    const [galleryIndex, setGalleryIndex] = useState(galleryIndexMemory || 0)
   // const [liked, setLiked] = useState(false)
    console.log(searchResults,searchResultHits,galleryIndex  )

    const onSlideChange = (index) => {
        //store Carousel's current recipie index 
        console.log(index, searchResultHits)
        //store current gallery slide in state for use outside Carousel
        setGalleryIndex(index)
        setIndexMemory(index)
        setCurrentRecipeLiked(checkIfFavourites())
    }

    const tapped = (index) => {
        console.debug("tapped", index)
        console.debug(searchResultHits[index])
        setRecipe(searchResultHits[index]);
        setIndexMemory(index);
        navigate("/viewRecipie", {
        });
    }

    const checkIfFavourites = () => {
        //match if logged in user favourites contains the recipie.self 
        console.log(`galleryIndex ${galleryIndex} searchresultshits `,searchResultHits)
        if (galleryIndex >= searchResultHits.length) {setIndexMemory(0)}
        let match = loggedInUser.favRecipes.includes(searchResultHits[galleryIndex]._links.self.href)
        console.log("match in favs =", match)
        return match
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
                        <FavHeartIcon isLiked={checkIfFavourites()} loggedInUser={loggedInUser} toggleFav={toggleFav} recipe={searchResultHits[galleryIndex]} jwt={jwt}  setCurrentRecipeLiked={setCurrentRecipeLiked}/>

                        <div className="favTotal">
                            <p >
                                {galleryIndex}
                            </p>
                        </div >
                        <div className="cooKbook">
                            <CookBookIcon isLiked={checkIfFavourites()} updateFav={false} loggedInUser={loggedInUser} toggleCookBookEntry={toggleBookEntry} recipe={searchResultHits[galleryIndex]} jwt={jwt}  setCurrentRecipeLiked={setCurrentRecipeLiked} cookBookName={cookBookName}/>
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
                        searchResultHits.map((result, index) => {
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

