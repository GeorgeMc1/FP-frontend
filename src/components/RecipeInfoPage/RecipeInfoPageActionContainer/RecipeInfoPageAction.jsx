import React from 'react';
import InfoContainer from '../InfoContainer';

const RecipeInfoPageAction = ({timeToPlate,cuisineType,dishType,mealType,serves,link}) => {
    console.log("inside RecipieInfoPageActionContainer")
    console.debug("timeToPlate ",timeToPlate,"\ncuisineType ",cuisineType,"\ndishType ",dishType,"\nmealType ",mealType,"\nserves ",serves)

    return (
        <InfoContainer className='recipeAction'>
            <h2>Recipe Info</h2>
            <ul>
                <li><div>Time to Plate: {timeToPlate} minutes</div></li>
                <li><div>Serves {serves}</div></li>
                <li><div>Cuisine: {cuisineType.join(", ")}</div></li>
                <li><div>Type of Dish: {dishType.join(", ")}</div></li>
            </ul>
            <p>Click <a className='recipeLink' href={link} target="_blank" rel="noreferrer">here</a> to view the recipe</p>
        </InfoContainer>
    );
};
export default RecipeInfoPageAction;