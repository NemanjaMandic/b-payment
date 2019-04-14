import React from 'react';
import Modal from '../../components/Modal';
import { Title, Row, Action } from './style';

const ConfirmModal = ({ content, title, onCancel, onConfirm }) => (
  <Modal onClose={onCancel}>
    <Title>{title}</Title>
    <Row>{content}</Row>
    <Row>
      <Action onClick={onCancel}>Cancel</Action>
      <Action onClick={onConfirm}>Confirm</Action>
    </Row>
  </Modal>
);

export default ConfirmModal;
