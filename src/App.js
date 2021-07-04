import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Project from './components/Project';


function App() {
  const [categories] = useState([
    { name: "Projects", description: "web development projects" },
    { name: "Resume", description: "Resume"}

  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Header></Header>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        ></Nav>
      <main>
        <div>
          <Project currentCategory={currentCategory}></Project>
          <About></About>
          <Footer></Footer>
        </div>
      </main>

    </div>
  );
}

export default App;
