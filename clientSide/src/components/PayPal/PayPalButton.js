import React from 'react';
import PaypalExpressBtn from 'react-paypal-express-checkout';
export default class MyApp extends React.Component {
    constructor(props){
        super(props);
        console.log('props ',props);
    }
    render() {
        const onSuccess = (payment) => {
          fetch("http://localhost:3000/orders/createOrder/", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(this.props.cart)
            })
          this.props.pets.forEach(pet => { pet.inCart= false; pet.count= 0; pet.total=0})
          let url = "http://localhost:3000/products/putAll" ;
          fetch(url, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(this.props.pets),
          }).then(res => { console.log('res from localhost:3000',res); });
            		// You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onCancel = (data) => {
          //  fetch("http://localhost:3000/orders/createOrder/", {
          //   method: "POST",
          //   headers: {
          //   "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify(this.props.cart)
          //   })
          // this.props.pets.forEach(pet => { pet.inCart= false; pet.count= 0; pet.total=0})
          // let url = "http://localhost:3000/products/putAll" ;
          // fetch(url, {
          //   method: "PUT",
          //   headers: {
          //     "Content-Type": "application/json",
          //   },
          //   body: JSON.stringify(this.props.pets),
          // }).then(res => { console.log('res from localhost:3000',res); });
          //   // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
        }
 
        const onError = (err) => {
            // The main Paypal's script cannot be loaded or somethings block the loading of that script!
            console.log("Error!", err);
            // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
            // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
        }
        //let shipping = 3;
        let env = 'sandbox'; // you can set here to 'production' for production
        let currency = 'USD'; // or you can set this value from your props or state
        let total = this.props.total;
        // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
        // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
 
        const client = {
            sandbox: "AdY_sP-6HPKw7yFOwISRf5b-oMEhcXkiF_NHVl3IheosCniWnkmNuDF31wO9usWJJvC91yBJYKF1xF_G",
            production: 'YOUR-PRODUCTION-APP-ID',
        }
        // In order to get production's app-ID, you will have to send your app to Paypal for approval first
        // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
        //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
        // For production app-ID:
        //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/
 
        // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!
        return (
            <PaypalExpressBtn env={env}
            client={client} 
            currency={currency} 
            total={total} 
            onError={onError} 
            onSuccess={onSuccess}
            onCancel={onCancel} />
        );
    }
}
