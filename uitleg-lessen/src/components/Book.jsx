import { useState } from "react";

const Book = ({ title, author, image, category, description, pages, years }) => {
    const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0)
    const [liked, setLiked] = useState(false)
    const [isFlipped, setIsFlipped] = useState(false)

    function handleFlip() {
        setIsFlipped(!isFlipped)
    }

    function toggleLike() {
        setLiked(!liked)
    }

    function verhoogTeller() {
        setAantalKeerGelezen(aantalKeerGelezen + 1)
    }

    return (
        <article className={`book ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip} >

            <div className="book-inner">

            <div className="book-front">

                <img className="img" src={image} alt={title} />
                <h2>{title}</h2>
                <p>{author}</p>
                <p>{category}</p>

                <div className="favorite-section">
                    <button onClick={toggleLike}>
                        {liked ? '❤️' : '🤍'}
                    </button>
                    {liked && <p className="favorited-text">Toegevoegd aan favorieten</p>}
                </div>
                </div>

                <button onClick={verhoogTeller}>Keer gelezen:  {aantalKeerGelezen}</button>
                <div className="book-back">
                    <h2>Details boek</h2>
                    <p>{description}</p>
                    <p>{pages}</p>
                    <p>{years}</p>
                </div>

            </div>
        
        </article>
    );
}

export default Book;