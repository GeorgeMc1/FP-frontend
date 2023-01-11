import React from 'react'
import { Nav, NavLink } from './NavbarElements';


const Navbar = ({ loggedInUser, setter, recipe }) => {
  return (
    <Nav>
      <NavLink to='/'>
        <h1>Admin</h1>
      </NavLink>
      {/* {loggedInUser ?
         <> */}
      <NavLink to='/searchRecipes' >Search Recipes</NavLink>

      {
        recipe
          ?
          <NavLink to='/viewRecipie' >View Recipie</NavLink>
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
          <NavLink to='/registerUser' >Sign Up</NavLink>
          <NavLink to='/Login' action="login">Login</NavLink>
          
          </>

      }







    </Nav>
  );
};

export default Navbar;