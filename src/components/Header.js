import React from "react";
import { Link } from "react-router-dom";
import AppContext from "../context";

function Header(props) {
  const { cartItems } = React.useContext(AppContext);
  const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0);
  return (
    <header className="d-flex justify-between align-center p-40">
      <Link to={process.env.PUBLIC_URL + "/"}>
        <div className="d-flex align-center">
          <img width={40} height={40} src="img/logo.png" alt="Logo" />
          <div>
            <h3 className="text-uppercase">React Sneaker</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <ul className="d-flex">
        <li onClick={props.onClickCart} className="mr-30 cu-p">
          <img width={18} height={18} src="img/cart.svg" alt="Cart" />
          <span>{totalPrice} руб.</span>
        </li>
        <li className="mr-10 cu-p">
          <Link to="/reactsneakers/favorites">
            <img width={18} height={18} src="img/heart.svg" alt="Favorite" />
          </Link>
        </li>
        <li>
          <Link to="/reactsneakers/orders">
            <img width={18} height={18} src="img/user.svg" alt="User" />
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
