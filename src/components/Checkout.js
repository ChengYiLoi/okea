import React, { useState, useContext, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { checkoutContext } from "../App";
import CreditCard from "./CreditCard";
import GuestForm from "./GuestForm";
import Login from "./Login";
import { loginContext } from '../App';

export default function Checkout({ updateCart, isLogin, setAccount, isAccount, isCheckout}) {
  const [isBackground, toggleBackground] = useState(true);
  const [isGuest, setGuest] = useState(false);
  const [inView, toggleView] = useState(true);
  const [isCreditCard, setCreditCard] = useState(false);

  // const { setAccount, isAccount } = useContext(loginContext);

  const background = useSpring({
    from: { opacity: isBackground ? "0" : "0.8" },
    to: { opacity: isBackground ? "0.8" : "0" },
  });

  const box = useSpring({
    from: { marginTop: inView ? "-800px" : "0px" },
    to: { marginTop: inView ? "0px" : "-800px" },
  });

  const toggleCheckout = useContext(checkoutContext);

  const handleEvent = (e, action) => {
    e.preventDefault();
    if (action === "payment") {
      toggleView((inView) => !inView);

      setTimeout(() => {
        toggleView((inView) => !inView);

        setCreditCard((isCreditCard) => !isCreditCard);
      }, 1000);
    }
  };

  const handleToggle = (e, action) => {
    toggleView((inView) => !inView);
    if (e === "toggle" || action ==='toggle') {
      if(action === 'toggle'){
        e.preventDefault();
      }
      toggleBackground((isBackground) => !isBackground);
      setTimeout(() => {
        if(document.getElementById("body").classList.contains('disableScroll')){
          document.getElementById("body").classList.toggle("disableScroll");
        }
        toggleCheckout((state) => !state);
      }, 200);
    }
    if (e === "guest") {
      setTimeout(() => {
        toggleView((inView) => !inView);
        setGuest((isGuest) => !isGuest);
      }, 1000);
    }
    if (e === "account") {
      setTimeout(() => {
        toggleView((inView) => !inView);
        setCreditCard((isCreditCard) => !isCreditCard);
      }, 1000);
    }
    if (e === "login") {
      // toggle login form
      toggleBackground((isBackground) => !isBackground);
      setTimeout(() => {
        toggleCheckout(state => !state);
        setAccount((state) => !state);
      }, 1000);
    }
  };
  useEffect(()=>{
    if(!document.getElementById("body").classList.contains('disableScroll')){
      document.getElementById("body").classList.toggle("disableScroll");
    }
   
  },[])

  return (
    <div className="wrapper">
      {(isCheckout ) && (
        <animated.div
          className="blackBackground"
          style={background}
        ></animated.div>
      )}
      {isGuest && !isCreditCard && (
        <GuestForm
          box={box}
          handleToggle={handleToggle}
          setCreditCard={setCreditCard}
          handleEvent={handleEvent}
        />
      )}
      {!isCreditCard && !isGuest && (
        <animated.div className="options" style={box}>
          <button
            id="toggleButton"
            onClick={(e) => handleToggle((e = "toggle"))}
          ></button>
          <button id="guest" onClick={(e) => handleToggle((e = "guest"))}>
            Checkout as Guest
          </button>
          <button id="login" onClick={(e) => handleToggle((e = isLogin ? 'account': 'login'))}>
            {isLogin ? "Checkout with Account's Address" : "Login"}
          </button>
        </animated.div>
      )}
      } }
      {isCreditCard && (
        <CreditCard
          updateCart={updateCart}
          handleToggle={handleToggle}
          box={box}
          toggleBackground={toggleBackground}
          toggleView={toggleView}
        />
      )}
    </div>
  );
}
