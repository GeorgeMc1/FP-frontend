import { PageContainer } from "../css/common-styles"

const RecipeInfoPage = ({data}) => {
console.log("inside recipieinfopage")
console.debug(data)

    return (
    <PageContainer id="recipeInfoPage">
        <h2>RecipeInfoPage</h2>
{data.recipe.label}
    </PageContainer>
    );
};
export default RecipeInfoPage;