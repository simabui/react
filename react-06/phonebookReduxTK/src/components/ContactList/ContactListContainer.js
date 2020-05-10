import { connect } from 'react-redux';
import * as ACTIONS from '../../redux/phonebook/phonebookActions';
import { getFilteredContacts } from '../../redux/phonebook/phoneSelectors';
import ContactList from './ContactList';

const mapStateToProps = state => {
  return {
    contacts: getFilteredContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: name => dispatch(ACTIONS.deleteUser(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
