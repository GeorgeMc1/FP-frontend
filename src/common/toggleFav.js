import { updateUser } from "../utils";

export const toggleFav = async (allowToggleFavs , loggedInUser, recipe, setCurrentRecipeLiked, jwt, setFavList, favList) => {
    if (loggedInUser) {
        try {
            let obj = {};
            let response;
            let newFavs;
            
            if (!allowToggleFavs) {return}
            console.log("allow fav toggle?",allowToggleFavs)

            //does users favs contain the recipie
            let match = loggedInUser.favRecipes.includes(recipe._links.self.href)
         
            let isFaved;
            //if so unlike it
            if (match && allowToggleFavs) {
                //unlike
                console.debug("found in user favs - unfavouring")
                //remove recipe from favs
                newFavs = loggedInUser.favRecipes.filter(e => !e.includes(recipe._links.self.href))
                console.debug("num favs", loggedInUser.favRecipes.length)
                obj = {
                    "username": loggedInUser.username,
                    "key": "favRecipes",
                    "value": newFavs
                }
                isFaved = false;
                response = await updateUser(obj, jwt)
                console.log(response)
                setCurrentRecipeLiked(isFaved)
                setFavList(response.value)
                loggedInUser.favRecipes = newFavs;
                console.log("favouties length", newFavs.length)

            } else if (!match  ) {
                //like it
                console.debug("not in user favs - favouring")
                console.debug("trying to favourite")
                newFavs = [...loggedInUser.favRecipes, recipe._links.self.href]

                obj = {
                    "username": loggedInUser.username,
                    "key": "favRecipes",
                    "value": newFavs
                }
                isFaved = true
                response = await updateUser(obj, jwt)
                
                setCurrentRecipeLiked(isFaved)
                setFavList(response.value)
                loggedInUser.favRecipes = newFavs;
                console.log("favouties length", newFavs.length)
            }

            return true
        } catch (e) {
            console.log(e);
            return false;
        }
    }

}