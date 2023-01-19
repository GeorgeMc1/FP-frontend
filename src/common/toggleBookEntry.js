import { updateUser } from "../utils";
import { toggleFav } from "./toggleFav";


export const toggleBookEntry = async (updateFav, isInBook, setIsInBook, loggedInUser, recipe, setCurrentRecipeLiked, jwt, cookBookName, setFavList, favList) => {
    try {

        if (loggedInUser) {
            let obj = {};
            let bookname = cookBookName || "default"
            let galleryItemsRecipe = recipe;


            //does book exist
            let currentBook;
            for (let i = 0; i < loggedInUser?.books?.length; i++) {
                if (loggedInUser.books[i].bookName === bookname) {
                    console.log("book found in user")
                    currentBook = loggedInUser.books[i];
                }
            }


            //current book is { bookname: "" ,recipies [{recipe:var,links:v}]}

            //if book not written - will be adding recipe to new book obj
       
            if (!currentBook) {
                console.log(`${bookname} not created yet - creating book\n`);
                let bookToAdd = {
                    "bookName": bookname,
                    "recipes": [galleryItemsRecipe]
                }
                //to the users book collection
                loggedInUser.books = [...loggedInUser.books, bookToAdd]
                obj = {
                    "username": loggedInUser.username,
                    "key": "books",
                    "value": loggedInUser.books
                }
                setIsInBook(true);

            }

            //if the books already written
            if (currentBook) {
                //does it include the recipe
                if (currentBook?.recipes?.includes(galleryItemsRecipe)) {
                    //if so remove it
                    console.log("recipie was in book - removing recipe from book")
                    currentBook.recipes = await currentBook.recipes.filter(e => {
                        if (e === galleryItemsRecipe) {
                            return false
                        }
                        else {
                            return galleryItemsRecipe
                        }
                    })
                    setIsInBook(false)

                    console.log(currentBook)
                }
                //if NOT in book - add it
                else {
                    console.log("recipie not in book -adding recipe")
                    if (currentBook.recipes) {
                        currentBook.recipes = [...currentBook.recipes, galleryItemsRecipe]
                    }
                    else {
                        currentBook.recipes = [galleryItemsRecipe]
                    }

                    setIsInBook(true)
                }

                //book now rewritten so change it
                obj = {
                    "username": loggedInUser.username,
                    "key": "books",
                    "value": loggedInUser.books
                }
                console.log(obj)

            }

            await updateUser(obj, jwt)

            await toggleFav(false, loggedInUser, recipe, setCurrentRecipeLiked, jwt, setFavList, favList)





        }
    } catch (err) { console.log("error in toggleBookEntry", err) }
}