import { useState } from "react";

const Book = ({title, author, image}) => {
    const [aantalKeerGelezen, setAantalKeerGelezen] = useState(0)

function verhoogTeller() {
setAantalKeerGelezen(aantalKeerGelezen+1)
}

    return ( 
        <section >
            <img className="img" src={image} alt={title} />
            <h2>{title}</h2>
            <p>{author}</p>
            <button onClick={verhoogTeller}>Keer gelezen:  {aantalKeerGelezen}</button>
        </section>
     );
}
 
export default Book;