/** @jsx jsx */
import PropTypes from 'prop-types';
import { jsx, css } from '@emotion/core';

const item = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 8px;
`;

const itemName = css`
  flex-grow: 2;
`;
const itemNumber = css`
  flex-grow: 1;
`;

const button = css`
  padding: 4px;
  max-width: 40px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 5px;
  flex-grow: 1;
  background-color: #ff0000;
  color: #fff;
  font-weight: 700;
`;
const list = css`
  margin-top: 10px;
  border: 1px solid #dedede;
  border-radius: 5px;
  box-shadow: 0px 3px 8px -2px rgba(0, 0, 0, 0.75);
`;

const Contact = ({ contact, deleContact }) => {
  return (
    <li css={list}>
      <div css={item}>
        <p css={itemName}>{contact.name}</p>
        <p css={itemNumber}>{contact.number}</p>
        <button
          type="button"
          onClick={() => deleContact(contact.id)}
          css={button}
        >
          ✕
        </button>
      </div>
    </li>
  );
};

Contact.propTypes = {
  deleContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
