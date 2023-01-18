import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const Nav = styled.nav`
    background: #fff;
    display: flex;
    justify-content: space-around;
    z-index: 10;
    width: 100%; /* Full width */
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    `

export const NavLink = styled(Link)`
    color: #333;
    display: flex;
    align-items: center;
    text-decoration: none;  
    font-size: 1.7em;

    cursor: pointer;
    //  border-left:1px dashed black;
    //  border-right:1px dashed black;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    background-color:#f1f9f8;
    margin:0 1px;
    flex:1 1 100%;
    justify-content: center;
    transition: all 0.3s ease-in-out;
        &.active{
            color: #15cdfc;
    }
    &:hover{
        color: #15cdfc;
        transition: all 0.3s ease-in-out;
        background-color:#c2fbd7;
    }
`

export const NavIconLink = styled(Link)` 
flex:1 1 100%;
background-color:#f1f9f8;
    height:80%;
    text-decoration: none;
    text-align: center;  padding:0px;
    display:inline-block;
    flex:1 1 100%;
    &:hover {
           
        // background-color:#c2fbd7;
    }
    img {
        width:180px;
        height:60px;
        vertical-align: middle; 
      
        transition: all 0.3s ease-in-out;
        display: inline-block;
        
        &:hover {
            /* transition: all 0.3s ease-in-out;
            display: inline-block;
            width:100%; */
        }
    }

`



