import { connect } from 'react-redux';
import * as ACTIONS from '../redux/phonebook/phonebookActions';
import {
  fetchData,
  putData,
  deleteData,
} from '../redux/phonebook/phonebookOperations';
import { getContacts, getFilterValue } from '../redux/phonebook/phoneSelectors';
import App from './App';

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
