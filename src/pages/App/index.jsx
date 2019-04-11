import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Form from '../../components/Form';
import { connect } from 'react-redux';
import { submitForm } from '../../store/actions';
import ConfirmModal from '../ConfirmModal';
import { Root, List, Item } from './style';
import { reset } from 'redux-form';

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
    const { resetForm } = this.props;
    console.log(formValues);
    //  alert(
    //          `Ime: ${formValues.firstName}
    //          Prezime: ${formValues.lastName}
    //          Adresa: ${formValues.address}
    //      `);
    //this.props.submitForm(formValues);

    this.setState({
      showModal: true
    });

    //this.props.submitForm(formValues);
    console.log('PROPS', this.props.submitForm(formValues));
  };

  onConfirmModal = formValues => {
    //this.props.submitForm(formValues);
    console.log(formValues);
    this.setState({
      showModal: false
    });
  };

  onCancelModal = () => {
    this.setState({
      showModal: false
    });
  };

  renderContent = formValues => {
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
        {firstName && <Item>First Name: {firstName}</Item>}
        {lastName && <Item>Last Name: {lastName}</Item>}
        {address && <Item>Address: {address}</Item>}
        {iban && <Item>IBAN: {iban}</Item>}
        {bic && <Item>BIC: {bic}</Item>}
        {ammount && (
          <Item>
            Ammount:
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
        <Form onSubmit={this.onSubmit} />

        {showModal && (
          <ConfirmModal
            title="Payement Details"
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
  { submitForm }
)(App);
