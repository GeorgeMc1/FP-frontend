

import cookbookIcon from "../../assets/images/cookbookIcon.png"
const CookBookIcon = ({ isLiked, toggleCookBookEntry,cookBookName }) => {
  return (
      <div className="favHeart" onClick={()=>toggleCookBookEntry(cookBookName)}>

        
          <img className="favHeartImg" alt="favouriting icon" src={cookbookIcon} />
        
      </div>
  )
}

export default CookBookIcon