import React, { useState } from 'react';
import Header from './components/Header';
import ContactForm from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'

function App() {

  const [navLinks] = useState([
    {
      name: 'About Me',
      description: 'Details about my life as an aspiring web developer.',
    },
    { name: 'Portfolio', description: 'View many projects I have worked on.' },
    { name: 'Resume', description: 'Professional resume for you to recieve.' }
  ]);

  const [currentActiveNav, setcurrentActiveNav] = useState(navLinks[0]);
    
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Header
      navLinks={navLinks}
      setcurrentActiveNav={setcurrentActiveNav}
      currentActiveNav={currentActiveNav}
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
      <Footer></Footer>
    </div>
  );
}

export default App;
