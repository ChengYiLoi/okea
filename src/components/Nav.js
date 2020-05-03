import React from "react";
import NavLink from "./NavLink";

const Nav =({toggleCart, setAccount,isLogin, setLogin, isCart}) => {
  const placeholderFunction = () =>{
  }
 
  let navLinksList = [
    {
      icon: "/images/brandLogo.png",
      text: "logo",
      function: placeholderFunction,
      display: true
    },
    {
      icon: "/images/cart.svg",
      text: "cart",
      function: toggleCart,
      display: true
    },
    {
      icon: "/images/person.svg",
      text: "account",
      function: setAccount,
      display: true
    },
    {
      icon: "/images/logout.svg",
    text: "logout",
    function: setLogin,
    display: isLogin ? true : false
    }
  ];

  let links = navLinksList.map((link) => (
    <NavLink linkProps={link} id={link.text} toggleFunction={link.function} isLogin={isLogin} isCart={isCart} setAccount={setAccount}/>
  ));
  return (
    <div>
      <nav className="navSection">
  <div className="navLinks">{links}</div>
      </nav>
    </div>
  );
}

export default Nav;