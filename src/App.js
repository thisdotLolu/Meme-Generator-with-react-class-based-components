import React, { Component } from 'react'
import Header from './Header'
import MemeGenerator from './MemeGenerator';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header></Header>
        <MemeGenerator/>
      </div>
    )
  }
}

export default App