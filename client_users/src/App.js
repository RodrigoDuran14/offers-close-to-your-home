<<<<<<< HEAD
import "./App.css";
import { Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/home/Home";
import Detail from "./pages/detail/Detail";
import Login from "./pages/login/Login";
import Account from "./pages/account/Account";
import ForgotPassword from "./pages/forgotPassword/ForgotPassword";
import About from "./pages/about/About";
import NavBar from "./component/navBar/NavBar";
=======
import './App.css';
import { Route, useLocation } from 'react-router-dom'
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Login from './pages/login/Login';
import Account from './pages/account/Account';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import About from './pages/about/About';
import NavBar from './components/navBar/NavBar';

>>>>>>> 728a5d3db9d34238035764436106d9e70004cba7

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* <HashRouter> */}
      {/* {location?.pathname == "/login" ? null : <NavBar />} */}
      <Switch>
        {/* <NavBar /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/detail/:id" component={Detail} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/account" component={Account} />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/about" component={About} />
      </Switch>
      {/* </HashRouter>  */}
    </div>
  );
}

export default App;
