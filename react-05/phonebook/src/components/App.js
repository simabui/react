import { Component, Fragment } from 'react';
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
  static propTypes = {};

  static defaultProps = {};

  state = {
    contacts: [],
    filter: '',
    isShown: false,
  };
  // render

  componentDidMount() {
    const contactsLocal = localStorage.getItem('contacts');
    if (contactsLocal) {
      this.setState({
        contacts: [...JSON.parse(contactsLocal)],
      });
    }
    // animate title
    this.setState(state => ({ isShown: !state.isShown }));
  }

  componentDidUpdate(prevProp, prevState) {
    // update local
    const { contacts } = this.state;
    if (prevState.contacts !== contacts) {
      const strContacts = JSON.stringify(contacts);
      localStorage.setItem('contacts', strContacts);
    }
  }

  getFIlterValue = ({ target }) => {
    const { value } = target;

    this.setState({
      filter: value,
    });
  };

  // filter by search
  handleFilter = (collection, filterValue) => {
    return collection.filter(({ name }) =>
      name.toLowerCase().includes(filterValue.toLowerCase()),
    );
  };

  handleContacts = obj => {
    this.setState(state => {
      return {
        // update contact list
        contacts: [...state.contacts, obj],
      };
    });
  };

  deleteContact = id => {
    this.setState(state => {
      return {
        contacts: state.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  // check if unique name in collection

  handleDupName = name => {
    const { contacts } = this.state;
    const isUnique = contacts.some(contact => contact.name === name);
    return isUnique;
  };

  render() {
    const { contacts, filter, isShown } = this.state;
    const filteredPhoneBook = this.handleFilter(contacts, filter);

    return (
      <Fragment>
        <CSSTransition in={isShown} timeout={500} classNames={slideTransition}>
          <h1 css={title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm
          handleContacts={this.handleContacts}
          onDuplicate={this.handleDupName}
        />
        <h2>Contacts</h2>
        <TransitionGroup>
          {contacts.length > 1 && (
            <CSSTransition timeout={300} classNames={PopTransition}>
              <Filter getFIlterValue={this.getFIlterValue} value={filter} />
            </CSSTransition>
          )}
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
