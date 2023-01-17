import styled from "styled-components";

const RecipeImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    /* padding-top: 5px; */
    background-color: rgb(194, 251, 215);
    border-radius: 0 0 10px 10px;
    img{
        border-radius: 10px;
        margin: 5px;
        margin-top: 0;
        border: 2px solid rgb(0, 0, 0, 0.2);
    }
`
export default RecipeImageContainer;