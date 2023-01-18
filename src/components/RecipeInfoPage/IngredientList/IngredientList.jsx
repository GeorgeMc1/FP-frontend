import React from 'react';
import InfoContainer from '../InfoContainer';

const IngredientList = ({ data }) => {
    console.log("inside IngredientListContainer")
    console.debug(data)
    return (
        <InfoContainer id='ingredients'>
            <ul>
                {data.map((item, i) => {
                    return(
                        <li key={i}><div>{item}</div></li>
                    )
                })}
            </ul>
        </InfoContainer>
    );
};
export default IngredientList;