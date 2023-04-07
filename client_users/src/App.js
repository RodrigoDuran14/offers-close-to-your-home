import "./App.css";
import { Route, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import About from "./pages/about/About";
import Register from "./pages/register/Register";
import NavBar from "./components/navBar/NavBar";
import HomePrincipal from "./pages/homePrincipal/HomePrincipal";
// import Footer from "./components/footer/Footer";

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location?.pathname == "/login" ? null : <NavBar />}
      {/* {location?.pathname == "/login" ? null : <Footer />} */}
      <Route exact path="/" component={HomePrincipal} />
      <Route exact path="/home" component={Home} />
      <Route exact path="/detail/:id" component={Detail} />
      <Route exact path="/log-in" component={Login} />
      <Route exact path="/registrar-usuario" component={Register} />
      <Route exact path="/account" component={Account} />
      <Route exact path="/forgot-password" component={ForgotPassword} />
      <Route exact path="/about" component={About} />
    </div>
  );
}

export default App;
