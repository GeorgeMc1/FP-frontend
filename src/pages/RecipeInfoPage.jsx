import { PageContainer } from "../css/common-styles"
import React from 'react';
import RecipieImage from "../components/RecipeInfoPage/RecipeImage/RecipeImage";
import RecipeInfoPageAction from "../components/RecipeInfoPage/RecipeInfoPageActionContainer/RecipeInfoPageAction"
import styled from "styled-components";
import InfoBottomSec from "../components/RecipeInfoPage/InfoBottomSec";
import FavBookIconBar from "../components/FavBookIconBar/FavBookIconBar";

const RecipeInfoPage = ({
    data,
    loggedInUser,
    galleryIndex,
    setSearchResults,
    setIndexMemory,
    jwt,
    searchResults,
    setCurrentRecipeLiked,
    setCookBookName,
    cookBookName,
    favList,
    setFavList,
    recipe,
    isInBook,
    setIsInBook
}) => {
    console.log("inside recipieinfopage");
    console.debug(data);
    console.log(searchResults, galleryIndex)
    const images = data?.recipe.images;
    // const ingredients = data.recipe.ingredients;
    // const totalDaily = data.recipe.totalDaily;
    // const totalNutrients = data.recipe.totalNutrients;
    const digest = data?.recipe.digest;
    const cautions = data?.recipe.cautions;
    // const calories = data.recipe.calories;
    const cuisineType = data?.recipe.cuisineType;
    const dishType = data?.recipe.dishType;
    // const healthLabels = data.recipe.healthLabels
    const ingLines = data?.recipe.ingredientLines;
    const timeToPlate = data?.recipe.totalTime;
    const serves = data?.recipe.yield;
    const mealType = data?.recipe.mealType;
    const recipeLink = data?.recipe.url;
    const selfLink = data?._links.self.href;
    //theres still more

    return (
        <PageContainer id="recipeInfoPage">
            <h2>{data.recipe.label}</h2>
            <TopRow>
                <div>
                    <FavBookIconBar
                        loggedInUser={loggedInUser}
                        galleryIndex={galleryIndex}
                        setSearchResults={setSearchResults}
                        setIndexMemory={setIndexMemory}
                        jwt={jwt}
                        searchResults={searchResults}
                        setCurrentRecipeLiked={setCurrentRecipeLiked}
                        setCookBookName={setCookBookName}
                        cookBookName={cookBookName}
                        favList={favList}
                        setFavList={setFavList}
                        isInBook={isInBook}
                        setIsInBook={setIsInBook}
                        recipeObj={data} />
                    <RecipieImage data={images} selfLink={selfLink} />
                </div>
                <RecipeInfoPageAction
                    timeToPlate={timeToPlate}
                    cuisineType={cuisineType}
                    dishType={dishType}
                    mealType={mealType}
                    serves={serves}
                    link={recipeLink} />
            </TopRow>
            <InfoBottomSec ingLines={ingLines} cautions={cautions} digest={digest} />
        </PageContainer>
    );
};

const TopRow = styled.div`
    display: flex;
    justify-content: center;
`
export default RecipeInfoPage;