import { PageContainer, Container } from "../css/common-styles"
import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard.jsx"
import { getBook } from "../common/getBook";
import { useNavigate } from "react-router-dom";
import bannerImg from "../assets/images/profile.banner.png"

import avatarImg from "../assets/images/profile.png"
import "../css/userProfile.css"
const UserProfilePage = ({ setSearchResults, loggedInUser, setLoggedInUser, jwt, setJWT }) => {
    const navigate = useNavigate();
    const loadGalleryWith = async (e, loggedInUser) => {
        let bookName = e.target.attributes.book.value
        console.log(`bookName ${bookName}`, loggedInUser.books)
        let currentBook = await getBook(bookName, loggedInUser)
        let searchHits = { "hits": currentBook.recipes }
        setSearchResults(searchHits)
        console.log(searchHits)
        navigate("/searchRecipes", {
        });
    }
    return (
        <PageContainer id="userProfilePage">
            <div className="banner" >
                <img src={bannerImg} alt="banner" />
            </div>
            <img className="avatarOverlay" src={avatarImg} alt="avatar" />
            <div className="FlexRowTwo">


                <div className="profile">
                    <div className="profileCard">
                        <button >EDIT YOUR DETAILS HERE</button>
                        <ProfileCard setSearchResults={setSearchResults} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} jwt={jwt} setJWT={setJWT} />
                    </div>
                    <div className="actions">
                        <button className="center">CLICK HERE TO SEARCH RECIPES</button>
                    </div>
                </div>
                <div className="favsContainer">


                    <Container>
                        <div className="favsTitle">
                            <p>Your Favorites</p>
                        </div>
                        <div className="favList" >
                            {/* map function to get image per fav in array */}
                            {loggedInUser.favRecipes?.map((e) => {
                                return (

                                    <div className="onefavContainer">
                                        <p>img</p>
                                        <img src="" alt="" />
                                    </div>
                                )
                            })}
                        </div>
                    </Container>


                </div>
            </div>
            <div className="bookShelfTitle">
                <b>books</b>
            </div>
            <Container className="bookShelf" setSearchResults={setSearchResults}>

                {loggedInUser?.books?.map((e, index) => {
                    return (
                        <div className="book" >
                            {/* make absolut to move over books div */}
                            <p key={index} book={e.bookName} alt={e.bookName} onClick={(e) => loadGalleryWith(e, loggedInUser)}>{e.bookName}</p>
                        </div>
                    )
                })
                }
            </Container>

        </PageContainer >
    );

};
export default UserProfilePage;