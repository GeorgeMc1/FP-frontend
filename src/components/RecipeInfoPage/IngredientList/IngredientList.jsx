import React from 'react';
import InfoContainer from '../InfoContainer';

const IngredientList = ({ data, cautions }) => {
    console.log("inside IngredientListContainer")
    console.debug(data)
    console.log("cautions", cautions)
    return (
        <InfoContainer id='ingredients'>
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