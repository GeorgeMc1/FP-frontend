import React from "react";
import RecipeGallery from "../components/RecipeGallery/RecipeGallery";
import RecipeSearchForm from "../components/RecipeSearchForm/RecipeSearchForm";
import ResultsCounter from "../components/ResultCounter/ResultCounter";
import { PageContainer, ContainerFlexedColumn, GalleryContainer } from "../css/common-styles";
import "../css/recipeSearchPage.css"
import RecentSearch from "../components/RecentSearch"
import UsersBooks from "../components/UsersBooks";
import Todo from "../components/todoPanel";
import img1  from "../assets/images/temp1.jpg"
import img4 from "../assets/images/temp4.jpg"

import img3  from "../assets/images/temp3.png"

import img2  from "../assets/images/temp2.jpg"
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

    isInBook, setIsInBook

}) => {
    console.log(searchResults)
    return (
        <PageContainer className="RecipeSearchPage">
            {!searchResults || searchResults?.hits <= 0
                ?


                <ContainerFlexedColumn>
                    <div className="formAndBooksContainer">
                        <UsersBooks user={loggedInUser} setSearchResults={setSearchResults} setCookBookName={setCookBookName}/>
                        <RecipeSearchForm setSearchResults={setSearchResults} loggedInUser={loggedInUser} />
                        <ResultsCounter count={searchResults?.count || null}></ResultsCounter>
                    </div>
                    <RecentSearch />
                </ContainerFlexedColumn>
  :

  <div className="flexrow">

                :
<div className="flexCol">
                        <Todo text1={"Print out your menus"} imgsrc={img1}></Todo>
                        <Todo text1={"Share your Menu Books!"} imgsrc={img2}></Todo>
                    </div>

                <ContainerFlexedColumn>
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
                  <div className="flexCol">
                  <Todo text1={"Daily Meal Planner"} imgsrc={img3}></Todo>
                  <Todo text1={"Print off shopping lists"} imgsrc={img4}></Todo>
              </div>
              </div>
            }
        </PageContainer>
    )
};
export default RecipeSearchPage;