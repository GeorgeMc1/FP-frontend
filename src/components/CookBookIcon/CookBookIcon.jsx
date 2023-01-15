

import cookbookIcon from "../../assets/images/cookbookIcon.png"
const CookBookIcon = ({ isLiked, setLiked,updateFav,toggleCookBookEntry,loggedInUser,jwt,recipe,cookBookName }) => {
  return (
      <div className="favHeart" onClick={()=>toggleCookBookEntry(updateFav, loggedInUser, recipe,setLiked,jwt,cookBookName)}>

        {isLiked ?
          <img className="favHeartImg" alt="favouriting icon" src={cookbookIcon} />
         :
         <img className="favHeartImg" alt="favouriting icon" src={cookbookIcon} />

        }
      </div>
  )
}

export default CookBookIcon