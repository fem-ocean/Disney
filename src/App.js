import './App.css';
import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom"
import Login from "./components/Login";
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';



function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={withRouter(Home)} />
          <Route path="/detail/:id" component={Detail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
