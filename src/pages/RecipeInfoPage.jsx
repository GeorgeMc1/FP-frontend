import { PageContainer } from "../css/common-styles"
import React from 'react';
import RecipieImage from "../components/RecipeInfoPage/RecipeImage/RecipeImage";
import RecipeInfoPageAction from "../components/RecipeInfoPage/RecipeInfoPageActionContainer/RecipeInfoPageAction"
import FavHeartIcon from "../components/FavHeartIcon/FavHeartIcon";
import { toggleFav } from "../common/toggleFav";
import styled from "styled-components";
import InfoBottomSec from "../components/RecipeInfoPage/InfoBottomSec";

const RecipeInfoPage = ({ data,loggedInUser,jwt,setCurrentRecipeLiked, currentRecipeLiked}) => {

    const checkIfFavourites = () => {
        if (loggedInUser){
        //match if logged in user favourites contains the recipie.self 
        let match = loggedInUser.favRecipes.includes(data._links.self.href)
        console.log("match in favs =", match)
        return match
        }
    }

 



    console.log("inside recipieinfopage");
    console.debug(data);
    const images = data.recipe.images;
    // const ingredients = data.recipe.ingredients;
    // const totalDaily = data.recipe.totalDaily;
    // const totalNutrients = data.recipe.totalNutrients;
    const digest = data.recipe.digest;
    const cautions = data.recipe.cautions;
    // const calories = data.recipe.calories;
    const cuisineType = data.recipe.cuisineType;
    const dishType = data.recipe.dishType;
    // const healthLabels = data.recipe.healthLabels
    const ingLines = data.recipe.ingredientLines;
    const timeToPlate = data.recipe.totalTime;
    const serves = data.recipe.yield;
    const mealType = data.recipe.mealType;
    const recipeLink = data.recipe.url;
    //theres still more

    return (
        <PageContainer id="recipeInfoPage">
            <h2>{data.recipe.label}</h2>
            <FavHeartIcon 
            isLiked={checkIfFavourites()} 
            loggedInUser={loggedInUser} 
            jwt={jwt} 
            setCurrentRecipeLiked={setCurrentRecipeLiked} 
            recipe={data} 
            toggleFav={toggleFav}  />

            <RecipieImage data={images}></RecipieImage>
            <IngredientList data={ingLines} cautions={cautions}></IngredientList>
            <RecipeInfoPageAction
                timeToPlate={timeToPlate}
                cuisineType={cuisineType}
                dishType={dishType}
                mealType={mealType}
                serves={serves}>
            </RecipeInfoPageAction>
            <NutritionalList data={digest}></NutritionalList>
            <TopRow>
                <RecipieImage data={images}></RecipieImage>
                <RecipeInfoPageAction
                    timeToPlate={timeToPlate}
                    cuisineType={cuisineType}
                    dishType={dishType}
                    mealType={mealType}
                    serves={serves}
                    link={recipeLink}>
                </RecipeInfoPageAction>
            </TopRow>
            <InfoBottomSec ingLines={ingLines} cautions={cautions} digest={digest}/>
        </PageContainer>
    );
};

const TopRow = styled.div`
    display: flex;
    justify-content: center;
`
export default RecipeInfoPage;