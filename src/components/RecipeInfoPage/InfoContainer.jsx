import styled from "styled-components";

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;

    h2{
        text-align: center;
    }
    ul{
        margin: 5px 0;
        padding: 0 0 0 25px;
    }
    #nutrition{
        display: flex;
        justify-content: center;
    }
    &.recipeAction{
        padding: 10px;
        margin-left: 15px;
        align-items: center;
        border-radius: 5px;
        border: 10px solid rgb(194, 251, 215);
    }
    .recipeLink{
        color: black;
    }
`
export default InfoContainer;