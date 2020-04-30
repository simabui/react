import { connect } from 'react-redux';
import * as ACTIONS from '../redux/phonebook/phonebookActions';
import { getFilterValue, getContacts } from '../redux/phonebook/phoneSelectors';
import App from './App';

// redux
const mapStateToProps = state => {
  return {
    contacts: getContacts(state),
    filter: getFilterValue(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateCollection: user => dispatch(ACTIONS.updateCollection(user)),
    inputFilter: input => dispatch(ACTIONS.filterCollection(input)),
    deleteUser: name => dispatch(ACTIONS.deleteUser(name)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
