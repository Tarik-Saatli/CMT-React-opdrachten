const Menu = ({ img, title, price, desc }) => {
  return (
    <section className="menu-item">
      <img src={img} alt={title} />
      <div className="menu-info">
        <div className="title-price">
          <h2 className="menu-title">{title}</h2>
          <h3 className="menu-price">${price}</h3>
        </div>
        <p className="menu-desc">{desc}</p>
      </div>
    </section>
  );
};

export default Menu;
