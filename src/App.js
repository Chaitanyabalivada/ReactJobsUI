import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Link } from 'react-router-dom';
import Routes from './routes';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       
        <div>
        
<div class="header">
    <div class="image"></div><div class="text">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; CAS Batch Scheduler</div>
</div>
<title>Batch Scheduler</title>
        <nav class="navbar navbar-inverse">
            <div class="container-fluid">
            <a class="navbar-brand">CASM Batch Scheduler</a>
            <ul class="nav navbar-nav">
                <li><Link to="/CASMBatchJobComp">Batch Summary</Link></li>
            <li><Link to="/counter">DashBoard</Link></li>
            <li><Link to="/rest">About</Link></li>            
            </ul>
            </div>
        </nav>
        <div class="container"><Routes></Routes>
        </div>
    </div>
      </BrowserRouter>
    );
  }
}

export default App;
