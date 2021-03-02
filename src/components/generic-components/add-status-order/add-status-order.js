import React, { Fragment } from 'react'
import OrderInfo from '../order-info/order-info'
import './add-status-order.css'

export default function AddStatusOrder({
  statusTitle,
  orders
}) {
  return (
    <Fragment>
      <section>
        <h1 className='title-add-status'>{statusTitle}</h1>
        {orders.map((order, index) => {
          return (
            <OrderInfo
              tableNumber={order.table}
              clientName={order.client_name}
              buttonNameStatus={order.status}
              buttonNameAddStatus=''
              onClickAddStatus=''
              key={index}
            />
          )
        }
        )}
      </section>
    </Fragment>
  )
}