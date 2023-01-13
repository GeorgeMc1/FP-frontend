
import { Link } from "react-router-dom";
import { PageContainer } from "../css/common-styles";
import "../css/pagenotfound.css" ;
const PageNotFound = () => {


    return (
        <div id="margin-top" className="content">
            <PageContainer id="page-not-found">
                <div className="errmessage">
                    <h1>Error 404</h1>
                </div>
                <div>
                    <h3>Sorry about this but we cant find the page you were looking for.</h3>
                </div>
                <div>
                    <h4>Why not try one of the links bellow?</h4>
                </div>
            <div className="width">
                <div className="linkbox">
                    <Link className="link" to="/">HomePage</Link>
                </div>
                <div className="linkbox">
                    <Link className="link" to="/searchRecipes">Recipe Search</Link>
                </div>
                <div className="linkbox">
                    <Link className="link" to="/registerUser">Register with us</Link>
                </div>
            </div>
            </PageContainer>
        </div>
    );
};
export default PageNotFound;