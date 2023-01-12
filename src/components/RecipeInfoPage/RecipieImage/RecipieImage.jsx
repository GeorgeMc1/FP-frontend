import RecipeImageContainer from "./RecipeImageContainer";

const RecipieImage = ({ data }) => {
    console.log("inside RecipieImageContainer")
    console.debug(data)

    return (
        <RecipeImageContainer>
            <img src={data.REGULAR.url} alt="recipe"/>
        </RecipeImageContainer>
    );
};
export default RecipieImage;