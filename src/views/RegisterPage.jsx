
import { PageContainer } from "../css/common-styles";
import "../css/common.css"
import { useState } from "react";
import { createUser } from "../../src/utils"
const RegisterPage = () => {

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
    const [res, setRes] = useState();


    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            console.debug("entering submithandler");
            console.debug(process.env.REACT_APP_REST_API_URL);
            console.debug(obj)
            setRes(await createUser(obj));
        } catch (error) {
            //error
            if (res.error) {
                console.log(res.error)
                return (
                    <p>res.error</p>
                )
            }
        }
    }


    return (

        <PageContainer id="registerPage">
            <h2>Register</h2>
            <>

                <div className="error"> {res?.error}</div>
                {res?.user?.username ? <div className="success"> {res?.user?.username} Created </div> : null}
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


                    <button type="submit" >Create</button>
                </form>
            </>
        </PageContainer>
    );
};
export default RegisterPage;


