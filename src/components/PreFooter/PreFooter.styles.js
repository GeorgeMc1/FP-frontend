import styled from 'styled-components';
import dash from "../../assets/images/border.png"
export const PreFooterContainer = styled.div`
    display:flex;
    flex-direction: column;
    margin-top:30px;
    background-color:#ddF9cf;
    padding-top: 10px;
    box-shadow: rgba(0, 0, 0, 0.45) 0px -5px 5px -5px;

    #column {
        display:flex;
        flex-direction:row;
        width:100%;
        margin:auto ;
        align-items: center;

        @media screen and (max-width: 600px) {
            flex-direction:column;
        }
    }
`

export const PreFooterHalfColumnContainer = styled.div`
    display:flex;
    flex-direction: column;

    // justify-self: center;
    align-self:center;
    justify-items: center;
    align-items: center;
    flex: 1 1 50%;
    .button{
        margin:10px; 
        padding:10px 40px;
        border:1px solid black;
        background-color:#454545;
        color:#ddF9cf;
        text-decoration: none;
    }
    img{
        background-color: none;
        width:100%;
        max-width: 350px;
    }
    p {
        margin:10px auto;
    }

    // border:1px dashed black;
`

export const StrapLine = styled.div`
    border-top: 5px solid transparent;
    border-image-source: url(${dash});
    border-image-repeat: round;
    border-image-slice: 30 ;
    width:100%;
    margin:auto;

    #borderimg3 {
        border: 15px solid transparent;
        border-image-source: url(${dash});
        border-image-repeat: round;
        border-image-slice: 30;
    }
`