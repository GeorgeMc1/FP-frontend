import React from 'react';
import InfoContainer from '../InfoContainer';

const RecipeInfoPageAction = ({timeToPlate,cuisineType,dishType,mealType,serves,link}) => {
    console.log("inside RecipieInfoPageActionContainer")
    console.debug("timeToPlate ",timeToPlate,"\ncuisineType ",cuisineType,"\ndishType ",dishType,"\nmealType ",mealType,"\nserves ",serves)

    return (
        <InfoContainer className='recipeAction'>
            <h2>Recipe Info</h2>
            <ul>
                <li>Time to Plate: {timeToPlate} minutes</li>
                <li>Serves {serves}</li>
                <li>Cuisine: {cuisineType.join(", ")}</li>
                <li>Type of Dish: {dishType.join(", ")}</li>
            </ul>
            <p>Click <a className='recipeLink' href={link} target="_blank" rel="noreferrer">here</a> to view the recipe</p>
        </InfoContainer>
    );
};
export default RecipeInfoPageAction;