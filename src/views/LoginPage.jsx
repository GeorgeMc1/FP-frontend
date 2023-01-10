
import { PageContainer } from "../css/common-styles"
const LoginPage = ({action}) => {


    return (
        <PageContainer id="loginPage">
            <h2>LoginPage</h2>
            {action}

        </PageContainer>
    );
};
export default LoginPage;