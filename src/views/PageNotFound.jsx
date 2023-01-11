
import { Link } from "react-router-dom";
import { PageContainer } from "../css/common-styles"
const PageNotFound = () => {


    return (
    <PageContainer id="page-not-found">
        <h3>Sorry about this but we cant find the page you were looking for</h3>

        <h4> why not try one of these links</h4>
        <PageContainer>
            <Link to="/">HomePage</Link>
        </PageContainer>
    </PageContainer>
    );
};
export default PageNotFound;