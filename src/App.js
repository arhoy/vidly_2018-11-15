import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies/Movies';
import Like from './components/UI/Like/Like';

class App extends Component {
  render() {
    return (
      <div className="App">
          <main className = "container">
           <Like
                liked ={true}
                color = 'green'
                onLike = {()=>{console.log('thanks for the likes')}}
                size = '3x'
              />
            <h1>My Movie DB</h1>
            <Movies/>
          </main>
      </div>
    );
  }
}

export default App;
