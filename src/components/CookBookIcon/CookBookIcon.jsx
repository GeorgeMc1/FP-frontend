

import cookbookIcon from "../../assets/images/cookbookIcon.png"
const CookBookIcon = ({
  isLiked,
  setCurrentRecipeLiked,
  setLiked,
  updateFav,
  toggleCookBookEntry,
  loggedInUser,
  jwt,
  recipe,
  cookBookName,
  isRecipeFaved,
  setIsRecipeFaved,
  isRecipeInCurrentBook,
  setIsRecipeInCurrentBook,
  inCurrentBook
}) => {
  return (
      <div className="favHeart" onClick={()=>toggleCookBookEntry(updateFav, loggedInUser, recipe,setIsRecipeInCurrentBook,jwt,cookBookName)}>

        {isRecipeInCurrentBook ?
          <img className="favHeartImg" alt="favouriting icon" src={cookbookIcon} />
         :
         <img className="favHeartImg" alt="favouriting icon" src={cookbookIcon} />

        }
      </div>
  )
}

export default CookBookIcon