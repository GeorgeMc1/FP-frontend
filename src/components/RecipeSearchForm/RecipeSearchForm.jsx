import React from "react";
import "../../css/common.css"
import { Container } from "../../css/common-styles"
import { useState } from "react";
import { useRef } from 'react'
import { getRecipiesFromApi } from "../../utils"

const RecipeSearchForm = ({ setSearchResults }) => {

    const [searchIngredients, setSearchIngredients] = useState();
    const mealTypeRef = useRef();
    const dishTypeRef = useRef();
    const cuisineTypeRef = useRef();


    const submitHandler = async (e) => {
        e.preventDefault();
        console.debug("staring recipeSearchForm submitHandler")
        //put selected options into arrays
        const mealTypes = [...mealTypeRef.current.options].filter(option => option.selected).map(option => option.value);
        const dishTypes = [...dishTypeRef.current.options].filter(option => option.selected).map(option => option.value);
        const cuisineTypes = [...cuisineTypeRef.current.options].filter(option => option.selected).map(option => option.value);
        console.debug("Ingredients",searchIngredients, "\nmealTypeRef", mealTypes, "\ndishTypeRef", dishTypes, "\ncuisineTypeRef", cuisineTypes)

        let fetchUrl = "https://api.edamam.com/api/recipes/v2?type=public&app_id=7c740329&app_key=f21987039962879e2cea188d07749819";

        //build url for fetch
        if (searchIngredients) {
            let ingredients = searchIngredients.replaceAll(" ", "%20")
            fetchUrl += "&q=" + ingredients
            console.debug("ingredients string = &q", ingredients)
        }

        //add cuisineType
        let cuisineString = ""
        if (cuisineTypes?.length > 0) {
            cuisineTypes.map(cuisineType => {
                cuisineType = cuisineType.replaceAll(" ", "%20");
                return cuisineString += `&cuisineType=${cuisineType}`;
            })
            fetchUrl += cuisineString;
            console.debug("cuisineString = ", cuisineString);
        }


        //add mealType
        let mealString = "";
        if (mealTypes?.length > 0) {
            mealTypes.map(meal => {
                meal = meal.replaceAll(" ", "%20");
                return mealString += `&mealType=${meal}`;
            })
            fetchUrl += mealString;
            console.debug("meal string = ", mealString);
        }

        //add dishtype
        let dishString = ""
        if (dishTypes?.length > 0) {
            dishTypes.map(dishType => {
                dishType = dishType.replaceAll(" ", "%20");
                return dishString += `&dishType=${dishType}`;
            })

            console.debug("dishType string = ", dishString);
            fetchUrl += dishString;
        }

        const data = await getRecipiesFromApi(fetchUrl);
        setSearchResults(data);
    }

    return (
        <Container id="RecipeSearchForm">
            <h2>RecipeSearchPage</h2>
            <form id="recipe-search" onSubmit={submitHandler}>
                <input type="text" placeholder="...ingredients" onChange={
                    (event) => {
                        setSearchIngredients(event.target.value)
                    }
                }
                />

                <select name="mealType" id="mealType" ref={mealTypeRef} multiple={true} size={3} onKeyDown={(e) => { console.log(e);if (e && e.keyCode == 13) submitHandler(e)}}>
                    <option value="breakfast">breakfast</option>
                    <option value="dinner">dinner</option>
                    <option value="Lunch">Lunch</option>
                    <option value="snack">snack</option>
                    <option value="teatime">teatime</option>
                </select>


                <select multiple name="dishType" id="dishType-list" ref={dishTypeRef} onKeyDown={(e) => { console.log(e);if (e && e.keyCode == 13) submitHandler(e)}}>
                    <option value="biscuits and cookies">biscuits and cookies</option>
                    <option value="bread">bread</option>
                    <option value="cereals">cereals</option>
                    <option value="condiments and sauces">condiments and sauces</option>
                    <option value="desserts">desserts</option>
                    <option value="drinks">drinks</option>
                    <option value="main course">main course</option>
                    <option value="pancake">pancake</option>
                    <option value="pasta">pasta</option>
                    <option value="pastry">pastry</option>
                    <option value="pies and tarts">pies and tarts</option>
                    <option value="pizza">pizza</option>
                    <option value="preps">preps</option>
                    <option value="preserve">preserve</option>
                    <option value="salad">salad</option>
                    <option value="sandwiches">sandwiches</option>
                    <option value="seafood">seafood</option>
                    <option value="side dish">side dish</option>
                    <option value="soup">soup</option>
                    <option value="special occasions">special occasions</option>
                    <option value="Starter">Starter</option>
                    <option value="sweets">sweets</option>
                </select>

                <select multiple name="cuisineType" id="cuisineType-list" ref={cuisineTypeRef} onKeyDown={(e) => { console.log(e);if (e && e.keyCode == 13) submitHandler(e)}}>
                    <option value="american">american</option>
                    <option value="asian">asian</option>
                    <option value="british">british</option>
                    <option value="caribbean">caribbean</option>
                    <option value="central europe">central europe</option>
                    <option value="chinese">chinese</option>
                    <option value="eastern europe">eastern europe</option>
                    <option value="French">french</option>
                    <option value="greek">greek</option>
                    <option value="indian">indian</option>
                    <option value="italian">italian</option>
                    <option value="japanese">japanese</option>
                    <option value="korean">korean</option>
                    <option value="kosher">kosher</option>
                    <option value="mediterranean">mediterranean</option>
                    <option value="mexican">mexican</option>
                    <option value="middle eastern">middle eastern</option>
                    <option value="nordic">nordic</option>
                    <option value="south american">south american</option>
                    <option value="south east asian">south east asian</option>
                    <option value="world">world</option>
                    <input type="submit" hidden />
                </select>
                <input type="submit" hidden />
                <button type="submit" >Search Recipies</button>
            </form>
        </Container>
    );

}

export default RecipeSearchForm;