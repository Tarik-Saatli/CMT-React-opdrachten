import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import animals from '../animals.js';
import Animal from '../components/Animal';

const Home = () => {
  const navigate = useNavigate();
  const [animalList, setAnimalList] = useState(animals);
  const [searchInput, setSearchInput] = useState('');

  const goToDetail = (animalId) => {
    navigate(`/animal/${animalId}`);
  };

  const handleChange = (e) => {
    e.preventDefault();

    let newSearch = e.target.value

    setSearchInput(newSearch);

    const filteredAnimal = animals.filter((animal) =>

      animal.name.toLowerCase().includes(newSearch.toLowerCase())
    );

    setAnimalList(filteredAnimal);
  }


  return (
    <section>
      <h1>Welkom bij onze winkel!</h1>
      <h2>Onze Producten</h2>
      
      <div>
        <input
          type="text"
          placeholder="Zoek een titel op"
          onChange={handleChange}
          value={searchInput}
          name="search"
        />
      </div>

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