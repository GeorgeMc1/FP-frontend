import React from 'react'
import { Nav, NavLink ,NavIconLink} from './NavbarElements';
import logo from "../../assets/images/logo.png"
const Navbar = ({ loggedInUser, setter, recipe }) => {
  return (
    <Nav>
      <NavIconLink to='/'>
            <img alt="logo" src={logo} />
          </NavIconLink>
      <NavLink to='/hpblocks'>
        <h1>demo</h1>
      </NavLink>

      <NavLink to='/SearchRecipes' >Search Recipes</NavLink>

      {
        recipe
          ?
          <NavLink to='/ViewRecipie' >View Recipie</NavLink>
          :
          null
      }

      {
        loggedInUser
          ?
          <>
            <NavLink to='/UserProfile' >UserProfile</NavLink>
            <NavLink to='/logout' action="logout" >Logout</NavLink>
          </>
          :
          <>
          <NavLink to='/SignUp' >Sign Up</NavLink>
          <NavLink to='/login' action="login">Login</NavLink>
          
          </>
      }

    </Nav>
  );
};

export default Navbar;