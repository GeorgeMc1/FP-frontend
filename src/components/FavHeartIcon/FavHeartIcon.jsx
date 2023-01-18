
import heart from "../../assets/images/heartFilled.png"
import heartOutline from "../../assets/images/heartOutlineTran.png"
import "../../css/carousel.min.css"

const FavHeartIcon = ({ isLiked, loggedInUser,jwt,setCurrentRecipeLiked,recipe, favList,
  setFavList,toggleFav }) => {
  return (
      <div className="favHeart" onClick={()=>toggleFav(true,loggedInUser,recipe,setCurrentRecipeLiked,jwt,setFavList,favList)}>

        {isLiked ?
          <img className="favHeartImg" alt="favouriting icon" src={heart} />
          :
          <img className="favHeartImg" alt="unfavouriting icon" src={heartOutline} />
        }
      </div>
  )
}

export default FavHeartIcon