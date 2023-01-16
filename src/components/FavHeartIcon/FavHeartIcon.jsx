
import heart from "../../assets/images/heartFilled.png"
import heartOutline from "../../assets/images/heartOutlineTran.png"


/**
 * 描述
 * @date 2023-01-15
 * @param {any} {isLiked
 * @param {any} loggedInUser
 * @param {any} jwt
 * @param {any} setLiked
 * @param {any} recipe
 * @param {any} toggleFav}
 * @returns {any}
 */
const FavHeartIcon = ({ isLiked, loggedInUser,jwt,setCurrentRecipeLiked,recipe, toggleFav }) => {
  return (
      <div className="favHeart" onClick={()=>toggleFav(true,loggedInUser,recipe,setCurrentRecipeLiked,jwt)}>

        {isLiked ?
          <img className="favHeartImg" alt="favouriting icon" src={heart} />
          :
          <img className="favHeartImg" alt="favouriting icon" src={heartOutline} />
        }
      </div>
  )
}

export default FavHeartIcon