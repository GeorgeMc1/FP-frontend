import React from "react";
import RecipeGallery from "../components/RecipeGallery/RecipeGallery";
import RecipeSearchForm from "../components/RecipeSearchForm/RecipeSearchForm";
import ResultsCounter from "../components/ResultCounter/ResultCounter";
import { PageContainer, ContainerFlexedColumn, GalleryContainer } from "../css/common-styles";
import "../css/recipeSearchPage.css"

const RecipeSearchPage = ({
    currentRecipeLiked,
    setCurrentRecipeLiked,
    jwt, searchResults,
    setSearchResults,
    setRecipe,
    setIndexMemory,
    galleryIndexMemory,
    loggedInUser,
    cookBookName,
    setCookBookName,
    favList,
    setFavList,
    
    isInBook,setIsInBook

}) => {
    return (
        <PageContainer className="RecipeSearchPage">
            {!searchResults ?
                <ContainerFlexedColumn>
                    <RecipeSearchForm setSearchResults={setSearchResults} loggedInUser={loggedInUser} />
                    <ResultsCounter count={searchResults?.count || null}></ResultsCounter>
                </ContainerFlexedColumn> :
                <ContainerFlexedColumn>
                    <button className="searchAgain" onClick={(e) => { setSearchResults() }}>Search Again</button>
                    <GalleryContainer>
                        <RecipeGallery jwt={jwt}
                            currentRecipeLiked={currentRecipeLiked}
                            setCurrentRecipeLiked={setCurrentRecipeLiked}
                            searchResults={searchResults}
                            setRecipe={setRecipe}
                            setIndexMemory={setIndexMemory}
                            setSearchResults={setSearchResults}
                            galleryIndexMemory={galleryIndexMemory}
                            loggedInUser={loggedInUser}
                            cookBookName={cookBookName}
                            setCookBookName={setCookBookName}
                            favList={favList}
							setFavList={setFavList}
                            
							isInBook={isInBook} setIsInBook={setIsInBook}

                        ></RecipeGallery>
                    </GalleryContainer>
                </ContainerFlexedColumn>
            }
        </PageContainer>
    )
};
export default RecipeSearchPage;