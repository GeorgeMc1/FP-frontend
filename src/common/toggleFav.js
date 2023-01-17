import { updateUser } from "../utils";



/**
 *  
 * @description checks current users favourites
 * if recipie exists removes it
 * if not adds it
 * updates backend accordingling
 * 
 * toggles the ability to unlike on or off
 * @param {any} allowToggleOff=true
 * 
 * @param {any} loggedInUser
 * @param {any} recipe
 * 
 * set a components state (you need to define this in component)
 * setting this will rerender the component with correct status
 * @param {any} setLiked
 * 
 * cookie token
 * @param {any} jwt
 * @returns {booean}
 */
export const toggleFav = async (allowToggleOff = true, loggedInUser, recipe, setCurrentRecipeLiked, jwt) => {
    if (loggedInUser) {
        try {
            let obj = {};
            let response;
            let newFavs;
            //favourites
            let match = loggedInUser.favRecipes.includes(recipe._links.self.href)
            if (match && allowToggleOff) {
                //unlike
                newFavs = loggedInUser.favRecipes.filter(e => !e.includes(recipe._links.self.href))
                obj = {
                    "username": loggedInUser.username,
                    "key": "favRecipes",
                    "value": newFavs
                }
                response = await updateUser(obj, jwt)
                setCurrentRecipeLiked(false)
            } else if (!match) {
                //like
                newFavs = [...loggedInUser.favRecipes, recipe._links.self.href]
                obj = {
                    "username": loggedInUser.username,
                    "key": "favRecipes",
                    "value": newFavs
                }
                response = await updateUser(obj, jwt)
                setCurrentRecipeLiked(true)
                console.log("*recipe liked*")
            }
            if (response?.success) {
                loggedInUser.favRecipes = newFavs;
            }
            return true
        } catch (e) {
            return false;
        }
    }

}