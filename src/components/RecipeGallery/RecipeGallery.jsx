import React, { useEffect, useState } from 'react';
import "../../css/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";
import { updateUser } from '../../utils';
import FavHeartIcon from "../../components/FavHeartIcon/FavHeartIcon.jsx";

//https://www.npmjs.com/package/react-responsive-carousel

const RecipeGallery = ({ jwt, searchResults, setRecipe, galleryIndexMemory, setIndexMemory, loggedInUser }) => {
    console.debug(searchResults)
    console.debug(loggedInUser)
    const navigate = useNavigate();

    const [isCurrentIndexLiked, setIsCurrentIndexLiked] = useState();
    const [hitSelfs, setHitsSelfs] = useState();

    let galleryIndex = galleryIndexMemory || 0

    useEffect(() => {
        console.debug(loggedInUser)
        setHitsSelfs(searchResults.hits.map((hit) => { return hit._links.self.href }))
    }, [loggedInUser,searchResults]);

    const changeRecipe = (index) => {
        //store Carousel's current recipie index 
        setRecipe(searchResults.hits[index]);
        //store current gallery slide in state for use outside Carousel
        setIndexMemory(index);
        
        let match = loggedInUser.favRecipes.includes(hitSelfs[galleryIndex]);
        //set a state to if current slide is favourited or not
        setIsCurrentIndexLiked(match)
  
    }

    const tapped = (index) => {
        console.debug("tapped", index)
        console.debug(searchResults.hits[index])
        setRecipe(searchResults.hits[index]);
        setIndexMemory(index)
        navigate("/viewRecipie", {
        });
    }

    const onHandleFavs = async () => {
        console.debug("before loggedInUser.favRecipes", loggedInUser.favRecipes)
        console.debug("clicked recipes self", hitSelfs[galleryIndex])

        //match if logged in user favourites contains the recipie.self 
        let match = loggedInUser.favRecipes.includes(hitSelfs[galleryIndex])
        console.debug("found in user favs")

        if (match) {
            //unlike
            console.debug("found in user favs - unfavouring")
            loggedInUser.favRecipes = loggedInUser.favRecipes.filter(e => !e.includes(hitSelfs[galleryIndex]))
            console.debug("num favs", loggedInUser.favRecipes.length)
            setIsCurrentIndexLiked(false)
        } else {
            //like
            console.debug("not in user favs - favouring")
            console.debug("trying to favourite")
            let newFavs = [...loggedInUser.favRecipes, hitSelfs[galleryIndex]]
            let obj = {
                "username": loggedInUser.username,
                "key": "favRecipes",
                "value": newFavs
            }
            //todo error check update attempt
            let res = await updateUser(obj, jwt)
            loggedInUser.favRecipes = newFavs;
            setIsCurrentIndexLiked(true)
            console.debug(res)
        }
    }




    return (//selectedItem
        <div className="Carousel" >
            <div className="favBox">
                <div className="favHeart" onClick={onHandleFavs}>
                    <FavHeartIcon isLiked={isCurrentIndexLiked} />
                </div>
                <div className="favTotal">
                    <p >
                        {galleryIndex}
                    </p>
                </div >
                
            </div>
            <Carousel
                selectedItem={galleryIndex}
                // infiniteLoop={true}
                useKeyboardArrows={true}
                emulateTouch={true}
                className='search-carousel'
                onChange={changeRecipe}
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
        </div>
    )

};
export default RecipeGallery;

