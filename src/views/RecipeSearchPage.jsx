
import React, { useState } from "react";
import RecipeSearchForm from "../components/RecipeSearchForm/RecipeSearchForm";
import ResultsCounter from "../components/ResultCounter/ResultCounter";
import { PageContainer } from "../css/common-styles";

const RecipeSearchPage = () => {

    const [searchResults,setSearchResults]=useState(0);

    return (
        <PageContainer className="RecipeSearchPage">
        <RecipeSearchForm setSearchResults={setSearchResults}/>
        <ResultsCounter count={searchResults.count || null}></ResultsCounter>
        
        </PageContainer>
    )
};
export default RecipeSearchPage;