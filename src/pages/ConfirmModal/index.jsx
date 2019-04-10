import React from 'react';
import Modal from '../../components/Modal';
import { Title, Row, Action } from './style';
const ConfirmModal = ({ content, title, enabled, onCancel, onConfirm }) => {
  const action = enabled ? 'Cancel' : 'Confirm';

  return (
    <Modal onClose={onCancel}>
      <Title>{title}</Title>
      <Row>{content}</Row>
      <Row>
        <Action onClick={onCancel} data-testid="trigger-cancel">
          Cancel
        </Action>
        <Action onClick={onConfirm} data-testid="trigger-confirm">
          {action}
        </Action>
      </Row>
    </Modal>
  );
};

export default ConfirmModal;
