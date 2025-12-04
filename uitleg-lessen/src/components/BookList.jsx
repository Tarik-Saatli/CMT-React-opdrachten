import Book from "./Book";
import { useState } from "react";
import BookCounter from "./BookCounter";
import BookData from "../book-data.js";
import books from "../book-data.js";

const BookList = () => {

  const [books, setbooks] = useState(BookData);
  const [searchInput, setSearchInput] = useState('');
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const categories = ['Alle', 'Fantasy', 'Avontuur', 'Sciencefiction', 'Thriller', 'Romance']

  const filterHandler = (e) => {
    e.preventDefault();

    let category = e.target.value
    setSelectedCategory(category)
    if (category === 'Alle') {
      setbooks(BookData)
    }

    else {
      const filteredBooks = BookData.filter((book) =>
        book.category === category
      );
      setbooks(filteredBooks)

    }
  }
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
      <div className="filter">
        <label htmlFor="Filter op categorie"></label>
        <select name="" id="category" value={selectedCategory} onChange={filterHandler}>

          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
      
      </div>
      <BookCounter
        aantal={books.length} />

      {books.map((book) => (
        <Book
          key={book.id}
          title={book.title}
          author={book.author}
          image={book.image}
          category={book.category} />


      ))}


    </section>
  );
}

export default BookList;