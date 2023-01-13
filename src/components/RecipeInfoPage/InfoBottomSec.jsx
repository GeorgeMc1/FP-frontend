import { useState } from "react";
import IngredientList from "./IngredientList/IngredientList";
import NutritionalList from "./NutritionalList/NutritionalList";
import styled from "styled-components";

const InfoBottomSec = ({ingLines, cautions, digest}) => {
    const [ingredients, setIngredients] = useState(true);
    const [nutrition, setNutrition] = useState(false);

    return(
        <BottomSecContainer>
            <div className="tabs">
                <h3 onClick={() => {setIngredients(true); setNutrition(false)}}>Ingredients</h3>
                <h3 onClick={() => {setNutrition(true); setIngredients(false)}}>Nutritinal Info</h3>
            </div>
            <div>
                {ingredients ?
                    <IngredientList data={ingLines} cautions={cautions}/>
                : nutrition ?
                    <NutritionalList data={digest}/>
                : null
                }
            </div>
        </BottomSecContainer>
    )
}

const BottomSecContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin: 10px auto;

    .tabs{
        display: flex;
        h3{
            margin: 0 10px;
            cursor: pointer;
            :hover{
                text-decoration: underline;
            }
        }
    }
    h3{
        font-family: Poppins, sans-serif;
    }
`
export default InfoBottomSec;