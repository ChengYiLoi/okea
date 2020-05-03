import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import {
  Nav,
  Main,
  Checkout,
  Cart,
  Item,
  Account,
  Login,
} from "./components/Componets";

export const displayItemContext = React.createContext();
export const checkoutContext = React.createContext();
export const toggleDisplayContext = React.createContext();
export const loginContext = React.createContext();

export const setPageNumContext = React.createContext();
export const currentPageContext = React.createContext();

export const deliveryFeeContext = React.createContext();
export const cartContext = React.createContext();

function App() {
  const [cart, updateCart] = useState([]);
  let defaultItemObject = {
    display: false,
    name: "",
    price: "",
    shortDescription: "",
    description: "",
    quantity: 0,
  };

  let num = 0;
  const [pageNum, setPageNum] = useState(num);
 
  const [isLogin, setLogin] = useState(false); // if user has logged in
  const [isAccount, setAccount] = useState(false); // toggle account component

  const [currentPage, updatePage] = useState("");

  const [deliveryFee, setDeliveryFee] = useState(0);

  const [isCheckout, toggleCheckout] = useState(false);
  const [isCart, toggleCart] = useState(false);
  const [isItem, setItem] = useState(defaultItemObject);
  const displayItem = (itemObject) => {
    setItem({
      display: true,
      name: itemObject.name,
      price: itemObject.price,
      shortDescription: itemObject.shortDescription,
      description: itemObject.description,
      quantity: itemObject.quantity,
    });
  };

  return (
    <Router>
      <div>
        <currentPageContext.Provider
          value={{ currentPage: currentPage, updatePage: updatePage }}
        >
          <Nav
            toggleCart={toggleCart}
            setAccount={setAccount}
            isLogin={isLogin}
            setLogin={setLogin}
            isCart={isCart}
          />
        </currentPageContext.Provider>
        <Route path="/account" component={() => <Account updatePage={updatePage} />} />
        {isAccount && !isLogin && (
          <loginContext.Provider
            value={{
              setLogin: setLogin,
              setAccount: setAccount,
            }}
          >
            <Login toggleCheckout={toggleCheckout} />
          </loginContext.Provider>
        )}
        <Switch>
          <Route
            path="/"
            exact
            component={() => (
              <setPageNumContext.Provider
                value={{ pageNum: pageNum, setPageNum: setPageNum }}
              >
                <displayItemContext.Provider value={displayItem}>
                  <Main />
                </displayItemContext.Provider>
              </setPageNumContext.Provider>
            )}
          />
          <Route
            path="/cart"
            component={() => (
              <cartContext.Provider
                value={{ updateCart: updateCart, cart: cart }}
              >
                <deliveryFeeContext.Provider
                  value={{
                    deliveryFee: deliveryFee,
                    setDeliveryFee: setDeliveryFee,
                  }}
                >
                  <checkoutContext.Provider value={toggleCheckout}>
                    <Cart updatePage={updatePage} />
                    {isCheckout && cart.length !== 0 && (
                      <loginContext.Provider // remove props and check if provider is working
                        value={{ setAccount: setAccount, isAccount: isAccount }}
                      >
                        <Checkout
                          updateCart={updateCart}
                          isLogin={isLogin}
                          setAccount={setAccount}
                          isAccount={isAccount}
                          isCheckout={isCheckout}
                        />
                      </loginContext.Provider>
                    )}
                  </checkoutContext.Provider>
                </deliveryFeeContext.Provider>
              </cartContext.Provider>
            )}
          />

          <Route
            path={`/item/${isItem.name}`}
            component={() => (
              <cartContext.Provider
                value={{ updateCart: updateCart, cart: cart }}
              >
                <Item itemProps={isItem} updatePage={updatePage} />
              </cartContext.Provider>
            )}
          />
         
        </Switch>
      </div>
    </Router>
  );
}

export default App;
