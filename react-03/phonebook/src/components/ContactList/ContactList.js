/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import PropTypes from 'prop-types';

const item = css`
  display: flex;
  align-items: center;
`;

const button = css`
  margin-left: 15px;
  padding: 4px 10px;
  font-size: 16px;
  cursor: pointer;
  background-color: #fff;
  border-radius: 5px;
`;
const list = css`
  margin-top: 10px;
`;

const ContactList = ({ data, onDeleteContact }) => (
  <ul>
    {data.map(contact => (
      <li key={contact.id} css={list}>
        <div css={item}>
          {contact.name}: {contact.number}
          <button
            type="button"
            onClick={() => onDeleteContact(contact.id)}
            css={button}
          >
            delete contact
          </button>
        </div>
      </li>
    ))}
  </ul>
);

ContactList.defaultProps = {
  data: null,
};

ContactList.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
};

export default ContactList;
