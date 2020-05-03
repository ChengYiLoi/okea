import React from "react";

export default function Cartitem({ item, index, handleRemoveItem }) {
  return (
    <div className="itemCartWrapper">
      <img src={`/images/furniture/${item.name}.jpg`} />
      <div className="itemDescription">
        <span id="itemName">{item.name}</span>
        <br></br>
        <span>
          {item.quantity} x ${item.price}
        </span>
      </div>
      <button id="removeItem" onClick={() => handleRemoveItem(index)}>X</button>
    </div>
  );
}
