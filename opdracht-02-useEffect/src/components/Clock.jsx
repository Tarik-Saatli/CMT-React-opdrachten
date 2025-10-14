import { useEffect, useState } from "react";



const Clock = () => {
    const [currentTime , setCurrentTime] = useState(new Date());

    useEffect(() => { 

        const intervalId = setInterval(() => {
            setCurrentTime(new Date)

        }, 1000)

        return () => {
            clearInterval(intervalId);
        };
        

        }, []); 

    return ( <section>
        <h2>{currentTime.toLocaleTimeString()}</h2>
    </section> );
}
 

export default Clock;