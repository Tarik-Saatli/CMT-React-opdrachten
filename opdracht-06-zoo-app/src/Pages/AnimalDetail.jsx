import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import animals from '../animals.js';

const ProductDetail = () => {
  const { animalId } = useParams();
  const navigate = useNavigate();
  const [animalList, setProductList] = useState(animals);
  
  const animal = animalList.find(p => p.id === Number(animalId));

  if (!animal) {
    return <div>Animal niet gevonden!</div>;
  }

  return (
    <section>
      <button onClick={() => navigate('/')}>
        ← Terug
      </button>
      
      <h1>{animal.name}</h1>
     <img src={animal.imageUrl} alt={animal.name} />
      <p>Beschrijving: {animal.description}</p>
    </section>
  );
};

export default ProductDetail;