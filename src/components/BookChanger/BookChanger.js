import React from "react";
import { getBook } from "../../common/getBook";
import "../../css/favBookIconBar.css"
import { useNavigate } from "react-router-dom";
import { BookNamer } from "../BookNamer/BookNamer";


const BookChanger = ({ setCookBookName, setSearchResults, cookBookName, loggedInUser }) => {
    const navigate = useNavigate();

    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    const myFunction = () => {
        document.getElementById("myDropdown").classList.toggle("show");
    }
    const changeBook = async (name) => {
        if (loggedInUser) {
            console.log(`book change ${name}`)

            let currentBook = await getBook(name, loggedInUser)

            let searchHits = { "hits": currentBook.recipes }
            setCookBookName(name);
            setSearchResults(searchHits)
            console.log("**** searchHits", searchHits);
            navigate("/searchRecipes", {
            });
        }
    }
 
    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        console.log(event)
        if (!event.target.matches('.dropbtn')  ) {
            if (event.target.matches('.holdOpen')) {return}
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

    let allBookNames = loggedInUser?.books?.map((e) => { return e.bookName })
    console.log(allBookNames)

    return (
        <div className="toggleContainer">
        <div className="dropdown">
            <button onClick={() => myFunction()} className="dropbtn">{cookBookName}</button>
            <div id="myDropdown" className="dropdown-content">
                <>
                <BookNamer
                        setCookBookName={setCookBookName}
                        loggedInUser={loggedInUser} />
                    {loggedInUser?.books?.map((e, index) => {
                        let name = e.bookName
                        return (
                            <p className="menuTabs" onClick={() => changeBook(name)} key={index}>{name}</p>
                        )
                    })}
                    </>
                

            </div>
            </div>
        </div>
    )
}

export default BookChanger