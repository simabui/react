import { connect } from 'react-redux';
import * as ACTIONS from '../../redux/phonebook/phonebookActions';
import { getContacts } from '../../redux/phonebook/phoneSelectors';
import ContactForm from './ContactForm';

// redux
const mapStateToProps = state => {
  return {
    contacts: getContacts(state),
  };
};
const mapDispatchToProps = dispatch => {
  return {
    updateCollection: user => dispatch(ACTIONS.updateCollection(user)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
