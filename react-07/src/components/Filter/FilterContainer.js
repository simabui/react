import { connect } from 'react-redux';
import * as ACTIONS from '../../redux/phonebook/phonebookActions';
import {
  getFilterValue,
  getContacts,
} from '../../redux/phonebook/phoneSelectors';
import Filter from './Filter';

const mapStateToProps = state => {
  return {
    contacts: getContacts(state),
    filter: getFilterValue(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    inputFilter: input => dispatch(ACTIONS.filterCollection(input)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
