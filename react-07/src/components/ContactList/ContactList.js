/** @jsx jsx */
import { useEffect } from 'react';
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contact from '../Contact/ContactContainer';
import slideTransition from '../../transitions/slide.module.css';

const lists = css`
  list-style-type: none;
  padding: 0;
`;
const ContactList = ({ contacts, fetchContacts }) => {
  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <TransitionGroup component="ul" css={lists}>
      {contacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={500}
          classNames={slideTransition}
        >
          <Contact contact={contact} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  fetchContacts: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default ContactList;
