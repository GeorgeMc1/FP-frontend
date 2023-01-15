import { PageContainer } from "../css/common-styles"
import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard.jsx"

const UserProfilePage = ({ setSearchResults,loggedInUser, setLoggedInUser, jwt, setJWT }) => {

    return (
        <PageContainer id="userProfilePage">
            <ProfileCard setSearchResults={setSearchResults} loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} jwt={jwt} setJWT ={setJWT} />
        </PageContainer>
    );

};
export default UserProfilePage;