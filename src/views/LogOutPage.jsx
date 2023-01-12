import "../css/logInPage.css";
import { deleteCookie } from "../common";
import { useNavigate } from "react-router-dom";


const LoginPage = ({ setJWT, action, setter }) => {
   
    const navigate = useNavigate();

    setJWT();
    setter();
    deleteCookie("jwt_token")
    action = "login"


    navigate("/", {
    });

    return (

        <></>
    );
};
export default LoginPage;