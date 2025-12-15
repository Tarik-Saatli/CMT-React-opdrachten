import Flashcard from "./FlashCard";
import data from "../data";

const FlashCardList = () => {
    return ( 
        <section>
         
        {data.map(d => (
            <Flashcard question ={d.question} answer={d.answer}/>
        ))}
        </section>
     );
}
 
export default FlashCardList;