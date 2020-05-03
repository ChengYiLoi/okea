import React, { useContext, useState } from "react";
import { checkoutContext } from "../App";
import { cartContext } from '../App';


export default function CartButton({
  actionType,
  itemObject,
  count,
}) {
  const {updateCart, cart}= useContext(cartContext);
  const toggleCheckout = useContext(checkoutContext);
  const [isLoading, setLoading] = useState(false);
  const [action, setAction] = useState(actionType);
  let className = "orangeButton";
  let id = null;
  if (actionType === "Continue Shopping" || actionType === "View Other Items") {
    className = "back";
  }
  if (actionType === "Add to Cart") {
    id = "addToCart";
  }
  const simulateLoading = () => {
    setLoading(true);
    setAction("Adding to Cart");
    document.getElementById("addToCart").classList.add("disabled");
    setTimeout(() => {
      setAction("Added to Cart");
      setTimeout(() => {
        document.getElementById("addToCart").classList.remove("disabled");
        setLoading(false);
        setAction(actionType);
      }, 600);
    }, 600);
  };

  const handleFunction = (e, action) => { // loop thorugh the current cart, if item.name exist, then quantity += count
    e.preventDefault();
    if (action === "Add to Cart" && count > 0) {
      itemObject.quantity = count;
      simulateLoading();
      let cartItems = cart.map((item) =>item.name);
      setTimeout(() => {
        if(cartItems.includes(itemObject.name)){
          cart.map((item)=>{
            if(item.name === itemObject.name){
              item.quantity += count;
            }
          });
        }
        else{
          updateCart(cart => [...cart, itemObject]);
        }
       
      }, 1200);

    }
    if (action === "Checkout") {
      toggleCheckout(state => !state);
      document.getElementById("body").classList.toggle("disableScroll");
      window.scrollTo(0, 0);
    }
  };

  let button = (
    <button
      id={id}
      type="submit"
      disabled={isLoading}
      onClick={(e) => handleFunction(e, action)}
      className={className}
    >
      <div>
        {isLoading ? (
          <i className="fa fa-refresh fa-spin"></i>
        ) : (
          <i className="fa fa-shopping-cart"></i>
        )}
        {action}
      </div>
    </button>
  );
  return <div className={className}>{button}</div>;
}
