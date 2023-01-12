
import "../css/homepage.css"
import { PageContainer } from "../css/common-styles"

const Homepage = () => {


    return (
    <PageContainer id="homepage">
        <h2 class="">homepage</h2>
        <nav class="navbar">
            <div class="outer">
                <div class="btn-group">
                    
                    <button class="btn-lg"><a class="homepageLink" href="/Login">Log in</a></button>
                    <button class="btn-lg"><a class="homepageLink" href="/registerUser">Register</a></button>
                
                </div>
                <div class="inner">
                    <button class="btn-lg"><a class="homepageLink" href="/searchRecipes">Search recipe</a></button>
                </div>
            </div>
        </nav>
 

    </PageContainer>

    );
};
export default Homepage;