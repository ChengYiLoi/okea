import React, { useState } from "react";
import { animated } from "react-spring";
import { CircleSpinner } from "react-spinners-kit";

export default function CreditCard({ updateCart, handleToggle, box, toggleBackground, toggleView }) {
  const [isLoading, toggleLoading] = useState(false);
  const [checkoutText, setCheckoutText] = useState("Confirm Payment");

  const processPayment = (e) => {
    e.preventDefault();
    toggleLoading((isLoading) => !isLoading);
    setTimeout(() => {
      toggleLoading((isLoading) => !isLoading);
      setCheckoutText("Payment Processed");
      setTimeout(() => {
        toggleBackground(state => !state);
        toggleView(state => !state);
        setTimeout((action) => {
          document.getElementById("body").classList.toggle("disableScroll");
          handleToggle(e, (action = "toggle"));
          updateCart([]);
        }, 800);
      }, 1000);
      
    }, 1000);
  };

  let monthArray = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let months = monthArray.map((month) => <option>{month}</option>);

  let currentYear = 2020;
  let yearArray = [];
  for (let i = 0; i < 10; i++) {
    let yearStr = currentYear.toString();
    yearArray.push(yearStr);
    currentYear++;
  }
  let years = yearArray.map((year) => <option>{year}</option>);

  return (
    <div className="wrapper">
      <animated.div className="checkoutInfo" style={box}>
        <form className="checkoutForm">
          <button
            id="toggleButton"
            onClick={(e, action) => handleToggle(e, (action = "toggle"))}
          ></button>
          <div className="creditCardInput">
            <div className="cardNumber">
              <i className="fa fa-lg fa-credit-card">
                <input
                  type="text"
                  maxlength="19"
                  size="19"
                  placeholder="0000 0000 0000 0000"
                />
              </i>
            </div>
            <div className="expiryDate">
              <i class="fa fa-lg fa-calendar">
                <select name="month">{months}</select>
                <span>/</span>
                <select name="year">{years}</select>
              </i>
            </div>
            <div className="securityCode">
              <i className="fa fa-lg fa-lock">
                <input
                  type="password"
                  placeholder="123"
                  maxlength="3"
                  size="3"
                />
              </i>
            </div>
          </div>
          <button
            id="checkout"
            className={`checkoutButton ${
              checkoutText === "Payment Processed" ? "processed" : ""
            }`}
            onClick={(e) => processPayment(e)}
          >
            {!isLoading ? checkoutText : <CircleSpinner loading={isLoading} />}
          </button>
        </form>
      </animated.div>
    </div>
  );
}
