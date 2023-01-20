
import bookOFF from "../../assets/images/cookbookIconOff.png"
import bookON from "../../assets/images/cookbookIcon.png"
import "../../css/favBookIconBar.css"
const CookBookIcon = ({ favList,
  setFavList,  isInBook,setIsInBook,isLiked, setCurrentRecipeLiked,  updateFav, toggleCookBookEntry, loggedInUser, jwt, recipe, cookBookName,setLoggedInUser }) => {
   

    
  return (
    //isliked / isinbook
    <div className="bookIconContainer" onClick={() => toggleCookBookEntry(updateFav,isInBook,setIsInBook, loggedInUser, recipe, setCurrentRecipeLiked, jwt, cookBookName, setFavList, favList,isLiked,setLoggedInUser)}>

      {isInBook ?
        <img className="icon" alt="add to book icon" src={bookON} />
        :
        <img className="icon" alt="remove from book icon" src={bookOFF} />

      }
    </div>
  )
}



export default CookBookIcon