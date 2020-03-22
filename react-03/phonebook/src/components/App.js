import React, { Component, Fragment } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    contacts: [],
    filter: '',
  };
  // render

  componentDidMount() {
    const contacts = localStorage.getItem('contacts');
    if (contacts) {
      this.setState({
        contacts: [...JSON.parse(contacts)],
      });
    }
  }
  // update

  componentDidUpdate(prevProp, prevState) {
    if (prevState !== this.state) {
      const { contacts } = this.state;
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

  handleUniqueName = name => {
    const { contacts } = this.state;
    const isUnique = contacts.some(contact => contact.name === name);
    return isUnique;
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredPhoneBook = this.handleFilter(contacts, filter);

    return (
      <Fragment>
        <h1>Phonebook</h1>
        <ContactForm
          handleContacts={this.handleContacts}
          onUnique={this.handleUniqueName}
        />
        <h2>Contacts</h2>
        {contacts.length > 0 && <Filter getFIlterValue={this.getFIlterValue} />}
        <ContactList
          data={filteredPhoneBook}
          onDeleteContact={this.deleteContact}
        />
      </Fragment>
    );
  }
}
export default App;
