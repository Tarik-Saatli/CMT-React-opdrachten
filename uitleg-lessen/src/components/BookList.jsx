import Book from "./Book";
import { useState } from "react";
import BookCounter from "./BookCounter";

const BookList = () => {

  const [books, setbooks] = useState([
    {
      title: 'het leven van een loser',
      author: 'Jason',
      image: './images/book-1.png',
    },
    {
      title: 'killer instinct',
      author: 'Jason',
      image: './images/book-2.png',
    },
  ]
  );



  return (
    <section className="book-container">
      <BookCounter
      aantal={books.length}/>

      {books.map((book) => (
        <Book
          title={book.title}
          author={book.author}
          image={book.image}

        />
      ))}


    </section>
  );
}

export default BookList;