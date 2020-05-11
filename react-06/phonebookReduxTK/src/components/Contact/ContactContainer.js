import { connect } from 'react-redux';
import { compose } from 'redux';
import * as ACTIONS from '../../redux/phonebook/phonebookActions';
import Contact from './Contact';
import withRender from '../hoc/withRender';

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: name => dispatch(ACTIONS.deleteUser(name)),
  };
};

export default compose(connect(null, mapDispatchToProps))(Contact);
