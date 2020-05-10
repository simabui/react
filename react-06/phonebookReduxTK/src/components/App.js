import React, { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './ContactForm/ContactFormContainer';
import ContactList from './ContactList/ContactListContainer';
import Filter from './Filter/FilterContainer';
import slideTransition from '../transitions/slide.module.css';

const App = () => {
  const [isShown, setShown] = useState(false);

  useEffect(() => {
    setShown(!isShown);
  }, []);

  return (
    <>
      <CSSTransition in={isShown} timeout={500} classNames={slideTransition}>
        <h1>Phonebook</h1>
      </CSSTransition>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
};

export default App;
