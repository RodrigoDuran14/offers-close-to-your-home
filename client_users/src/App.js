import './App.css';
import { HashRouter, Route, Switch, useLocation } from 'react-router-dom'


function App() {
  const location = useLocation()

  return (
    <div className="App">
      <HashRouter>
        <Switch>
          <Route exact path='/'/>
          <Route exact path='/'/>
          <Route exact path='/'/>
          <Route exact path='/'/>
          <Route exact path='/'/>
          <Route exact path='/'/>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
