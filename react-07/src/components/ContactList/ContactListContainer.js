import { connect } from 'react-redux';
import {
  fetchData,
  deleteData,
} from '../../redux/phonebook/phonebookOperations';
import { getFilteredContacts } from '../../redux/phonebook/phoneSelectors';
import ContactList from './ContactList';

const mapStateToProps = state => {
  return {
    contacts: getFilteredContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchContacts: () => dispatch(fetchData()),
    deleContact: id => dispatch(deleteData(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
