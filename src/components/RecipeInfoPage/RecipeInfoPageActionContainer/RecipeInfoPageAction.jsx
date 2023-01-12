import React from 'react';
import InfoContainer from '../InfoContainer';

const RecipeInfoPageAction = ({timeToPlate,cuisineType,dishType,mealType,serves}) => {
    console.log("inside RecipieInfoPageActionContainer")
    console.debug("timeToPlate ",timeToPlate,"\ncuisineType ",cuisineType,"\ndishType ",dishType,"\nmealType ",mealType,"\nserves ",serves)

    return (
        <InfoContainer>
            <h2>RecipieInfoPageActionContainer</h2>
            <p>Time to Plate: {timeToPlate} hours</p>
            <p>Cuisine: {cuisineType.join(", ")}</p>
            <p>Type of Dish: {dishType.join(", ")}</p>
            <p>serves</p>
        </InfoContainer>
    );
};
export default RecipeInfoPageAction;