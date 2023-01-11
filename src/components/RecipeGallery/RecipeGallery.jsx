import 'react-gallery-carousel/dist/index.css';
import React from 'react';
import "../../css/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";

const RecipeGallery = ({ searchResults, setRecipe, galleryIndexMemory, setIndexMemory }) => {
    console.log(searchResults)
    const navigate = useNavigate();


    const changeRecipe = (index) => {
        console.log("changed", index)
        setRecipe(searchResults.hits[index]);
        setIndexMemory(index)
    }

    const tapped = (index) => {
        console.log("tapped", index)
        console.log(searchResults.hits[index])
        setRecipe(searchResults.hits[index]);
        setIndexMemory(index)
        navigate("/viewRecipie", {
        });
    }

    let galleryIndex = galleryIndexMemory || 0

    return (//selectedItem
        <Carousel selectedItem={galleryIndex} infiniteLoop={true} useKeyboardArrows={true} emulateTouch={true} className='search-carousel' onChange={changeRecipe} onClickItem={tapped} swipeable={true} autoPlay={true}>
            {
                searchResults.hits.map((result, index) => {
                    let image = result.recipe.image
                    let legend = result.recipe.label
                    return (
                        <div key={index}>
                            <img src={image} alt={legend} />
                            <p className="legend">{legend} 1</p>
                        </div>
                    )
                }
                )
            }
        </Carousel>
    )

};
export default RecipeGallery;

