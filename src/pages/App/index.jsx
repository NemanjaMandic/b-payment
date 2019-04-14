import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../Form';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { submitForm } from '../../store/actions';
import ConfirmModal from '../ConfirmModal';
import { Root, List, Item, Label } from './style';

const propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  address: PropTypes.string,
  iban: PropTypes.string,
  bic: PropTypes.string,
  ammount: PropTypes.number
};

class App extends Component {
  state = {
    showModal: false
  };

  onSubmit = formValues => {
    this.props.submitForm(formValues);
  };

  onConfirmModal = () => {
    this.onSubmit(this.props.payment.paymentForm.values);
    this.setState({
      showModal: false
    });
    this.props.reset('paymentForm');
  };

  openModal = () => {
    this.setState({
      showModal: true
    });
  };
  onCancelModal = () => {
    this.setState({
      showModal: false
    });
  };

  renderContent = () => {
    const {
      firstName,
      lastName,
      address,
      iban,
      bic,
      ammount,
      currency
    } = this.props.payment.paymentForm.values;

    return (
      <List>
        {firstName && (
          <Item>
            <Label>First Name: </Label> {firstName}
          </Item>
        )}
        {lastName && (
          <Item>
            <Label>Last Name: </Label> {lastName}
          </Item>
        )}
        {address && (
          <Item>
            <Label>Address: </Label> {address}
          </Item>
        )}
        {iban && (
          <Item>
            <Label>IBAN: </Label> {iban}
          </Item>
        )}
        {bic && (
          <Item>
            <Label>BIC: </Label> {bic}
          </Item>
        )}
        {ammount && (
          <Item>
            <Label>Ammount:</Label>

            {ammount}
            {currency}
          </Item>
        )}
      </List>
    );
  };
  render() {
    const { showModal } = this.state;
    return (
      <Root>
        <Form onSubmit={this.openModal} />

        {showModal && (
          <ConfirmModal
            title="Payment Details"
            content={this.renderContent()}
            onConfirm={this.onConfirmModal}
            onCancel={this.onCancelModal}
          />
        )}
      </Root>
    );
  }
}

App.propTypes = propTypes;

const mapStateToProps = state => {
  return { payment: state.form };
};

export default connect(
  mapStateToProps,
  { submitForm, reset }
)(App);
