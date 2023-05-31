import React, { useState } from "react";
import { Routes, Route, NavLink, Navigate } from "react-router-dom";

import HomePage from "./HomePage";
import CartPage from "./CartPage";

import { Nav } from "./App.styled";

function Navigation() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Nav>
        <NavLink to="/">Shop</NavLink>
        <NavLink to="/cart">Cart</NavLink>
      </Nav>
      <Routes>
        <Route
          path="/"
          element={<HomePage cart={cart} setCart={setCart} />}
        />
        <Route
          path="/cart"
          element={<CartPage cart={cart} />}
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default Navigation;
