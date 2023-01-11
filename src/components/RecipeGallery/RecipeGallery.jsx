
// import Carousel from 'react-gallery-carousel';
import 'react-gallery-carousel/dist/index.css';
import React from 'react';

//import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import "../../css/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";

const RecipeGallery = ({ searchResults,setRecipe }) => {
    console.log(searchResults)
    const navigate = useNavigate();
    const tapped = (index) => {
        
        console.log("tapped",index)
        console.log(searchResults.hits[index])
        setRecipe(searchResults.hits[index]);
        navigate("/viewRecipie", {
          });
    }
    
    

    return (
        <>
            <h1>gallery</h1>
            
            <Carousel onClickItem={tapped} swipeable={true} autoPlay={true}>
                {
                    searchResults.hits.map((result,index) => {
                        let  image = result.recipe.image
                        let  legend = result.recipe.label
                        return (

                            <div>
                                <img src={image} alt={legend} />
                                <p className="legend">{legend} 1</p>
                            </div>
                        )
                    }
                    )
                }

               
            </Carousel>
        </>
    )
   
};
export default RecipeGallery;

