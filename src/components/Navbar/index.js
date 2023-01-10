import React from 'react'
import { Nav, NavLink } from './NavbarElements';


const Navbar = ({ loggedInUser,setter }) => {
  return (
      <Nav>
        <NavLink to='/'>
          <h1>Admin</h1>
        </NavLink>
        {/* {loggedInUser ?
         <> */}
          <NavLink to='/searchRecipes' >searchRecipes</NavLink>
          <NavLink to='/viewRecipie' >viewRecipie</NavLink>
          <NavLink to='/registerUser' >registerUser</NavLink>

          <NavLink to='/UserProfile' >UserProfile</NavLink>
          <NavLink to='/logout' action="logout">Logout</NavLink>
          {/* </>
          : */}
          <NavLink to='/Login' action="login">Login</NavLink>
          
          {/* } */}
          
       
      </Nav>
  );
};

export default Navbar;