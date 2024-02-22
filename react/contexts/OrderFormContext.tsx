import React, { useEffect } from 'react'

import {OrderForm}  from 'vtex.order-manager'

const OrderContext = () => {

  const {useOrderForm} = OrderForm

  //const orderFormContext = useOrderForm()
  const {orderForm, setOrderForm} = useOrderForm()


  //console.log('Data', orderFormContext.orderForm.clientProfileData.email)

  /*UseEffect para criar um item, fazendo a verificação se o orderForm existe;
  - Cria um objeto passando o indice do item a ser alterado, e em seguida a propriedade que deseja alterar.

  */

  useEffect(() => {
    const myItem = orderForm && {
      ...orderForm.items[0],
      name: "teste teste"
    }

    setOrderForm({
      items: myItem
    })
  }, [])

  console.log('orderForm', orderForm)

  return (

    <div>OrderForm</div>
  )
}

export default OrderContext
