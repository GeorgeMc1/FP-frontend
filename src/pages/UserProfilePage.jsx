import { PageContainer } from "../css/common-styles"
import React from "react";
import ProfileCard from "../components/ProfileCard/ProfileCard.jsx"

const UserProfilePage = ({ loggedInUser, setLoggedInUser, jwt, setJWT }) => {

    return (
        <PageContainer id="userProfilePage">
            <ProfileCard loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} jwt={jwt} />
        </PageContainer>
    );

};
export default UserProfilePage;