
import { PageContainer } from "../css/common-styles"
import { loginUser } from "../utils";
import { useState } from "react";
import "../css/logInPage.css";


const LoginPage = ({ setJWT, action, setter }) => {
    const [obj, setObj] = useState({});
    const submitHandler = async (event) => {
        event.preventDefault();
        console.log(obj);
        await loginUser(obj, setJWT, setter);
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