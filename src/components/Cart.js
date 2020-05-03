import React, {useContext } from "react";
import { Link } from "react-router-dom";
import Cartitem from "./Cartitem";
import CartButton from "./CartButton";
import Delivery from "./Delivery";
import { deliveryFeeContext } from "../App";
import {cartContext} from '../App';

export default function Cart({updatePage}) {
  const {updateCart, cart} = useContext(cartContext);
  let totalPrice = 0;
  let isCartEmpty = (
    <div className="emptyCart">
      <h1>Your Cart is empty</h1>
      <Link to="/">
        <button onClick={() => updatePage('')} className="back">Continue Shopping</button>
      </Link>
    </div>
  );
  // let array = [
  //   { name: "ASKVOLL", quantity: 10, price: 50 },
  //   { name: "NORDEN", quantity: 1, price: 100 },
  // ];
  const {deliveryFee} = useContext(deliveryFeeContext);
  const handleRemoveItem = (removeIndex) => {
    let newCart = cart.filter((item, index) => index !== removeIndex);
    updateCart(newCart);
  };
  const items = cart.map((item, index) => (
    <Cartitem item={item} index={index} handleRemoveItem={handleRemoveItem} />
  ));

  cart.forEach((item) => (totalPrice += item.price * item.quantity));
  totalPrice += deliveryFee;

  return (
    <div id="fill">
      {cart.length == 0 ? (
        isCartEmpty
      ) : (
        <div className={`cartWrapper ${cart.length == 0 ? "hide" : null}`}>
          <Link to={`/`} style={{ margin: "0px auto" }} className='back'>
            <button onClick={() => updatePage('')}>Continue Shopping</button>
          </Link>

          <hr></hr>
          {items}
          <Delivery/>
          <div className="total">
            <span>Sub total: ${totalPrice}</span>
            <CartButton actionType={"Checkout"} />
          </div>

        </div>
      )}
    </div>
  );
}
