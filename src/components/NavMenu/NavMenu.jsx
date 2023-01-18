// Navbar.js 
import "../../components/NavMenu/navStyles.css"
import { NavIconLink,NavLink } from "./NavbarElements";
import { useState } from "react";
import logo from "../../assets/images/logo.png";
// Navbar.js
export default function NavMenu({ loggedInUser, recipe }) {
  const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    <nav className="navigation">
      


        <NavIconLink  className="brand-name" to='/'>
          <img alt="logo" src={logo} />
        </NavIconLink>
      <button className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}>
        {/* icon from heroicons.com */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }>
        <ul>
          <li> 
            <NavLink to="/SearchRecipes">Search</NavLink>  
            </li>
          {recipe ? 
            <li>
              <NavLink to="/ViewRecipe">View Recipie</NavLink>
            </li>
            
          : null}

          {loggedInUser ? (
            <>
              <li><NavLink to="/UserProfile">UserProfile</NavLink></li>
              <li><NavLink to="/logout" action="logout">Logout    </NavLink></li>
            </>
          ) : (

            <>
              <li><NavLink to="/SignUp">Sign Up</NavLink></li>
              <li><NavLink to="/login" action="login">login</NavLink></li>
            </>


          )}
        </ul>
      </div>
    </nav >
  );
}