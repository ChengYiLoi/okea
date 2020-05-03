import React, { useState, useEffect, useContext } from "react";
import { useSpring, animated } from "react-spring";
import { CircleSpinner } from "react-spinners-kit";
import { loginContext } from "../App";

export default function Login({toggleCheckout}) {
  const [isDisabled, setIsDisabled] = useState("");
  const [username, updateUsername] = useState("johndoe");
  const [password, updatePassword] = useState("123");
  const [isLoading, updateIsLoading] = useState(false);
  const [buttonText, updateButtonText] = useState("Login");

  const [isBackground, toggleBackground] = useState(true);
  const [inView, toggleView] = useState(true);

  const { setLogin, setAccount} = useContext(loginContext);

  const background = useSpring({
    from: { opacity: isBackground ? "0" : "0.8" },
    to: { opacity: isBackground ? "0.8" : "0" },
  });

  const box = useSpring({
    from: { marginTop: inView ? "-800px" : "0px" },
    to: { marginTop: inView ? "0px" : "-800px" },
  });
  
  useEffect(() =>{
    if(!document.getElementById("body").classList.contains('disableScroll')){
      document.getElementById("body").classList.toggle("disableScroll");
    }
   
  },[]);

  useEffect(() => {
    if (username.length === 0 || password.length === 0) {
      setIsDisabled("disabled");

      document.getElementById("login").classList.add("disabled");
    } else {
      setIsDisabled("");
      document.getElementById("login").classList.remove("disabled");
    }
  }, [username, password]);
  const handleEvent = (e, action) => {
    if (action === "login") {
      updateIsLoading((isLoading) => !isLoading);
      setTimeout(() => {
        updateIsLoading((isLoading) => !isLoading);

        if (
          username === "johndoe" ||
          (username === "janedoe" && password === "123")
        ) {
          
          updateButtonText("Welcome!");
          setTimeout(() => {
            
            toggleBackground((isBackground) => !isBackground);
            toggleView((inView) => !inView);
           
            setTimeout(() => {
              setLogin(isLogin => !isLogin);
              setAccount(isAccount => !isAccount);
              document.getElementById("body").classList.toggle("disableScroll");
            }, 500);
            
          }, 1000);
        } else {
          updateButtonText("Invalid username / password");
          setTimeout(() => {
            updateButtonText("Login");
          }, 1500);
        }
      }, 1000);
    } else if (action === "toggle") {
      toggleBackground((isBackground) => !isBackground);
      toggleView((inView) => !inView);
      setTimeout(() => {
        setAccount((state) => !state);
        toggleCheckout(false);
        document.getElementById("body").classList.toggle("disableScroll");
      }, 1000);
    }
  };

  return (
    <div className="wrapper">
      <animated.div
        className="blackBackground"
        style={background}
      ></animated.div>

      <animated.div className="options" style={box}>
        <button
          id="toggleButton"
          onClick={(e, action) => handleEvent(e, (action = "toggle"))}
        ></button>
        Username:{" "}
        <input
          type="text"
          value={username}
          className="form-control"
          onChange={(e) => updateUsername(e.target.value)}
        />
        Password:{" "}
        <input
          type="password"
          value={password}
          className="form-control"
          onChange={(e) => updatePassword(e.target.value)}
        />
        <button
          id="login"
          className={`loginButton ${buttonText ==='Welcome!' && "processed"}`}
          disabled={isDisabled}
          onClick={(e, action) => handleEvent(e, (action = "login"))}
        >
          {!isLoading ? buttonText : <CircleSpinner loading={isLoading} />}
        </button>
      </animated.div>
    </div>
  );
}
