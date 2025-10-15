import { useState } from "react";
import menu from "../data.js";
import Menu from "./Menu";

const MenuList = () => {
  const [gerechten, setGerechten] = useState(menu);

  return (
    <div className="menu-container">
      {gerechten.map((item) => (
        <Menu
          key={item.id}
          img={item.img}
          title={item.title}
          price={item.price}
          desc={item.desc}
        />
      ))}
    </div>
  );
};

export default MenuList;
