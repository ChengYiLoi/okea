import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { currentPageContext } from "../App";
export default function NavLink({
  linkProps,
  id,
  toggleFunction,
  isLogin,
  setAccount,
}) {
  const { currentPage, updatePage } = useContext(currentPageContext);

  let link = linkProps.text;
  if (linkProps.text === "logo") {
    id = "okea";
    link = ''
  }
  if (linkProps.text === "logout") {
    link = currentPage;
  }
  // if (linkProps.text === "Account" && !isLogin) {
  //   link = currentPage; // does not redirect
  if (linkProps.text === "account" && !isLogin) {
    link = currentPage;
  }

  const handleEvent = () => {
    if (linkProps.text !== "logout") {
      if (linkProps.text === "cart") {
        updatePage(linkProps.text);
      }
      if(linkProps.text === 'logo'){
        updatePage('');
      }
      
    } else {
      setAccount(false);
      updatePage(currentPage);
    }
    // else if (linkProps.text === 'Logout') {
    //   toggleFunction(state => !state);
    // }
    if (linkProps.text === "Logout" && isLogin) {
      setAccount(false);
    }
    
    toggleFunction((state) => !state);
  };
  return (
    <Link id={id} to={`/${link}`} className={linkProps.display ? "" : "hide"}>
      <div className="logo">
        <a onClick={() => handleEvent()} href="#">
          <img id="navLogo" src={`${linkProps.icon}`} />
          {linkProps.text !== "logo" ? <span>{linkProps.text}</span> : ""}
        </a>
      </div>
    </Link>
  );
}
