
import "../css/homepage.css"
import { PageContainer } from "../css/common-styles"
import homepage from "../assets/images/Home-Page_.png"
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
                <div>
                    <img className ="temp" src={homepage} width="100%" position="absolute" top="0"/>
                </div>
            </div>
        </nav>
 

    </PageContainer>

    );
};
export default Homepage;