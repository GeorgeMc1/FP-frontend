import React from 'react';


const RecipieInfoPageActionContainer = ({timeToPlate,cuisineType,dishType,mealType,serves}) => {
    console.log("inside RecipieInfoPageActionContainer")
    console.debug("timeToPlate ",timeToPlate,"\ncuisineType ",cuisineType,"\ndishType ",dishType,"\nmealType ",mealType,"\nserves ",serves)

    return (
        <div id="RecipieInfoPageActionContainer">
            <h2>RecipieInfoPageActionContainer</h2>
        </div>
    );
};
export default RecipieInfoPageActionContainer;