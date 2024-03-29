import React from "react";
import { Header, Footer } from "./components";
import { Home, Cart, Feedback } from "./pages";
import { Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setDevices } from "./redux/actions/devices";
import { setCart } from "./redux/actions/cart";

function App() {
  const dispatch = useDispatch();
  // const databaseUrl = process.env.REACT_APP_DATABASE_URL;
  const databaseUrl =
    "https://memk-e8586-default-rtdb.europe-west1.firebasedatabase.app/.json";
  const cartItems = JSON.parse(window.localStorage.getItem("cartItems")) || [];
  dispatch(setCart(cartItems));

  React.useEffect(() => {
    fetch(databaseUrl)
      .then((resp) => resp.json())
      .then((json) => {
        dispatch(setDevices(json.devices));
      });
  }, []);

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <Route exact path="/" component={Home} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/feedback" component={Feedback} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
