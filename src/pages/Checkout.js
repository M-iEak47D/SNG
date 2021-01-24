import React from 'react'
import Banner from '../components/Common/Banner'
import CheckoutSection from '../components/Checkout/CheckoutSection'

function Checkout() {
    return (
      <div id="main">
        <Banner title="Checkout" home="Home" bread="Checkout" />
        <CheckoutSection />
      </div>
    );
}

export default Checkout
