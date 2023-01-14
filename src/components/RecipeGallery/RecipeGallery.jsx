import React, { useState } from 'react';
import "../../css/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';
import { useNavigate } from "react-router-dom";
import { updateUser } from '../../utils';
import FavHeartIcon from "../../components/FavHeartIcon/FavHeartIcon.jsx";





//https://www.npmjs.com/package/react-responsive-carousel

const RecipeGallery = ({ jwt, searchResults, setRecipe, galleryIndexMemory, setIndexMemory, loggedInUser }) => {

    const navigate = useNavigate();

    const [searchResultHits] = useState(searchResults.hits);

    console.log(galleryIndexMemory)

    const [galleryIndex, setGalleryIndex] = useState(galleryIndexMemory || 0)
    const [liked, setLiked] = useState(false)

    // const [favs,setFavs] = useState();
    if (loggedInUser.books.bookName === "favourites") {
        //map and store links to array as simple links to fit curent code

        //map and link hits to 

    }

    const onSlideChange = (index) => {
        //store Carousel's current recipie index 
        console.log(index, searchResultHits)
        //store current gallery slide in state for use outside Carousel
        setGalleryIndex(index)
        setIndexMemory(index)
        setLiked(checkIfFavourites())
    }

    const tapped = (index) => {
        console.debug("tapped", index)
        console.debug(searchResultHits[index])
        setRecipe(searchResultHits[index]);
        setIndexMemory(index);
        navigate("/viewRecipie", {
        });
    }

    const checkIfFavourites = () => {
        //match if logged in user favourites contains the recipie.self 
        let match = loggedInUser.favRecipes.includes(searchResultHits[galleryIndex]._links.self.href)
        console.log("match in favs =", match)
        return match
    }

    const replaceBook = async (currentUserBooksArrAy, bookName, bookToAdd) => {
        for (let i = 0; i < currentUserBooksArrAy.length; i++) {
            if (currentUserBooksArrAy[i].bookName === bookName) {
                console.log("hit book name")
                currentUserBooksArrAy[i] = bookToAdd
                return true
            }
        }
        return false;
    }
    const getBook = async (bookName) => {
        for (let i = 0; i < loggedInUser.books.length; i++) {
            if (loggedInUser.books[i].bookName === bookName) {
                console.log("book found in user")
                return loggedInUser.books[i]

            }
        }
        //no book so return empty array or books if others
        return false;
    }


    const toggleBookEntry = async () => {

        let obj = {};
        let bookname = "favourites33"
        let galleryItemsRecipe = searchResultHits[galleryIndex];
        let currentBook = await getBook(bookname);
      
        console.log(`
        ************************************************************
        *             start    toggleBookEntry                     *
        ************************************************************\n`)
        
        //get current recipes
        console.log(`using book ${bookname} \t galleryindex ${galleryIndex} - galleryItemsRecipe \n`, galleryItemsRecipe)
        console.log(`loggedinuser`,loggedInUser)
        console.log("current Book object found\n", currentBook);

        if (currentBook) {

            if (currentBook.recipes.includes(galleryItemsRecipe)) {
                console.log("recipie was in book - removing recipe")
                console.log(currentBook.recipes)
                currentBook.recipes = currentBook.recipes.filter(e => {
                    if (e == galleryItemsRecipe) {
                        return
                    }
                    else {
                        return galleryItemsRecipe
                    }
                })

            } else {
                console.log("recipie not in book -adding recipe")
                currentBook.recipes = [...currentBook.recipes, galleryItemsRecipe]
            }
            console.log("book is now")
            console.log(currentBook);
            console.log(loggedInUser.books)
            //book now rewritten so change it
            obj = {
                "username": loggedInUser.username,
                "key": "books",
                "value": loggedInUser.books
            }

        } else {
            //book not created yet
            console.log(`${bookname} not created yet - creating book\n`);
            let bookToAdd = {
                "bookName": bookname,
                "recipes": [galleryItemsRecipe]
            }
            loggedInUser.books = [...loggedInUser.books, bookToAdd]
            obj = {
                "username": loggedInUser.username,
                "key": "books",
                "value": loggedInUser.books
            }
        }
        let res = await updateUser(obj, jwt)
        console.log(`
        ************************************************************
        *             end    toggleBookEntry                       *
        ************************************************************\n`)
    }



    const toggleFav = async () => {
        let obj = {};
        let newFavs = [];

        toggleBookEntry()

        //favourites
        let match = loggedInUser.favRecipes.includes(searchResultHits[galleryIndex]._links.self.href)
        console.log("match in favs?", match)
        if (match) {
            //unlike
            console.debug("found in user favs - unfavouring")

            newFavs = loggedInUser.favRecipes.filter(e => !e.includes(searchResultHits[galleryIndex]._links.self.href))
            console.debug("num favs", loggedInUser.favRecipes.length)
            obj = {
                "username": loggedInUser.username,
                "key": "favRecipes",
                "value": newFavs
            }
        } else if (!match){
            //like
            console.debug("not in user favs - favouring")
            console.debug("trying to favourite")
            newFavs = [...loggedInUser.favRecipes, searchResultHits[galleryIndex]._links.self.href]

            obj = {
                "username": loggedInUser.username,
                "key": "favRecipes",
                "value": newFavs
            }

        }
        let res = await updateUser(obj, jwt)
        console.log(newFavs)
        if (res.success) {
            console.log("insert")
            loggedInUser.favRecipes = newFavs;
        }
        setLiked(!match)
        console.log("************************************************************\n             end             \n************************************************************\n")

    }
    //liked state needed to rerender 
    //can use in html isLiked but before slide change states not fixed so first 
    //side wont toggle on/off properly
    //easiest work around is as is
    //console.log here to use the state so netlfy stops crying
    console.log("isliked", checkIfFavourites(), liked)
    return (
        <>

            <div className="Carousel" >
                <div className="favBox">
                    <FavHeartIcon isLiked={checkIfFavourites()} toggleFav={toggleFav} />
                    <div className="favTotal">
                        <p >
                            {galleryIndex}
                        </p>
                    </div >

                </div>
                <Carousel
                    selectedItem={galleryIndex}
                    // infiniteLoop={true}
                    useKeyboardArrows={true}
                    emulateTouch={true}
                    className='search-carousel'
                    onChange={onSlideChange}
                    onClickItem={tapped}
                    swipeable={true}
                // autoPlay={true}
                >
                    {
                        searchResultHits.map((result, index) => {
                            let image = result.recipe.image
                            let legend = result.recipe.label
                            return (
                                <div key={index}>

                                    <img src={image} alt={legend} ></img>
                                    <p className="legend">{legend} 1</p>
                                </div>
                            )
                        }
                        )
                    }
                </Carousel>
            </div></>
    )

};
export default RecipeGallery;

