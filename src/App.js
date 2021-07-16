import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Login from "./Compo/Login"
import Signup from "./Compo/Signup"
import Landing from "./Compo/Landing"
import Recommandations from "./Compo/Recommandations"
import 'bootstrap/dist/css/bootstrap.min.css';
import Navigate from './Compo/Navigate';

function App() {
  return (
    <div className="App">
     <Router>
     <Navigate />
       <Switch>
       <Route exact path="/" component={Landing}/>
       <Route path="/Login" component={Login}/>
       <Route path="/Signup" component={Signup}/>
       <Route path="/Recommandations" component={ Recommandations}/>
       </Switch>
     </Router>
    </div>
  );
}

export default App;
