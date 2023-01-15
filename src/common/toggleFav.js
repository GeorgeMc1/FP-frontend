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
export const toggleFav = async (allowToggleOff=true,loggedInUser,recipe,setLiked,jwt) => {
   
   try {
    let obj = {};
    let response;
    let newFavs ;
    console.log(`
    **********************************
    *    start    toggleFav          *
    **********************************/n`)
console.log("*******",allowToggleOff)

    //favourites
    let match = loggedInUser.favRecipes.includes(recipe._links.self.href)
    console.log("match in favs?", match)
    if (match && allowToggleOff) {
        //unlike
        console.debug("found in user favs - unfavouring")

        newFavs = loggedInUser.favRecipes.filter(e => !e.includes(recipe._links.self.href))
        console.debug("num favs", loggedInUser.favRecipes.length)
        obj = {
            "username": loggedInUser.username,
            "key": "favRecipes",
            "value": newFavs
        }
        response = await updateUser(obj, jwt)
        setLiked(!match)
    } else if (!match) {
        //like
        console.debug("not in user favs - favouring")
        console.debug("trying to favourite")
        newFavs = [...loggedInUser.favRecipes, recipe._links.self.href]

        obj = {
            "username": loggedInUser.username,
            "key": "favRecipes",
            "value": newFavs
        }
         response = await updateUser(obj, jwt)
         setLiked(!match)
    }
    
    
    if (response?.success) {
        console.log(newFavs)
        console.log("insert")
        loggedInUser.favRecipes = newFavs;
    }
   
    console.log(loggedInUser)
    let roughObjSize = JSON.stringify(loggedInUser).length;
    console.log(roughObjSize)
    console.log(`
    **********************************************
    *             end                            *
    **********************************************\n`)
    return true
} catch (e){
    console.log(e);
    return false;
}

}