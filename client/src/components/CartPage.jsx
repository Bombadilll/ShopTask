import React from "react";
import { Container } from "./App.styled";

function CartPage({ cart }) {
  return (
    <Container>
      <h2>Cart Page</h2>
      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <ul>
          {cart.map(({ name, price, _id, image }) => (
            <li key={_id}>
              <p>{name}</p>
              <p>{price} $</p>
              <img src={image} alt={name} style={{ width: "50px" }} />
            </li>
          ))}
        </ul>
      )}
    </Container>
  );
}

export default CartPage;
