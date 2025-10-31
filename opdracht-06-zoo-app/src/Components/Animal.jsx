const Animal = ({ animal, onShowDetail }) => {
  return (
    <section>
      <img src={animal.imageUrl} alt="" />
      <h2>{animal.name}</h2>
      <button onClick={() => onShowDetail(animal.id)}>
        Meer info
      </button>
    </section>
  );
};

export default Animal;