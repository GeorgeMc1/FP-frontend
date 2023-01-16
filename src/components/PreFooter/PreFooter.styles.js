import styled from 'styled-components';
import dash from "../../assets/images/border.png"
export const PreFooterContainer = styled.div`
display:flex;
flex-direction: column;

#column { 
    display:flex;
    flex-direction:row;
    width:100%;
    margin:auto ;
    // justify-self: center;
    //align-self:center;
    // justify-items: center;
    align-items: center;


    // border:1px dashed black; 

@media screen and (max-width: 510px) {
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
    button{
        margin:10px; 
        padding:10px 30px
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
}
`