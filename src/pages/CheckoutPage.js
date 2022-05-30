import React from 'react'
import styled from 'styled-components'
import { PageHero, StripeCheckout } from '../components'
// extra imports
import { useCartContext } from '../context/cart_context'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  return <main>
    <PageHero title='checkout'/>
    <Wrapper className='page'>
    <h1>Oops,This Page is Under Construction</h1>
    <h4 style={{color:'blue',}}>Contact Ajit Jadhav for more info</h4>
    </Wrapper>
  </main>
}
const Wrapper = styled.div``
export default CheckoutPage
