import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';
import Project from './components/Project';
import ContactForm from './components/Contact';


function App() {
  const [categories] = useState([
    { name: "About", description: "about me" },
    { name: "Projects", description: "web development projects" },
    { name: "Resume", description: "Resume" }

  ])

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>

      <main>
        <div>
          <About
            categories={categories}
            setCurrentCategory={setCurrentCategory}
            currentCategory={currentCategory}></About>
          <Project currentCategory={currentCategory}></Project>
          <ContactForm currentCategory={currentCategory}></ContactForm>
          <Footer></Footer>
        </div>
      </main>

    </div>
  );
}

export default App;