
import bookOFF from "../../assets/images/cookbookIconOff.png"
import bookON from "../../assets/images/cookbookIcon.png"
const CookBookIcon = ({ favList,
  setFavList,  isInBook,setIsInBook, setCurrentRecipeLiked,  updateFav, toggleCookBookEntry, loggedInUser, jwt, recipe, cookBookName }) => {
   
  console.log(isInBook,setIsInBook)
  return (
    
    <div className="favHeart" onClick={() => toggleCookBookEntry(updateFav,isInBook,setIsInBook, loggedInUser, recipe, setCurrentRecipeLiked, jwt, cookBookName, setFavList, favList)}>

      {isInBook ?
        <img className="favHeartImg" alt="favouriting icon" src={bookON} />
        :
        <img className="favHeartImg" alt="favouriting icon" src={bookOFF} />

      }
    </div>
  )
}



export default CookBookIcon