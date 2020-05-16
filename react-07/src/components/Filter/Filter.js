import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Input from '../common/Input';
import PopTransition from '../../transitions/pop.module.css';

const Filter = ({ inputFilter, filter, contacts }) => {
  function getValue({ target }) {
    inputFilter(target.value);
  }

  return (
    <div>
      <TransitionGroup>
        {contacts && contacts.length > 1 && (
          <CSSTransition timeout={300} classNames={PopTransition}>
            <div>
              <Input
                type="text"
                onChange={getValue}
                value={filter}
                id="filter"
                name="filter"
                text="Find contacts by name"
              />
            </div>
          </CSSTransition>
        )}
      </TransitionGroup>
    </div>
  );
};

Filter.propTypes = {
  inputFilter: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
export default Filter;
