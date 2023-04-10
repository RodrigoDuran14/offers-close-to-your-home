import "./App.css";
import { HashRouter, Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import NavBar from "./components/navBar/NavBar";
import MisVentas from "./pages/MisVentas/MisVentas";
function App() {
  const location = useLocation();

  return (
    <div className="App">
      <HashRouter>
        {location?.pathname == "/login" ? null : <NavBar />}
        <Switch>
          <Route exact path="/" component={Home} />;
          <Route exact path="/misventas" component={MisVentas} />
          <Route exact path="/" />
          <Route exact path="/" />
          <Route exact path="/" />
          <Route exact path="/" />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
