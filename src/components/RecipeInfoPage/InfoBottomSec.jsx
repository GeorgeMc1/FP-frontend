import { useState } from "react";
import IngredientList from "./IngredientList/IngredientList";
import NutritionalList from "./NutritionalList/NutritionalList";
import styled from "styled-components";

const InfoBottomSec = ({ingLines, cautions, digest}) => {
    const [ingredients, setIngredients] = useState(true);
    const [nutrition, setNutrition] = useState(false);
    const [notes, setNotes] = useState(false);

    return(
        <BottomSecContainer>
            <div className="tabs">
                <h3 className={ingredients ? "selected" : ""} onClick={() => {setIngredients(true); setNutrition(false); setNotes(false)}}>Ingredients</h3>
                <h3 className={nutrition ? "selected" : ""} onClick={() => {setNutrition(true); setIngredients(false); setNotes(false)}}>Nutritinal Info</h3>
                <h3 className={notes ? "selected" : ""} onClick={() => {setNotes(true); setIngredients(false); setNutrition(false)}}>Notes</h3>
            </div>
            <div className="info selected">
                {ingredients ?
                    <IngredientList data={ingLines} cautions={cautions}/>
                : nutrition ?
                    <NutritionalList data={digest}/>
                : notes ?
                    <textarea className="input"></textarea>
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
    max-width: 800px;
    width: 100%;
    margin: 10px auto;

    .tabs{
        display: flex;
        h3{
            padding: 0 10px;
            cursor: pointer;
            :hover{
                text-decoration: underline;
            }
        }
    }
    h3{
        font-family: Poppins, sans-serif;
    }
    .selected{
        background-color: white;
    }
    .info{
        width: 100%;
        height: 335px;
        overflow-y: auto;
        .input{
            margin: 5px;
            width: calc(100% - 10px);
            min-height: 200px;
            resize: none;
        }
    }
`
export default InfoBottomSec;