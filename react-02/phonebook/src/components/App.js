import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  static propTypes = {};

  static defaultProps = {};

  state = {
    contacts: [],
    filter: '',
  };

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
      <>
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
      </>
    );
  }
}
export default App;
