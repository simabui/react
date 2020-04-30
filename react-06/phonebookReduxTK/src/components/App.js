import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import slideTransition from '../transitions/slide.module.css';
import PopTransition from '../transitions/pop.module.css';

const title = css`
  color: #3944a8;
`;

class App extends Component {
  static propTypes = {
    updateCollection: PropTypes.func.isRequired,
    inputFilter: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        number: PropTypes.string,
        name: PropTypes.strings,
      }),
    ).isRequired,
    filter: PropTypes.string.isRequired,
  };

  static defaultProps = {};

  state = {
    isShown: false,
  };
  // render

  componentDidMount() {
    const contactsLocal = localStorage.getItem('contacts');
    if (contactsLocal) {
      // render from prop
      const { updateCollection } = this.props;
      updateCollection(JSON.parse(contactsLocal));
    }
    // animate title
    this.setState(state => ({ isShown: !state.isShown }));
  }

  componentDidUpdate(prevProp) {
    // update local
    const { contacts } = this.props;
    if (prevProp.contacts !== contacts) {
      const strContacts = JSON.stringify(contacts);
      localStorage.setItem('contacts', strContacts);
    }
  }

  getFIlterValue = ({ target }) => {
    const { value } = target;
    // redux
    const { inputFilter } = this.props;
    inputFilter(value);
  };

  // filter by search
  handleFilter = (collection, filterValue) => {
    return collection.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  };

  deleteContact = id => {
    // redux
    const { deleteUser } = this.props;
    deleteUser(id);
  };

  // check if unique name in collection
  handleDupName = name => {
    const { contacts } = this.props;
    const isUnique = contacts.some(contact => contact.name === name);
    return isUnique;
  };

  render() {
    const { isShown } = this.state;
    const { updateCollection, contacts, filter } = this.props;
    const filteredPhoneBook = this.handleFilter(contacts, filter);
    return (
      <Fragment>
        <CSSTransition in={isShown} timeout={500} classNames={slideTransition}>
          <h1 css={title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm
          // handleContacts={this.handleContacts}
          handleContacts={updateCollection}
          onDuplicate={this.handleDupName}
        />
        <h2>Contacts</h2>
        <TransitionGroup>
          {contacts && contacts.length > 1 ? (
            <CSSTransition timeout={300} classNames={PopTransition}>
              <Filter getFIlterValue={this.getFIlterValue} value={filter} />
            </CSSTransition>
          ) : null}
        </TransitionGroup>

        <ContactList
          data={filteredPhoneBook}
          onDeleteContact={this.deleteContact}
        />
      </Fragment>
    );
  }
}

export default App;
