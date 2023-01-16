import { PageContainer,Container } from "../css/common-styles"
import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard.jsx"
import { getBook } from "../common/getBook";
import { useNavigate } from "react-router-dom";

const UserProfilePage = ({ setSearchResults,loggedInUser, setLoggedInUser, jwt, setJWT }) => {
    const navigate = useNavigate();
    const loadGalleryWith = async (e,loggedInUser) => {
        let bookName =e.target.attributes.book.value
        console.log(`bookName ${bookName}`, loggedInUser.books)
        let currentBook = await getBook(bookName,loggedInUser)
        let searchHits = { "hits":currentBook.recipes}
        setSearchResults(searchHits)
        console.log(searchHits)
        navigate("/searchRecipes", {
        });
    }
    return (
        <PageContainer id="userProfilePage">
            <ProfileCard setSearchResults={setSearchResults} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} jwt={jwt} setJWT ={setJWT} />
        
            <Container setSearchResults={setSearchResults}>
                <b>books</b>
                {loggedInUser?.books?.map((e, index) => {
                    return(
                    <p key={index} book={e.bookName} alt={e.bookName} onClick={(e) => loadGalleryWith(e,loggedInUser)}>{e.bookName}</p>
                    )
                })
                }
            </Container>
        
        </PageContainer>
    );

};
export default UserProfilePage;