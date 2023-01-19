
import heart from "../../assets/images/heartFilled.png"
import heartOutline from "../../assets/images/heartOutlineTran.png"
import "../../css/favBookIconBar.css"

const FavHeartIcon = ({ isLiked, loggedInUser,jwt,setCurrentRecipeLiked,recipe, favList,
  setFavList,toggleFav }) => {
  return (
      <div className="favHeartIconContainer" onClick={()=>toggleFav(true,loggedInUser,recipe,setCurrentRecipeLiked,jwt,setFavList,favList)}>

        {isLiked ?
          <img className="icon" alt="favouriting icon" src={heart} />
          :
          <img className="icon" alt="unfavouriting icon" src={heartOutline} />
        }
      </div>
  )
}

export default FavHeartIcon