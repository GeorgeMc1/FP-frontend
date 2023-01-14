
import heart from "../../assets/images/heartFilled.png"
import heartOutline from "../../assets/images/heartOutlineTran.png"
const FavHeartIcon = ({ isLiked, toggleFav }) => {
  return (
      <div className="favHeart" onClick={()=>toggleFav()}>

        {isLiked ?
          <img className="favHeartImg" alt="favouriting icon" src={heart} />
          :
          <img className="favHeartImg" alt="favouriting icon" src={heartOutline} />
        }
      </div>
  )
}

export default FavHeartIcon