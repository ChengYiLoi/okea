import React, {useContext} from "react";
import {deliveryFeeContext} from '../App';

export default function Delivery() {
  let deliveryTypes = [
    { price: 0, text: "FREE Delivery" },
    { price: 50, text: "$50 Standard Delivery" },
    { price: 200, text: "$200 Priority Delivery" },
  ];
  const {deliveryFee, setDeliveryFee} = useContext(deliveryFeeContext);
  return (
    <div className="deliverySection">
      <span>Choose a delivery option: </span>

      {deliveryTypes.map((deliveryType, index) => <label for={deliveryType.type}>
        {deliveryType.text}
        <input
          id={deliveryType.type}
          type="radio"
          name="deliveryOption"
          value="0"
          defaultChecked = {(index === 0 && deliveryFee === 0) ? 'checked' : null}
          checked = {deliveryFee === deliveryType.price ? 'checked' : null}
          onClick={() => setDeliveryFee(deliveryType.price)}
        />
        <span className="circle"></span>
      </label>)}
      
    </div>
  );
}
