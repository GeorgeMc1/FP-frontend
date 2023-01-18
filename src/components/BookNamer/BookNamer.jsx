import React, { useState } from "react";
import "./bookNamerStyles.css"
import cogIcon from "../../assets/images/OptionsCog.png"


export const BookNamer = ({

    setCookBookName,
    cookBookName,
    loggedInUser,
    setSearchResults
}) => {
    const [newBookName, setNewBookName] = useState();




    const onCogClick = (e) => {
        console.log("clicked")
    }


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(newBookName, loggedInUser.books);

        let isBookWritten = false;


        for (let i = 0; i < loggedInUser?.books?.length; i++) {
            if (loggedInUser.books[i].bookName === newBookName) {
                console.log("book found in user")
                isBookWritten = loggedInUser.books[i].recipies;
            }


        }
        if (!isBookWritten)
            try {
                let temp;
                if (loggedInUser?.books?.length > 0) {
                    console.log("has books")
                    temp = [...loggedInUser.books, { "bookName": newBookName }]
                    console.log(temp)
                } else {
                    console.log("no book")
                    temp = [{ "bookName": newBookName }]
                    console.log(temp)
                }
                console.log("book not found in user")

                console.log(temp)
            } catch (error) {
                console.log(error)
            }
        setCookBookName(newBookName)

    }

    //set recipe and hits to book
    //navigate to self?



    return (

        <div className="bookNamer">
            <form className="bookNamerForm" onSubmit={submitHandler}>
                <input type="text" defaultValue="New Menu" placeholder="New Menu"
                    onChange={(event) => {
                        setNewBookName(event.target.value)

                    }}

                />
                <button className="noButtonShow" type="submit">  <img id="cogImg" src={cogIcon} alt="editCog" onClick={(e) => { onCogClick(e) }} /></button>
            </form>
        </div>
    )
}


