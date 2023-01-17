
import { PageContainer } from "../css/common-styles";
import "../css/common.css"
import "../css/registerPage.css"
import { useState } from "react";
import { createUser } from "../../src/utils"
import { useNavigate } from "react-router-dom";
import { loginUser } from "../utils";
import image from "../assets/images/form-img.png";


const RegisterPage = ({ setJWT, setter }) => {

    /* backend createuser schema required formatting as below
    {
    "firstname": "test2",
    "lastname": "",
    "username": "Test2",
    "email": "test2@email.com",
    "password": "Test123!"
    }
     */

    //obj is the user data formatted as needed by backend api to create
    //res set in submit handler with either result or error message from createUser
    const [obj, setObj] = useState({});
    const [errMsg, setErrorMsg] = useState();

    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            console.debug("entering submithandler");
            console.debug(process.env.REACT_APP_REST_API_URL);
            console.debug(obj)
            let t = await createUser(obj);
            console.log("createuser Response", t)

            if (t.success) {
                let submitResp = await loginUser(obj, setJWT, setter);
                console.log(submitResp)
                navigate("/UserProfile")
            }
            if (t?.error) {
                setErrorMsg(t.error)
            }
        } catch (error) {
            setErrorMsg(error)
            return (
                <p>res.error</p>
            )
        }
    }

    return (
        <PageContainer id="registerPage">
            <div className="error"> {errMsg}</div>
            <h3 className="message">Welcome to FoodBoard! Please fill the form to create your account</h3>
            <div id="signupContainer">
                <img src={image} alt="signup"/>
                <form id="registerPageForm" onSubmit={submitHandler}>
                        <label>First Name</label>
                        <input
                            onChange={(event) => {
                                setObj(obj => (
                                    {
                                        ...obj,
                                        "firstname": event.target.value
                                    }
                                ))
                            }} type="text" required />
                        <label>Surname</label>
                        <input
                            onChange={(event) => {
                                setObj(obj => (
                                    {
                                        ...obj,
                                        "lastname": event.target.value
                                    }
                                ))
                            }} type="text" />
                        <label>username</label>
                        <input
                            onChange={(event) => {
                                setObj(obj => (
                                    {
                                        ...obj,
                                        "username": event.target.value
                                    }
                                ))
                            }} type="text" required />
                        <label>Email</label>
                        <input onChange={(event) => {
                            setObj(obj => (
                                {
                                    ...obj,
                                    "email": event.target.value
                                }
                            ))
                        }} type="text" required />
                        <label>password</label>
                        <input onChange={(event) => {
                            setObj(obj => (
                                {
                                    ...obj,
                                    "password": event.target.value
                                }
                            ))
                        }} type="password" required />
                        <button className="signUp-btn" type="submit" >Create</button>
                </form>
            </div>
        </PageContainer>
    );
};
export default RegisterPage;


