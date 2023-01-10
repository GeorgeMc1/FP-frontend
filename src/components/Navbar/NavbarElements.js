import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";


export const Nav = styled.nav`
    background: #000; 
    display: flex;
    justify-content: space-around;
    position: fixed;
    top:0;
    z-index: 10;
    width: 100%; /* Full width */
    box-shadow: rgba(0, 0, 0, 0.29) 0px 10px 20px, rgba(0, 0, 0, 0.33) 0px 8px 8px, rgba(0, 0, 0, 0.53) 0px 3px 3px;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
   
    cursor: pointer;
    transition: all 0.3s ease-in-out;
        &.active{
            color: #15cdfc;
    }
    &:hover{
        color: #15cdfc;
        transition: all 0.3s ease-in-out;
    }
`




