import React from 'react'
import NavBar from './components/NavBar'
import Container from './components/Container'
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
          <div>
              <NavBar />
              <Container />
          </div>
      </div>
      </Router>
  );
}

export default App;
