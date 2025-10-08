const Book = ({title, author, image}) => {
    return ( 
        <section >
            <img className="img" src={image} alt={title} />
            <h2>{title}</h2>
            <p>{author}</p>
        </section>
     );
}
 
export default Book;