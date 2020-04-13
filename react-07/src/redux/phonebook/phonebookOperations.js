/* eslint-disable */
import axios from 'axios';
import * as actions from '../phonebook/phonebookActions';

axios.defaults.baseURL = 'http://localhost:8086';

export const fetchData = () => async dispatch => {
  dispatch(actions.getCollectionStart());

  try {
    const request = await axios.get('/contacts');
    dispatch(actions.getCollectionSuccess(request.data));
  } catch (err) {
    dispatch(actions.getCollectionFail(err));
  }
};

export const putData = data => async dispatch => {
  dispatch(actions.updateCollectionStart());

  try {
    const request = await axios.post('/contacts', data);
    dispatch(actions.updateCollectionSuccess(request.data));
  } catch (err) {
    dispatch(actions.updateCollectionFail(err));
  }
};

export const deleteData = id => dispatch => {
  dispatch(actions.deleteUserStart());

  axios
    .delete(`/contacts/${id}`)
    .then(() => dispatch(actions.deleteUserSuccess(id)))
    .catch(err => dispatch(actions.deleteUserFail(err)));
};
