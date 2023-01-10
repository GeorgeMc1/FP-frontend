
import { Container } from "../css/common-styles"
const LoginPage = ({action}) => {


    return (
        <Container id="loginPage">
            <h2>LoginPage</h2>
            {action}

        </Container>
    );
};
export default LoginPage;