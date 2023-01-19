import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import { PreFooterHalfColumnContainer } from "./PreFooter.styles";
const PreFooterLeft = () => {


    return (
        <PreFooterHalfColumnContainer id="hb">

            <img alt="logo" src={logo} />
            <h5>SIGN UP WITH US FOR MORE RECIPES!</h5>

            <NavLink className="button" to="/SignUp">SIGN UP</NavLink>

        </PreFooterHalfColumnContainer>


    )
}

export default PreFooterLeft;