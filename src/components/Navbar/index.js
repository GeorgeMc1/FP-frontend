import React from 'react'
import { Nav, NavLink } from './NavbarElements';

const Navbar = ({ loggedInUser, setter, recipe }) => {
  return (
    <Nav>
      <NavLink to='/'>
        <h1>Admin</h1>
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