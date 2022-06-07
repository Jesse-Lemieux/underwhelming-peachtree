import React, { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [categories] = useState([
    {
      name: 'About Me',
      description: 'Details about my life as an aspiring web developer.',
    },
    { name: 'Portfolio', description: 'View many projects I have worked on.' },
    { name: 'Resume', description: 'Professional resume for you to recieve.' }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
    
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}
      ></Header>
      <main>
        {!contactSelected ? (
          <>
           
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
