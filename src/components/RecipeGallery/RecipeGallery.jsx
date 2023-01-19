import "../../css/carousel.min.css"

import CarouselWrapper from '../CarouselWrapper/CarouselWrapper';

//https://www.npmjs.com/package/react-responsive-carousel

const RecipeGallery = ({ jwt,
    currentRecipeLiked, setCurrentRecipeLiked,
    searchResults, setSearchResults,
    setRecipe, recipe,
    galleryIndexMemory, setIndexMemory,
    cookBookName, setCookBookName,
    currentRecipeInCurrentBook, setCurrentInCurrentBook,
    loggedInUser,
    favList,
    setFavList,
    isInBook, setIsInBook
}) => {


    return (
    <CarouselWrapper
        jwt={jwt}
        currentRecipeLiked={currentRecipeLiked}
        setCurrentRecipeLiked={setCurrentRecipeLiked}
        searchResults={searchResults}
        setSearchResults={setSearchResults}
        setRecipe={setRecipe}
        recipe={recipe}
        galleryIndexMemory={galleryIndexMemory}
        setIndexMemory={setIndexMemory}
        cookBookName={cookBookName}
        setCookBookName={setCookBookName}
        currentRecipeInCurrentBook={currentRecipeInCurrentBook}
        setCurrentInCurrentBook={setCurrentInCurrentBook}
        loggedInUser={loggedInUser}
        favList={favList}
        setFavList={setFavList}
        isInBook={isInBook}
        setIsInBook={setIsInBook} />)




};
export default RecipeGallery;