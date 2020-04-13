import { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { connect } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import slideTransition from '../transitions/slide.module.css';
import PopTransition from '../transitions/pop.module.css';
import * as ACTIONS from '../redux/phonebook/phonebookActions';
import {
  fetchData,
  putData,
  deleteData,
} from '../redux/phonebook/phonebookOperations';
import { getContacts, getFilterValue } from '../redux/phonebook/phoneSelectors';

const title = css`
  color: #3944a8;
`;

class App extends Component {
  static propTypes = {
    fetchContacts: PropTypes.func.isRequired,
    putContact: PropTypes.func.isRequired,
    inputFilter: PropTypes.func.isRequired,
    deleteUser: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
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
    const { fetchContacts } = this.props;
    fetchContacts();

    // animate title
    this.setState(state => ({ isShown: !state.isShown }));
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
    const { putContact, contacts, filter } = this.props;
    const filteredPhoneBook = this.handleFilter(contacts, filter);
    return (
      <Fragment>
        <CSSTransition in={isShown} timeout={500} classNames={slideTransition}>
          <h1 css={title}>Phonebook</h1>
        </CSSTransition>
        <ContactForm
          // handleContacts={this.handleContacts}
          handleContacts={putContact}
          onDuplicate={this.handleDupName}
        />
        <h2>Contacts</h2>
        <TransitionGroup>
          {contacts && contacts.length > 1 ? (
            <CSSTransition timeout={300} classNames={PopTransition}>
              <Filter getFIlterValue={this.getFIlterValue} />
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
// redux
const mapStateToProps = state => {
  return {
    contacts: getContacts(state),
    filter: getFilterValue(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => dispatch(fetchData()),
    putContact: contact => dispatch(putData(contact)),
    deleteUser: id => dispatch(deleteData(id)),
    inputFilter: input => dispatch(ACTIONS.filterCollection(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
