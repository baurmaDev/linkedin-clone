import Login from './components/Login';
import Home from './components/Home'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />   
          </Route>
          <Route path="/home">
            <Header />
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
