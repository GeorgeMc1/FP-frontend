
import React from 'react';
const IngredientListContainer = ({ data }) => {
    console.log("inside IngredientListContainer")
    console.debug(data)

    return (
        <div id="IngredientListContainer">
            <h2>Ingredients</h2>
            <ul>
                {data.map(item => {
                    return(
                        <li>{item}</li>
                    )
                })}
            </ul>
        </div>
    );
};
export default IngredientListContainer;