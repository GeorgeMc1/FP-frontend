import React, { useState } from "react";
import RecipeGallery from "../components/RecipeGallery/RecipeGallery";
import RecipeSearchForm from "../components/RecipeSearchForm/RecipeSearchForm";
import ResultsCounter from "../components/ResultCounter/ResultCounter";
import { PageContainer } from "../css/common-styles";

const RecipeSearchPage = () => {

    const [searchResults, setSearchResults] = useState(0);


    return (
        <PageContainer className="RecipeSearchPage">
            <RecipeSearchForm setSearchResults={setSearchResults} />
            <ResultsCounter count={searchResults.count || null}></ResultsCounter>
            {searchResults ?
                <RecipeGallery searchResults={searchResults}></RecipeGallery> : null
            }
        </PageContainer>
    )
};
export default RecipeSearchPage;