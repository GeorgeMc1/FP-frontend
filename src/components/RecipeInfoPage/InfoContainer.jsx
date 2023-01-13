import styled from "styled-components";

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    max-width: 800px;
    /* margin: 0 auto; */

    h2{
        text-align: center;
    }
    ul{
        margin: 5px 0;
    }
    #nutrition{
        display: flex;
        justify-content: center;
    }
`
export default InfoContainer;