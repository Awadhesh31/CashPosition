import React from 'react';
import { Component } from 'react';
import './App.css';
import Header from './components/header';
import Roster from './components/Roster';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container">
           <Roster />
        </div>
      </div>
    );
  }
}

export default App;
