/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.css';

class Modal extends Component {
  state = {};

  overlayRef = createRef();

  static propTypes = {
    image: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;
    // call parent function
    const { onClose } = this.props;
    onClose();
  };

  handleOverlayClick = e => {
    const { current } = this.overlayRef;

    if (current && e.target !== current) {
      return;
    }
    // call parent function
    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { image } = this.props;
    return (
      <div
        className={styles.Overlay}
        ref={this.overlayRef}
        onClick={this.handleOverlayClick}
      >
        <div className={styles.Modal}>
          <img src={image} alt="large" />
        </div>
      </div>
    );
  }
}

export default Modal;
