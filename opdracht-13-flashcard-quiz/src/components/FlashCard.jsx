import { useState } from "react";
const Flashcard = ({question, answer}) => {

    const [flipped, setflipped] = useState(true);

    const flippedHandler = () => {
        setflipped(!flipped)
    }

        return (
            <section onClick={flippedHandler}>
                {flipped ? <h2>{question}</h2> : <h2>{answer}</h2>}
            </section>);
    }

    export default Flashcard;