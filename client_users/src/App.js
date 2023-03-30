import './App.css';
import { Route, useLocation } from 'react-router-dom'
import Home from './pages/home/Home';
import Detail from './pages/detail/Detail';
import Login from './pages/login/Login';
import Account from './pages/account/Account';
import ForgotPassword from './pages/forgotPassword/ForgotPassword';
import About from './pages/about/About';
import NavBar from './component/navBar/NavBar';


function App() {
  const location = useLocation()

  return (
    <div className="App">
      {/* <HashRouter> */}
        {/* <Switch> */}
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/detail/:id' component={Detail} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/account' component={Account} />
          <Route exact path='/forgot-password' component={ForgotPassword}/>
          <Route exact path='/about' component={About}/>
        {/* </Switch> */}
      {/* </HashRouter>  */}
    </div>
  );
}

export default App;
