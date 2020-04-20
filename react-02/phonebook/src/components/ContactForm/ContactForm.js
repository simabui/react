import { Component } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { validateAll } from 'indicative/validator';
import Notification from '../Notification/Notification';
import Input from './Input';

// css emotion
const form = css`
  display: flex;
  flex-direction: column;
`;
const button = css`
  width: 150px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 5px;
  padding: 3px;
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
    onUnique: PropTypes.func.isRequired,
  };

  state = {
    name: '',
    number: '',
    errors: null,
  };

  handleSubmit = e => {
    e.preventDefault();
    // recieve state name
    const { name, number } = this.state;
    // update parent state
    const { handleContacts, onUnique } = this.props;
    // validate unique name
    if (onUnique(name)) {
      alert(`${name} is already in contacts`);
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
        handleContacts({
          ...d,
          id,
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
    });
  }

  render() {
    const { name, number, errors } = this.state;
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
      </form>
    );
  }
}
