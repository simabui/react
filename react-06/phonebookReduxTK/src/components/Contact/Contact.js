/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

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

const Contact = ({ contact, deleteUser }) => {
  const del = () => deleteUser(contact.id);

  return (
    <div css={item}>
      <p css={itemName}>{contact.name}</p>
      <p css={itemNumber}>{contact.number}</p>
      <button type="button" onClick={del} css={button}>
        ✕
      </button>
    </div>
  );
};

Contact.propTypes = {
  deleteUser: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};

export default Contact;
