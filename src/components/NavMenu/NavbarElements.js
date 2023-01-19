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
    min-width: 100px;
    text-align: center;

    cursor: pointer;
    border-right: 1px solid rgb(54, 54, 54, 0.1);
    //  border-left:1px dashed black;
    //  border-right:1px dashed black;
    /* box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px; */
    /* box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; */

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
        background: linear-gradient(0deg, rgb(194, 251, 215), rgb(231, 253, 239), rgb(230, 241, 236));
    }
    &.log{
        border-right: 0;
    }
`

export const NavIconLink = styled(Link)`
    background-color:#f1f9f8;
    text-decoration: none;
    display:inline-block;
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



