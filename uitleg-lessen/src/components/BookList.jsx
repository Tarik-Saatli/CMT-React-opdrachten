import Book from "./Book";
import { useState } from "react";
import BookCounter from "./BookCounter";
import BookData from "../book-data.js";

const BookList = () => {

  const [books, setbooks] = useState(BookData);

  const [searchInput, setSearchInput] = useState('');

  const handleChange = (e) => {
    e.preventDefault();

    let newSearch = e.target.value

    setSearchInput(newSearch);

    const filteredBooks = BookData.filter((book) =>

      book.title.toLowerCase().includes(newSearch.toLowerCase())
    );

    setbooks(filteredBooks);

  };


  return (
    <section className="book-container">
       <div>
            <input
              type="text"
              placeholder="Zoek een titel op"
              onChange={handleChange}
              value={searchInput}
              name="search"
            />
          </div>
      <BookCounter
        aantal={books.length} />

      {books.map((book) => (
        <><Book
          title={book.title}
          author={book.author}
          image={book.image} />


        </>
      ))}


    </section>
  );
}

export default BookList;