import { connect } from 'react-redux';
import { deleteData } from '../../redux/phonebook/phonebookOperations';
import Contact from './Contact';

const mapDispatchToProps = dispatch => {
  return {
    deleContact: id => dispatch(deleteData(id)),
  };
};

export default connect(null, mapDispatchToProps)(Contact);
