import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';

const FriendList = ({ list }) => (
  <ul className={styles['friend-list']}>
    {/* loop */}
    {list.map(friend => (
      <li className={styles.item} key={friend.id}>
        <span
          className={friend.isOnline ? styles.online : styles.offline}
        ></span>
        <img
          className={styles.avatar}
          src={friend.avatar}
          alt={friend.name}
          width="48"
        />
        <p className={styles.name}>{friend.name}</p>
      </li>
    ))}
  </ul>
);

// propTypes
FriendList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};
export default FriendList;
