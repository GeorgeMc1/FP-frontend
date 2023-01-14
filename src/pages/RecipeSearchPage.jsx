import React from "react";
import RecipeGallery from "../components/RecipeGallery/RecipeGallery";
import RecipeSearchForm from "../components/RecipeSearchForm/RecipeSearchForm";
import ResultsCounter from "../components/ResultCounter/ResultCounter";
import { PageContainer, ContainerFlexedColumn, GalleryContainer } from "../css/common-styles";
import "../css/recipeSearchPage.css"

const RecipeSearchPage = ({ jwt,searchResults, setSearchResults, setRecipe, setIndexMemory, galleryIndexMemory,loggedInUser }) => {

    return (
        <PageContainer className="RecipeSearchPage">
            {!searchResults ?
                <ContainerFlexedColumn>
                    <RecipeSearchForm setSearchResults={setSearchResults} loggedInUser={loggedInUser}/>
                    <ResultsCounter count={searchResults?.count || null}></ResultsCounter>
                </ContainerFlexedColumn> :
                <ContainerFlexedColumn>
                    <button className="searchAgain" onClick={(e) => { setSearchResults() }}>Search Again</button>
                    <GalleryContainer>
                        <RecipeGallery jwt={jwt} searchResults={searchResults} setRecipe={setRecipe} setIndexMemory={setIndexMemory} galleryIndexMemory={galleryIndexMemory} loggedInUser={loggedInUser}></RecipeGallery>
                    </GalleryContainer>
                </ContainerFlexedColumn>
            }
        </PageContainer>
    )
};
export default RecipeSearchPage;