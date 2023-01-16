import { updateUser } from "../utils";
import { toggleFav } from "./toggleFav";
import { getBook } from "./getBook"

export const toggleBookEntry = async (updateFav, loggedInUser, recipe, setCurrentRecipeLiked, jwt, cookBookName) => {
    if (loggedInUser) {
        let obj = {};
        let bookname = cookBookName || "xmas"
        let galleryItemsRecipe = recipe;
        let currentBook = await getBook(bookname, loggedInUser);

        console.log(`
    ************************************************
    *             start    toggleBookEntry         *
    ************************************************\n`)

        //get current recipes
        console.log(`using book ${bookname} \t  - galleryItemsRecipe \n`, galleryItemsRecipe)
        console.log(`loggedinuser`, loggedInUser)
        console.log("current Book object found\n", currentBook);

        if (currentBook) {

            if (currentBook.recipes.includes(galleryItemsRecipe)) {
                console.log("recipie was in book - removing recipe")
                console.log(currentBook.recipes)
                currentBook.recipes = currentBook.recipes.filter(e => {
                    if (e === galleryItemsRecipe) {
                        return false
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
        await toggleFav(updateFav, loggedInUser, recipe, setCurrentRecipeLiked, jwt)
        let res = await updateUser(obj, jwt)
        console.log(res, loggedInUser)
        let roughObjSize = JSON.stringify(loggedInUser).length;
        console.log(roughObjSize)
        console.log(`
    **********************************************
    *             end    toggleBookEntry         *
    **********************************************\n`)
    }
}