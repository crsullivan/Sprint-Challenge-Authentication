import React from 'react';
import './App.css';
import register from './components/register';
import login from "./components/login";
import jokes from './components/jokes';
import {Route} from 'react-router-dom';
import PrivateRoute from './components/utils/PrivateRoute';


function App() {
  return (
    <div className="App">
      <Route exact path="/" component={register} />
      <Route exact path="/login" component={login} />
      <PrivateRoute exact path="/jokes" component={jokes} />
    </div>
  );
}

export default App;
