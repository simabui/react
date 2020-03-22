import React from 'react';
import PropTypes from 'prop-types';
import styles from './Profile.module.css';

/* rest props
 const Profile = ({ avatar, name, tag, location, stats }) => (
  <div className="profile">
    <div className="description">
      <img src={avatar} alt="avatar" className="avatar" />
      <p className="name">{name}</p>
      <p className="tag">{tag}</p>
      <p className="location">{location}</p>
      <ul className="stats">
        {Object.keys(stats).map(key => (
          <li key={key}>
            <span className="label">{key}</span>
            <span className="quantity">{stats[key]}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
); */
const Profile = ({ user = null }) => (
  <div className={styles.profile}>
    <div className={styles.description}>
      <img src={user.avatar} alt="user avatar" className={styles.avatar} />
      <p className={styles.name}>{user.name}</p>
      <p className={styles.tag}>{user.tag}</p>
      <p className={styles.location}>{user.location}</p>
    </div>
    <ul className={styles.stats}>
      {/* loop obj */}
      {Object.keys(user.stats).map(key => (
        <li key={key}>
          <span className={styles.label}>{key}</span>
          <span className={styles.quantity}>{user.stats[key]}</span>
        </li>
      ))}
    </ul>
  </div>
);

Profile.defaultProps = {
  user: null,
};

// Prop Types
Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }),
  }),
};
export default Profile;
