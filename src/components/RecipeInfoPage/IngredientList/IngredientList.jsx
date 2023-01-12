import React from 'react';
import InfoContainer from '../InfoContainer';
const IngredientList = ({ data, cautions }) => {
    console.log("inside IngredientListContainer")
    console.debug(data)
    console.log("cautions", cautions)
    return (
        <InfoContainer>
            {cautions.length > 0 ?
                <>
                    <h3>Cautions</h3>
                    <ul>
                        {cautions.map((item, i) => {
                            return(
                                <li key={i}>{item}</li>
                            )
                        })}
                    </ul>
                </>
            :
                null
            }
            <h2>Ingredients</h2>
            <ul>
                {data.map((item, i) => {
                    return(
                        <li key={i}>{item}</li>
                    )
                })}
            </ul>
        </InfoContainer>
    );
};
export default IngredientList;