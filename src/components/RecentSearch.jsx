import React from 'react'
// import recipe1 from "../assets/images/recipe1.jpg"
import recipe2 from "../assets/images/recipe2.jpg"
import recipe3 from "../assets/images/recipe3.jpg"
import recipe4 from "../assets/images/recipe4.jpg"
import "../css/recipeSearchPage.css"

const RecentSearch = () => {
  return (
    <div id='recentsContainer'>
        <h3>recently searched</h3>
        <div className="recips">
            <img src={recipe4} alt="recentSearch"/>
            <img src={recipe2} alt="recentSearch"/>
            <img src={recipe3} alt="recentSearch"/>
            <img src={recipe4} alt="recentSearch"/>
        </div>
    </div>
  )
}

export default RecentSearch
