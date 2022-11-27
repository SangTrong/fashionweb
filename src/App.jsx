import Home from "./pages/Home";
import ProductList from "./pages/ProductList";

import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Register from "./pages/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
//import { useSelector } from "react-redux";

const App = () => {
  // const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:user" element={<Home />} />
          <Route path="/products" element={<ProductList />} />

          <Route path="/products/:categories" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success"></Route>
          <Route path="/login" element={<Login />}>
            {/* {user ? <Navigate to="/" /> : <Login />}  */}
          </Route>
          <Route path="/register" element={<Register />}>
            {/* {user ? <Navigate to="/" /> : <Register />}  */}
          </Route>
        </Routes>
      </Router>
    </>
    //<Home />
  );
};
export default App;
