import "./App.css";
import { HashRouter, Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/commerce/home/Home";
import NavBar from "./components/commerce/navBar/NavBar";
import MisVentas from "./pages/commerce/MisVentas/MisVentas";
import Login from "./pages/commerce/login/Login"
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
          <Route exact path="/" />
          <Route exact path="/" />
          <Route exact path="/" />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
