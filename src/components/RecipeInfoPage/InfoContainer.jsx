import styled from "styled-components";
import checkMark from "../../assets/images/check-list.png";

const InfoContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 800px;

    h2 {
        text-align: center;
    }
    ul {
        margin: 5px 0;
        padding: 0 0 0 25px;
    }
    #nutrition {
        display: flex;
        justify-content: center;

        ul {
            padding-left: 50px;
            list-style-image: url(${checkMark});
            li {
                width: 280px;
                /* font-size: 20px; */
                position: relative;
                div {
                    position: absolute;
                    top: 50%;
                    -ms-transform: translateY(-50%);
                    transform: translateY(-50%);
                }
            }
        }
    }
    &.recipeAction {
        width: 350px;
        padding: 10px;
        margin-left: 15px;
        align-items: center;
        border-radius: 10px;
        border: 10px solid rgb(194, 251, 215);

        ul {
            padding-left: 50px;
            list-style-image: url(${checkMark});
            li {
                width: 250px;
                /* font-size: 20px; */
                position: relative;
                div {
                    position: absolute;
                    top: 50%;
                    -ms-transform: translateY(-50%);
                    transform: translateY(-50%);
                }
            }
        }
    }
    &#ingredients {
        ul {
            padding-left: 55px;
            list-style-image: url(${checkMark});
            li {
                font-size: 20px;
                position: relative;
                div {
                    position: absolute;
                    top: 50%;
                    -ms-transform: translateY(-50%);
                    transform: translateY(-50%);
                }
            }
        }
    }
    .recipeLink {
        color: black;
    }
`;
export default InfoContainer;
