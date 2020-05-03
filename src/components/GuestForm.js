import React, { useContext } from "react";
import { animated } from "react-spring";
import { checkoutContext } from "../App";

export default function GuestForm({ box, handleToggle, handleEvent }) {
  const toggleCheckout = useContext(checkoutContext);
  return (
    <animated.div style={box} className="guestWrapper">
      <form>
        <button id="toggleButton" onClick={(e, action) => handleToggle(e, action='toggle')}></button>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" placeholder="John Doe" />
          <label>Email</label>
          <input
            type="text"
            className="form-control"
            placeholder="johndoe@email.com"
          />
          <label>Address</label>
          <input type="text" className="form-control" />
         
        </div>
        <button onClick={(e,action)=> handleEvent(e,action='payment')}>Proceed to Payment</button>
      </form>
    </animated.div>
  );
}
