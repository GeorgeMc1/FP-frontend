import { PageContainer } from "../css/common-styles"

const UserProfilePage = ({loggedInUser,setLoggedInUser,jwt,setJWT}) => {


    return (
    <PageContainer id="userProfilePage">
        <h2>User Profile Page</h2>
       <p> { loggedInUser?loggedInUser.username : null}</p>
       <p> { jwt?jwt : null} </p>
    </PageContainer>
    );
};
export default UserProfilePage;