import React from "react";
import { getBook } from "../../common/getBook";
import "../../css/bookChanger.css"
import { useNavigate } from "react-router-dom";


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
        if (!event.target.matches('.dropbtn')) {
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
        <div className="dropdown">
            <button onClick={() => myFunction()} className="dropbtn">{cookBookName}</button>
            <div id="myDropdown" className="dropdown-content">
                {
                    loggedInUser?.books?.map((e, index) => {
                        let name = e.bookName
                        return (
                            <p onClick={() => changeBook(name)} key={index}>{name}</p>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default BookChanger