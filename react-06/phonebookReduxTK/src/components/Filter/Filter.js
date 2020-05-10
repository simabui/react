import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import PopTransition from '../../transitions/pop.module.css';
import Input from '../common/Input';

const Filter = ({ inputFilter, filter, contacts }) => {
  const getFIlterValue = ({ target }) => {
    const { value } = target;
    // redux
    inputFilter(value);
  };

  return (
    <>
      <TransitionGroup>
        {contacts.length > 1 && (
          <CSSTransition timeout={300} classNames={PopTransition} unmountOnExit>
            <div>
              <Input
                onChange={getFIlterValue}
                value={filter}
                type="text"
                text="Find contacts by name"
                id="filter"
                name="filter"
              />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </>
  );
};

export default Filter;

Filter.propTypes = {
  inputFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      number: PropTypes.string,
      name: PropTypes.strings,
    }),
  ).isRequired,
};
