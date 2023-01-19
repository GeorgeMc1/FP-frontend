import React from 'react'
import bookRed from "../assets/images/blueBook.png"
import { getBook } from "../common/getBook";
// import { useNavigate } from "react-router-dom";

const UsersBooks = ({ user, setCookBookName,setSearchResults}) => {
    // const navigate = useNavigate();
    const loadGalleryWith = async (e, user) => {
        try {
            let bookName = e.target.attributes.book.value
            console.log(`bookName ${bookName}`, user.books)
            let currentBook = await getBook(bookName, user)
            let searchHits = { "hits": currentBook.recipes }
            console.log(searchHits)
            setSearchResults(searchHits)
            setCookBookName(setCookBookName)
            console.log(searchHits)
            // navigate("/searchRecipes", {
            // });
        } catch (e) { console.log(e) }
    }

  return (
 
    <div className="yourBooksContainer">
                <div className="yourBooksTitle">
                    <p>Your Books</p>
                </div>
                <div className="yourBooks">
                    {user?.books?.map((e, index) => {
                        // console.log(user.books);
                        return (
                            <div className="book" key={index}>
                              
                                <p key={index} book={e.bookName} alt={e.bookName}>{e.bookName}</p>

                                <img className="bookImg" book={e.bookName} alt={e.bookName} src={bookRed} onClick={(e) => loadGalleryWith(e, user)}/>

                            </div>
                        )
                    })
                    }
                </div>
            </div> 
   
  )
}

export default UsersBooks
