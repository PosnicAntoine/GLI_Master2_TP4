import React, { Component } from 'react';
import TableWeekEnd from './comp/TableWeekEnd'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Integration Week End</h1>
        </header>
        <TableWeekEnd/>

      </div>
    );
  }
}

export default App;
