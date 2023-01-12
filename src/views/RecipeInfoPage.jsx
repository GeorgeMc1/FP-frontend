import { PageContainer } from "../css/common-styles"
import React from 'react';
import IngredientList from "../components/RecipeInfoPage/IngredientList/IngredientList";
import NutritionalList from "../components/RecipeInfoPage/NutritionalList/NutritionalList";
import RecipieImage from "../components/RecipeInfoPage/RecipeImage/RecipeImage";
import RecipieInfoPageActionContainer from "../components/RecipieInfoPageActionContainer/RecipieInfoPageActionContainer"

const RecipeInfoPage = ({ data }) => {
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
    //theres still more

    return (
        <PageContainer id="recipeInfoPage">
            <h2>{data.recipe.label}</h2>
            <RecipieImage data={images}></RecipieImage>
            <IngredientList data={ingLines} cautions={cautions}></IngredientList>
            <NutritionalList data={digest}></NutritionalList>
            <RecipieInfoPageActionContainer
                timeToPlate={timeToPlate}
                cuisineType={cuisineType}
                dishType={dishType}
                mealType={mealType}
                serves={serves}>
            </RecipieInfoPageActionContainer>
        </PageContainer>
    );
};
export default RecipeInfoPage;