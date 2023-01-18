import { PageContainer } from "../css/common-styles"
import React, { useState } from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard.jsx"
import { useNavigate } from "react-router-dom";
import bannerImg from "../assets/images/profile.banner.png"
import bookRed from "../assets/images/redBook.png";
import bookBlue from "../assets/images/blueBook.png"
import avatarImg from "../assets/images/profile.png"
import "../css/userProfile.css"
import { getRecipiesFromApi } from "../utils";


const UserProfilePage = ({ setSearchResults,setRecipe, loggedInUser, setLoggedInUser, jwt, setJWT }) => {
    const navigate = useNavigate();

    //  const [favSet, setFavImageSet] = useState([]);
    const [allFavsData, setAllFavsData] = useState([])
    const [savedData, setSavedData] = useState(false);


    let allFavsImages = null
    const loadGalleryWith = async (e, loggedInUser) => {
        try {
            let bookName = e.target.attributes.book.value
            console.log(`bookName ${bookName}`, loggedInUser.books)
            // let currentBook = await getBook(bookName, loggedInUser)
            let currentBook ;
            for (let i = 0; i < loggedInUser?.books?.length; i++) {
                if (loggedInUser.books[i].bookName === bookName) {
                    console.log("book found in user")
                    currentBook = loggedInUser.books[i];
                }}
    

            let searchHits = { "hits": currentBook.recipes }
            setSearchResults(searchHits)
            console.log(searchHits)
            navigate("/searchRecipes", {
            });
        } catch (e) { console.log(e) }
    }
    const onSearchClick = (e) => {
        navigate("/searchRecipes", {
        });
    }

    const populateImageArray = async () => {
        let tempArr = [];
        if (loggedInUser) {
            console.log("length of favs", loggedInUser?.favRecipes?.length)
            for (let i = 0; i < loggedInUser?.favRecipes?.length; i++) {
                try {

                    let response = await getRecipiesFromApi(loggedInUser.favRecipes[i]);
                    //console.log("***", response.recipe.image)
                    tempArr = [...tempArr, response]
                    // allFavsImages.push(response.recipe.image)
                } catch (error) {
                    console.log(error)
                }
                if (!savedData) {
                    console.log("set state data");
                    setAllFavsData(tempArr)
                    setSavedData(true);
                    //setFavImageSet(allFavsImages)
                }
            }
            console.log(allFavsData, allFavsImages)

        }
    }


    const favClick =(e,elm) => {
console.log(elm)
setRecipe(elm)
navigate("/viewRecipe")
    }
    console.log(loggedInUser)
    if (!savedData) {
        console.log("call populate array")
        populateImageArray();
    }
    return (
        <> <div className="banner" >
        <img src={bannerImg} alt="banner" />
    </div>
        <PageContainer id="userProfilePage">
           
            <img className="avatarOverlay" src={avatarImg} alt="avatar" />
            <div className="FlexRowTwo">
                <div className="profileContainer">
                    <div className="profileCard">
                        <div className="profileTitle" >
                            <p >EDIT YOUR DETAILS HERE</p>
                        </div>
                        <ProfileCard  loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} jwt={jwt} setJWT={setJWT} />
                    </div>
                    <div className="actions">
                        <button onClick={(e) => { onSearchClick(e) }}>CLICK HERE TO SEARCH RECIPES</button>
                    </div>
                </div>
                <div className="favsContainer">
                    <div className="favsTitle">
                        <p>Your Favorites</p>
                    </div>
                    <div className="favList" >
                        {/* map function to get image per fav in array */}
                        {
                            allFavsData.map((elm, index) => {

                                return (

                                    <div key={index} className="onefavContainer tooltip">
                                        <img className="profileFavImage" onClick={(e)=>{favClick(e,elm)}}src={elm?.recipe?.image} alt={elm?.recipe?.label} />
                                        <span className="tooltiptext">{elm?.recipe?.label}</span>
                                        <div className="infoTab">info
                                        </div>
                                    </div>
                                )
                            })

                        }
                    </div>
                </div>
            </div>
            <div className="bookShelfContainer">
                <div className="bookShelfTitle">
                    <p>Books</p>
                </div>
                <div className="bookShelf shadow" >
                    {loggedInUser?.books?.map((e, index) => {

                        return (
                            <div className="book" key={index}>
                         <button className="noButtonShow"   >    <p key={index} book={e.bookName} alt={e.bookName} onClick={(e) => loadGalleryWith(e, loggedInUser)}>{e.bookName}</p></button>  
                                <img
                                    className="bookImg"
                                    book={e.bookName}
                                    alt={e.bookName}
                                    onClick={(e) => loadGalleryWith(e, loggedInUser)} src={ index%2 === 0 ? bookBlue : bookRed} />
                            </div>
                        )


                    })
                    }
                </div>
            </div>

        </PageContainer >
        </>
    );

};
export default UserProfilePage;