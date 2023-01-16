export const getBook = async (bookName, loggedInUser) => {
    if (loggedInUser) {
        for (let i = 0; i < loggedInUser.books.length; i++) {
            if (loggedInUser.books[i].bookName === bookName) {
                console.log("book found in user")
                return loggedInUser.books[i]

            }
        }
        //no book so return empty array or books if others
        return false;
    }
}