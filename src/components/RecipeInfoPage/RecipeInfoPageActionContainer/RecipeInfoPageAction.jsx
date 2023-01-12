import React from 'react';
import InfoContainer from '../InfoContainer';

const RecipeInfoPageAction = ({timeToPlate,cuisineType,dishType,mealType,serves}) => {
    console.log("inside RecipieInfoPageActionContainer")
    console.debug("timeToPlate ",timeToPlate,"\ncuisineType ",cuisineType,"\ndishType ",dishType,"\nmealType ",mealType,"\nserves ",serves)

    return (
        <InfoContainer>
            <h2>Recipe Info</h2>
            <ul>
                <li>Time to Plate: {timeToPlate} hours</li>
                <li>Serves {serves}</li>
                <li>Cuisine: {cuisineType.join(", ")}</li>
                <li>Type of Dish: {dishType.join(", ")}</li>
            </ul>
        </InfoContainer>
    );
};
export default RecipeInfoPageAction;