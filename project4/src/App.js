import React from "react";
import './App.css';
import { Route, Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";


import Main from "./Main";
import Add from "./Add";


function App() {
  return (
    <BrowserRouter>
    <Switch>
      <div className="App">
        <div className='black-nav'>
          <div> 밈 사전 </div>
        </div>
        
        <Route exact path="/">
          <Main/>
        </Route>
        
        <Route path="/Add">
          <Add/>
        </Route>
      
      </div>
    </Switch>
    </BrowserRouter>
  );
}

export default App;