import React from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Nav></Nav>
      <Header></Header>
      <main>
        <About></About>
        <Footer></Footer>
      </main>
      
    </div>
  );
}

export default App;
