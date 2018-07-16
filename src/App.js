import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BarChart from './BarChart'
class App extends Component {
  render() {
    var data = [];
    for (let i = 0; i <= 20; i++) {
      data.push(Math.floor(Math.random() * 100 + 1))
    }
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>D3 TESTING CHARTS WITH REACT</h2>
        </div>
        <div>
          <BarChart data={data} size={[400, 800]} />
        </div>
      </div>
    )
  }
}
export default App
