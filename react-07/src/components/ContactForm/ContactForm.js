import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { validateAll } from 'indicative/validator';
import { CSSTransition } from 'react-transition-group';
import Notification from '../Notification/Notification';
import ErrorDuplicate from './ErrorDuplicate';
import SlideTransition from '../../transitions/errorSlide.module.css';
import Input from './Input';

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
    handleContacts: PropTypes.func.isRequired,
    onDuplicate: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
    errors: null,
    isDuplicate: false,
  };

  handleSubmit = e => {
    e.preventDefault();
    // recieve state name
    const { name, number } = this.state;
    // update parent state
    const { handleContacts, onDuplicate } = this.props;
    // validate unique name
    if (onDuplicate(name)) {
      // set animation
      this.setState({ isDuplicate: true });
      setTimeout(this.exitAnimation, 3000);
      return;
    }
    const data = {
      name,
      number,
    };
    // validation
    validateAll(data, rules, messages)
      .then(d => {
        // render if validated
        handleContacts({
          ...d,
        });
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
