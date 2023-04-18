import "./App.css";
import { HashRouter, Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/commerce/home/Home";
import NavBar from "./components/commerce/navBar/NavBar";
import MisVentas from "./pages/commerce/MisVentas/MisVentas";
import Login from "./pages/commerce/login/Login";
import Register from "./pages/commerce/register/Register";
import FormCreateProduct from "./components/commerce/formCreateProduct/FormCreateProduct";
import Account from "./pages/commerce/account/Account";
import FormUpdate from "./components/commerce/formUpdate/FormUpdate"
import Products from "./components/commerce/products/Products";

function App() {
  const location = useLocation();

  return (
    <div className="App"> 
      <HashRouter>
        {location?.pathname == "/login" ? null : <NavBar />}
        <Switch>
          <Route exact path="/" component={Home} />;
          <Route exact path="/misventas" component={MisVentas} />
          <Route exact path="/login"  component={Login}/>
          <Route exact path="/registrar-comercio" component={Register} />
          <Route exact path="/producto" component={FormCreateProduct} />
          <Route exact path="/account" component={Account} />
          <Route exact path="/update" component={FormUpdate} />
          <Route exact path="/misProductos" component={Products} />

        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
