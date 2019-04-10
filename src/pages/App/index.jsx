import React, { Component } from 'react';
import Form from '../../components/Form';
import { connect, formValues } from 'react-redux';
import { submitForm } from '../../store/actions';
import ConfirmModal from '../ConfirmModal';
import { reset } from 'redux-form';
import styled from '@emotion/styled';

const Root = styled('div')`
  font-family: 'Heebo', sans-serif;
  background: #3a3a3a;
  @media (min-width: 768px) {
    padding: 120px;
  }
`;

const ListWrapper = styled('div')``;
const List = styled('ul')`
  list-style: none;
  background: red;
`;

const Item = styled('li')`
  font-size: 20px;
  margin-bottom: 10px;
`;
class App extends Component {
  state = {
    showModal: false
  };
  onSubmit = formValues => {
    const { resetForm } = this.props;
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
    if (!this.props.payment) {
      return 'jesi siguran da kurac palac...';
    }
    return (
      <ListWrapper>
        <List>
          <Item>{firstName}</Item>
          <Item>{lastName}</Item>
          <Item>{address}</Item>
          <Item>{iban}</Item>
          <Item>{bic}</Item>
          <Item>
            {ammount}
            {currency}
          </Item>
        </List>
      </ListWrapper>
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

const mapStateToProps = state => {
  return { payment: state.form };
};
export default connect(
  mapStateToProps,
  { submitForm }
)(App);
