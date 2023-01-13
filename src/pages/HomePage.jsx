
import "../css/homepage.css"
import { PageContainer } from "../css/common-styles"

const Homepage = () => {


    return (
    <PageContainer id="homepage">
        <h2 className="">homepage</h2>
        <nav className="navbar">
            <div className="outer">
                <div className="btn-group">
                    
                    <button className="btn-lg"><a className="homepageLink" href="/Login">Log in</a></button>
                    <button className="btn-lg"><a className="homepageLink" href="/registerUser">Register</a></button>
                
                </div>
                <div className="inner">
                    <button className="btn-lg"><a className="homepageLink" href="/searchRecipes">Search recipe</a></button>
                </div>
            </div>
        </nav>
 

    </PageContainer>

    );
};
export default Homepage;