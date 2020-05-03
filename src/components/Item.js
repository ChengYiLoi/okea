import React, { useReducer, useEffect, useContext } from "react";
import CartButton from "./CartButton";

export default function Item({
  itemProps,
  updatePage,
}) {
  let initialCount = 0;
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;
      case "decrement":
        if (state !== 0) {
          return state - 1;
        }
      default:
        return state;
    }
  };
  const [count, setCount] = useReducer(reducer, initialCount);

  const updateCount = (e, action) => {
    e.preventDefault();
    setCount(action);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    updatePage(`item/${itemProps.name}`);
  }, []);
  return (
    <div className="itemWrapper">
      <div className="itemContent">
        <img className="img" src={`/images/furniture/${itemProps.name}.jpg`} />
        <div className="informationSection">
          <h2>{itemProps.name}</h2>
          <h2>${itemProps.price}</h2>
          <form>
            <div className="counter">
              <button
                id="decrement"
                onClick={(e) => updateCount(e, "decrement")}
              >
                -
              </button>
              <span>{count}</span>
              <button
                id="increment"
                onClick={(e) => updateCount(e, "increment")}
              >
                +
              </button>
            </div>
            <br></br>
            <CartButton
              actionType={"Add to Cart"}
              itemObject={itemProps}
              count = {count}
            />
          </form>
        </div>
        <div className="itemDescription">
          <h4>About this product</h4>
          <p>{itemProps.description}</p>
        </div>
      </div>
    </div>
  );
}
