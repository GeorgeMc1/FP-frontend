import "../css/logInPage.css";
import { deleteCookie } from "../common";

const LoginPage = ({ setJWT, action, setter }) => {
   
    setJWT();
    setter();
    deleteCookie("jwt_token")
    action = "login"

    window.location.replace('/login');

    return (

        <></>
    );
};
export default LoginPage;