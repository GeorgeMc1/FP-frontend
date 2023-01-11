import React from "react";
import RecipeGallery from "../components/RecipeGallery/RecipeGallery";
import RecipeSearchForm from "../components/RecipeSearchForm/RecipeSearchForm";
import ResultsCounter from "../components/ResultCounter/ResultCounter";
import { PageContainer } from "../css/common-styles";

const RecipeSearchPage = ({searchResults, setSearchResults,setRecipe}) => {

   


    return (
        <PageContainer className="RecipeSearchPage">
            <RecipeSearchForm setSearchResults={setSearchResults} />
            <ResultsCounter count={searchResults?.count || null}></ResultsCounter>
            {searchResults ?
                <RecipeGallery searchResults={searchResults} setRecipe={setRecipe}></RecipeGallery> : null
            }
        </PageContainer>
    )
};
export default RecipeSearchPage;