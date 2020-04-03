import { Component, Fragment } from 'react';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { CSSTransition } from 'react-transition-group';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
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
    filterShown: false,
  };
  // render

  componentDidMount() {
    const contactsLocal = localStorage.getItem('contacts');
    if (contactsLocal) {
      this.setState({
        contacts: [...JSON.parse(contactsLocal)],
      });
      // animate filter
      const contactsParsed = JSON.parse(contactsLocal);

      if (contactsParsed.length > 1) {
        this.toggleFilter();
      }
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

    // animate filter
    const { contacts, filterShown } = this.state;
    if (filterShown !== true && contacts.length > 1) {
      this.toggleFilter();
    }
  };

  deleteContact = id => {
    this.setState(state => {
      return {
        contacts: state.contacts.filter(contact => contact.id !== id),
      };
    });

    const { contacts } = this.state;
    if (contacts.length < 3) {
      this.toggleFilter();
    }
  };

  // check if unique name in collection

  handleUniqueName = name => {
    const { contacts } = this.state;
    const isUnique = contacts.some(contact => contact.name === name);
    return isUnique;
  };

  toggleFilter() {
    this.setState(state => ({ filterShown: !state.filterShown }));
  }

  render() {
    const { contacts, filter, isShown, filterShown } = this.state;
    const filteredPhoneBook = this.handleFilter(contacts, filter);

    return (
      <Fragment>
        <CSSTransition in={isShown} timeout={500} classNames={slideTransition}>
          <h1 css={title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm
          handleContacts={this.handleContacts}
          onUnique={this.handleUniqueName}
        />
        <h2>Contacts</h2>

        <CSSTransition
          in={filterShown}
          timeout={300}
          classNames={PopTransition}
          unmountOnExit
        >
          <Filter getFIlterValue={this.getFIlterValue} />
        </CSSTransition>

        <ContactList
          data={filteredPhoneBook}
          onDeleteContact={this.deleteContact}
        />
      </Fragment>
    );
  }
}
export default App;
