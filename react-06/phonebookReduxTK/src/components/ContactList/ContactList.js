/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Contact from '../Contact/ContactContainer';
import slideTransition from '../../transitions/slide.module.css';

const list = css`
  margin-top: 10px;
  border: 1px solid #dedede;
  border-radius: 5px;
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.75);
`;
const lists = css`
  list-style-type: none;
  padding: 0;
`;
const ContactList = ({ contacts }) => {
  return (
    <TransitionGroup component="ul" css={lists}>
      {contacts.map(contact => (
        <CSSTransition
          key={contact.id}
          timeout={500}
          classNames={slideTransition}
        >
          <li css={list}>
            <Contact contact={contact} />
          </li>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default ContactList;
