
import { PageContainer } from "../css/common-styles"
import { loginUser} from "../utils";
import { useState } from "react";
// import {useNavigate } from "react-router-dom";
import "../css/logInPage.css";
import { getCookie } from "../common";


const LoginPage = ({ setJWT, action, setter, jwt, setforcelogin }) => {
    const [obj, setObj] = useState({});
    // const navigate = useNavigate();

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log(obj);
        let temp = await loginUser(obj, setJWT, setter);
        console.log("the temp is:", temp, jwt);
        let cookie = getCookie("jwt_token");
		if (cookie) {
            window.location.replace("/UserProfile");
		}
    }


    return (
        
        <PageContainer id="loginPage">
            {/* {action ==="logout" ? logout() : null } */}
            <h2>Enter your username and Password below to login</h2>
            {action}
            <form id="loginPageForm" onSubmit={submitHandler}>

                <label>
                    <span>username</span>
                    <input
                        onChange={(event) => {
                            setObj(obj => (
                                {
                                    ...obj,
                                    "username": event.target.value
                                }
                            ))
                        }} type="text" required />
                </label>
                <label>
                    <span>password</span>
                    <input onChange={(event) => {
                        setObj(obj => (
                            {
                                ...obj,
                                "password": event.target.value
                            }
                        ))
                    }} type="password" required />
                </label>
                <button className="login-btn" type="submit" >Click Here to LogIn</button>
            </form>

        </PageContainer>
    );
};
export default LoginPage;