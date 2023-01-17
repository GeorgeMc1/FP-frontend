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
                                DON'T HAVE AN ACCOUNT YET? CLICK HERE AND START YOUR COOKING
                                ADVENTURE WITH FOODBOARD
                            </p>
                        </div>
                        <div className="topbtn">
                            <NavLink className="button" to="/SignUp">
                                SIGN UP
                            </NavLink>
                        </div>
                    </div >
                    <div className="btntext">
                        <div>
                            <p className="text">
                                OR CLICK HERE TO LOG IN
                            </p>
                        </div>
                        <div className="topbtn">
                            <NavLink className="button" to="/Login">
                                LOG IN
                            </NavLink>
                        </div>
                    </div>
                </div>
                <div className="level1">
                    <p>most viewed recipes</p>
                </div>
                <div className="level2">
                    <div >
                        <img src={picture1} width="250px" alt="" />
                        <div >
                            text
                        </div>
                    </div>
                    <div  >
                        <img src={picture1} width="250px" alt="" />
                        <div >
                            text
                        </div>
                    </div>
                    <div  >
                        <img src={picture1} width="250px" alt="" />
                        <div >
                            text
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
};
export default Homepage;