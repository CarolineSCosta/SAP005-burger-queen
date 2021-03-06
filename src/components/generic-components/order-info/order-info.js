import React, { Fragment } from 'react'
import OrderCard from '../order-card/order-card'
import { updateOrder } from '../../../services/services'
import './order-info.css'

export default function OrderInfo({
  statusTitle,
  orders,
  nextStatus,
  nextStatusApi,
  showButton,
  callback,
  showTime,
  statusColor
}) {
  return (
    <Fragment>
      <div>
        <h1 className='title-add-status'>{statusTitle}</h1>
      </div>
      <section className='container-order-status'>
        {
          orders.length === 0 &&
          <p className='empty-order'>As comandas irão aparecer aqui!</p>
        }
        {
          orders.map((order, index) => {
            return (
              <OrderCard
                tableNumber={order.table}
                clientName={order.client_name}
                status={order.status}
                statusColor={statusColor}
                buttonNameAddStatus={nextStatus}
                showButton={showButton}
                created={order.createdAt}
                processed={order.processedAt}
                showTime={showTime}
                onClickAddStatus={
                  async (event) => {
                    event.preventDefault()
                    await updateOrder(order.id, nextStatusApi)
                    callback()
                  }
                }
                orderItems={order.Products}
                key={`order-${index}`}
              />
            )
          }
          )}
      </section>
    </Fragment>
  )
}
