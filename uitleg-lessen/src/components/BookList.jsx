import Book from "./Book";

const BookList = () => {
    return ( 
        <section className="book-container">
        <Book 
        title="het leven van een loser" author="Jason"
        image="./images/book-1.png"
        />
      <Book 
      title="killer instinct" author="Jason"
      image="./images/book-2.png"/>
        </section>
     );
}
 
export default BookList;