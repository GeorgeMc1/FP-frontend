import React from "react";
import RecipeGallery from "../components/RecipeGallery/RecipeGallery";
import RecipeSearchForm from "../components/RecipeSearchForm/RecipeSearchForm";
import ResultsCounter from "../components/ResultCounter/ResultCounter";
import { PageContainer, ContainerFlexedColumn, GalleryContainer } from "../css/common-styles";
import "../css/recipeSearchPage.css"

const RecipeSearchPage = ({ searchResults, setSearchResults, setRecipe, setIndexMemory, galleryIndexMemory }) => {

    return (
        <PageContainer className="RecipeSearchPage">
            {!searchResults ?
                <ContainerFlexedColumn>
                    <RecipeSearchForm setSearchResults={setSearchResults} />
                    <ResultsCounter count={searchResults?.count || null}></ResultsCounter>
                </ContainerFlexedColumn> :
                <ContainerFlexedColumn>
                    <button class="searchAgain" onClick={(e) => { setSearchResults() }}>Search Again</button>
                    <GalleryContainer>
                        <RecipeGallery searchResults={searchResults} setRecipe={setRecipe} setIndexMemory={setIndexMemory} galleryIndexMemory={galleryIndexMemory}></RecipeGallery>
                    </GalleryContainer>
                </ContainerFlexedColumn>
            }
        </PageContainer>
    )
};
export default RecipeSearchPage;