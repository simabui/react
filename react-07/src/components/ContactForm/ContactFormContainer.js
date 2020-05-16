import { connect } from 'react-redux';
import { putData } from '../../redux/phonebook/phonebookOperations';
import { getContacts } from '../../redux/phonebook/phoneSelectors';
import ContactForm from './ContactForm';

const mapStateToProps = state => {
  return {
    contacts: getContacts(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    putContact: contact => dispatch(putData(contact)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
