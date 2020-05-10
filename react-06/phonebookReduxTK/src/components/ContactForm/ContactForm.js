import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { validateAll } from 'indicative/validator';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification/Notification';
import ErrorDuplicate from './ErrorDuplicate';
import Input from '../common/Input';
import SlideTransition from '../../transitions/errorSlide.module.css';

// css emotion
const form = css`
  padding: 10px;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
`;
const button = css`
  width: 150px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 5px;
  padding: 3px;
  width: 100%;
  background-color: #3944a8;
  color: #fff;
  padding: 10px 0;
  font-weight: 700;
`;

// indicative
const rules = {
  name: 'required|string',
  number: 'required|string',
};

const messages = {
  'name.required': 'Please enter a unique name for your account',
  'number.required': 'Enter a phone number.',
};

export default class ContactForm extends Component {
  static propTypes = {
    updateCollection: PropTypes.func.isRequired,
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        number: PropTypes.string,
        name: PropTypes.strings,
      }),
    ).isRequired,
  };

  state = {
    name: '',
    number: '',
    errors: null,
    isDuplicate: false,
  };

  handleDupName = name => {
    const { contacts } = this.props;
    const isUnique = contacts.some(contact => contact.name === name);
    return isUnique;
  };

  handleSubmit = e => {
    e.preventDefault();
    // recieve state name
    const { name, number } = this.state;
    // update parent state
    const { updateCollection } = this.props;
    // validate unique name
    if (this.handleDupName(name)) {
      // set animation
      this.setState({ isDuplicate: true });
      setTimeout(this.exitAnimation, 3000);
      return;
    }
    // generate id
    const id = uuidv4();
    const data = {
      name,
      number,
    };
    // validation
    validateAll(data, rules, messages)
      .then(d => {
        // render if validated
        updateCollection([
          {
            ...d,
            id,
          },
        ]);
        // reset
        this.reset();
      })
      .catch(err => {
        // cat error and update state
        const formattedErr = {};

        err.forEach(error => {
          formattedErr[error.field] = error.message;
        });
        this.setState({
          errors: formattedErr,
        });
      });
  };

  exitAnimation = () => {
    this.setState({ isDuplicate: false });
  };

  handleInput = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };

  reset() {
    this.setState({
      name: '',
      number: '',
      errors: null,
      isDuplicate: false,
    });
  }

  render() {
    const { name, number, errors, isDuplicate } = this.state;
    const idName = uuidv4();
    const idPhone = uuidv4();

    return (
      <form onSubmit={this.handleSubmit} css={form}>
        <Input
          id={idName}
          text="Name"
          type="text"
          name="name"
          value={name}
          onChange={this.handleInput}
        />
        {errors && <Notification label={errors.name} />}
        <Input
          id={idPhone}
          text="Number"
          type="number"
          name="number"
          value={number}
          onChange={this.handleInput}
        />
        {errors && <Notification label={errors.number} />}
        <button type="submit" css={button}>
          Add contact
        </button>
        <CSSTransition
          in={isDuplicate}
          timeout={300}
          classNames={SlideTransition}
          unmountOnExit
        >
          <ErrorDuplicate />
        </CSSTransition>
      </form>
    );
  }
}
