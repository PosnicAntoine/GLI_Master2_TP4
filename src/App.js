import React, { Component } from 'react';
import TableWeekEnd from './comp/TableWeekEnd'
import logo from './logo.svg';
import './App.css';

import {Provider} from "react-redux"
import {createStore} from "redux"
import rootReducer from "./comp/redux/rootReducer.js"


const store = createStore(rootReducer);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Integration Week End</h1>
          </header>
          <TableWeekEnd/>
        </div>
      </Provider>
    );
  }
}

export default App;
