import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import animals from '../animals.js';
import Animal from '../components/Animal';

const Home = () => {
  const navigate = useNavigate();
  const [animalList, setAnimalList] = useState(animals);

  const goToDetail = (animalId) => {
    navigate(`/animal/${animalId}`);
  };

  return (
    <section>
      <h1>Welkom bij onze winkel!</h1>
      <h2>Onze Producten</h2>
      
      {animalList.map(animal => (
        <Animal
          key={animal.id}
          animal={animal}
          onShowDetail={goToDetail}
        />
      ))}
    </section>
  );
};

export default Home;