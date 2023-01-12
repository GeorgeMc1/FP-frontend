import { PageContainer } from "../css/common-styles"
import React from 'react';
import IngredientListContainer from "../components/IngredientListContainer/IngredientListContainer";
import NutritionalListContainer from "../components/NutritionalListContainer/NutritionalListContainer";
import RecipieImageContainer from "../components/RecipieImageContainer/RecipieImageContainer";
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
            <h2>RecipeInfoPage</h2>
            {data.recipe.label}
            <IngredientListContainer data={ingLines} cautions={cautions}></IngredientListContainer>
            <NutritionalListContainer data={digest}></NutritionalListContainer>
            <RecipieImageContainer data={images}></RecipieImageContainer>
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