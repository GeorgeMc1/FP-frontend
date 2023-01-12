import { PageContainer } from "../css/common-styles"

const Homepage = () => {


    return (
    <PageContainer id="homepage">
        <h2>homepage</h2>

        <nav>
            <a href="/Login">Log in</a><br></br>
            <a href="/registerUser">Register</a><br></br>
            <a href="/searchRecipes">Search recipe</a>
        </nav>
 

    </PageContainer>

    );
};
export default Homepage;