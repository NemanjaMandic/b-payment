import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Background, Box } from './style';
import OutsideClickHandler from 'react-outside-click-handler';

const modal = document.getElementById('modal');
const propTypes = {
  children: PropTypes.node
};

const Modal = ({ onClose, children }) => {
  return ReactDOM.createPortal(
    <Background>
      <OutsideClickHandler onOutsideClick={onClose}>
        <Box>{children}</Box>
      </OutsideClickHandler>
    </Background>,
    modal
  );
};

Modal.propTypes = propTypes;

export default Modal;
