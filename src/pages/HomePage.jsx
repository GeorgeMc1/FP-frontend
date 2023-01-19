import "../css/homepage.css"
import { PageContainer } from "../css/common-styles"
import picture1 from "../assets/images/food.jpg"
import { NavLink } from "react-router-dom";
// import homepage from "../assets/images/Home-Page_.png"

const Homepage = () => {
    return (
        <PageContainer id="homepage">
            <div id="demo">
                <div className="signtext">
                    <div className="btntext">
                        <div className="">
                            <p className="text">
                                Don't have an account yet? Click here and start your cooking
                                adventure with FoodBoard
                            </p>
                        </div>
                        <div className="topbtn">
                            <NavLink className="button" to="/SignUp">
                                Sign Up
                            </NavLink>
                        </div>
                    </div >
                    <div className="btntext">
                        <div>
                            <p className="text">
                                Or click here to log in
                            </p>
                        </div>
                        <div className="topbtn">
                            <NavLink className="button" to="/Login">
                                Log In
                            </NavLink>
                        </div>
                    </div>
                </div>
                {/* <div className="level1">
                    <p>most viewed recipes</p>
                </div> */}

                <div className="level2">
                    <figure className="item">
                        <figcaption className="caption">most viewed recipes</figcaption>
                        <div className="row">
                            <div className="imagecontainer">
                                <img src={picture1} alt="" />
                                <div >
                                    text
                                </div>
                            </div>
                        
                            <div className="imagecontainer">
                                <img src={picture1} alt="" />
                                <div >
                                    text
                                </div>
                            </div>

                            <div className="imagecontainer">
                                <img src={picture1} alt="" />
                                <div >
                                    text
                                </div>
                            </div>
                        </div>
                    </figure>
                </div>
            </div>
        </PageContainer>
    );
};
export default Homepage;