import React from 'react'

import {OrderForm}  from 'vtex.order-manager'

const OrderContext = () => {

  const {useOrderForm} = OrderForm

  const {orderForm} = useOrderForm()

  console.log('orderFormContext', )

  orderForm.

  return (

    <div>OrderForm</div>
  )
}

export default OrderContext
