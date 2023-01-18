import { useEffect, useState } from "react";
import RecipeImageContainer from "./RecipeImageContainer";
import cog from "../../../assets/images/OptionsCog.png";

const RecipieImage = ({ data, selfLink }) => {
    console.log("inside RecipieImageContainer");
    console.debug("data",data);
    const [imgSrc, setImgSrc] = useState(data.REGULAR.url);
    const [failed, setIsFailed] = useState(false);
    const onError = async () => {
        try{
            const response = await fetch(selfLink);
            const imageData = await response.json();
            setImgSrc(imageData.recipe.images.REGULAR.url);
        } catch(error){
            console.log(error);
            setIsFailed(true);
        }
    }
    useEffect(() => {
        console.log("image src has been updated");
    }, [imgSrc])
    
    return (
        <RecipeImageContainer>
            <img src={failed ? cog : imgSrc} alt="recipe" onError={() => onError()}/>
        </RecipeImageContainer>
    );
};
export default RecipieImage;