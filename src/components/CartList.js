import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Cart } from "./Cart";
export const CartList = ({ idN, quantity, name, pricePerTicket }) => {
  // You can't use a for loop where the arguments to a function call would go:

  return (
    <Cart
      key={idN}
      name={name}
      pricePerTicket={pricePerTicket}
      quantity={quantity}
    />
  );
};
