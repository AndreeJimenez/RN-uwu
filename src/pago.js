import { PaymentsStripe as Stripe } from "expo-payments-stripe";
import axios from "axios";

import React, { PureComponent } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import CardButton from "./pagoBoton";

export default class CardForm extends PureComponent {
  state = {
    loading: false,
    token: null,
  };

  componentDidMount() {
    Stripe.setOptionsAsync({
      publishableKey:
        "pk_test_51J5kqlLu9rtqQOZcJN16ktnRNuAFDUl5H1gG7Ln2TuU26FXn8okDeqb90V8yG7J2usH1up4wNS7Ged0bnSVboKYV004fgIUsUx",
      androidPayMode: "test", // [optional] used to set wallet environment (AndroidPay)
      merchantId: "your_merchant_id", // [optional] used for payments with ApplePay
    });
  }
  render() {
    const handleCardDetails = async () => {
      try {
        this.setState({ loading: true });
        const cardOptions = {
          requiredBillingAddressFields: "full",
          prefilledInformation: {
            billingAddress: {
              name: "Test Name",
              line1: "Test Line 1",
              line2: "4",
              city: "Test City",
              state: "Test State",
              country: "Test Country",
              postalCode: "31217",
            },
          },
        };
        // GETS YOUR TOKEN FROM STRIPE FOR PAYMENT PROCESS
        const token =
          "pk_test_51J5kqlLu9rtqQOZcJN16ktnRNuAFDUl5H1gG7Ln2TuU26FXn8okDeqb90V8yG7J2usH1up4wNS7Ged0bnSVboKYV004fgIUsUx";
        this.setState({ loading: false, token });
      } catch (error) {
        this.setState({ loading: false });
      }
    };

    const makePayment = async () => {
      this.setState({ loading: true });
      axios({
        method: "POST",
        url: `http://192.168.1.10:5000/api/payments/mobile/create?total=150&token=${this.state.token.tokenId}}`,
      })
        .then((response) => {
          // YEY! PAYMENT DONE
          // CHECKOUT YOUR STRIPE DASHBOARD FOR PAYMENTS MADE
        })
        .catch((error) => this.setState({ loading: false, token: null }));
    };

    return (
      <View style={styles.container}>
        <CardButton
          text="Card Details"
          loading={this.state.loading}
          onPress={this.handleCardDetails}
        />
        <View style={styles.tokenLabel}>
          {token && (
            <View
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: 5,
              }}
            >
              <Text style={styles.tokenLabel}>
                Token: {this.state.token?.tokenId}
              </Text>
              <CardButton text="Make Payment" onPress={this.handlePayment} />
            </View>
          )}
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  tokenLabel: {
    textAlign: "center",
    color: "#111",
    marginBottom: 5,
    padding: 5,
  },
});
