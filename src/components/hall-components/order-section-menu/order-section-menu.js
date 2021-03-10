import React, { Fragment } from 'react'
import OrderItens from '../order-items-menu/order-items-menu'
import Button from '../../generic-components/button/button'
import { openOrder } from '../../../services/services'
import './order-section-menu.css'

export default function OrderSection({
  plus,
  minus,
  remove,
  items,
  cancelCallback,
  confirmCallback
}) {
  return (
    <Fragment>
      <section className='section-container-menu-order'>
        <h1 className='menu-order-section-title'>Pedidos</h1>
        <div className='menu-order-section-container'>
          {items.length === 0 &&
            <p className='empty-order-hall'>Os itens lançados irão aparecer aqui!</p>
          }
          {
            items.length > 0 && items.map((item, index) => {
              return (
                <OrderItens
                  key={index}
                  id={item.product_id}
                  name={item.product_name}
                  price={item.product_price}
                  quantity={item.product_quantity}
                  classNameOrderItens='order-product-name'
                  classNameContainer='container-order-section'
                  classNameIconContainer='container-icon'
                  classNameIcon='icon-order'
                  classNamePrice='order-product-price'
                  plus={plus}
                  minus={minus}
                  remove={remove}
                />
              )
            })
          }
        </div>
        <hr className='hr-menu-order' />
        <h2 className='menu-order-total'>Total: R${items.reduce(
          (accumulator, currentValue) => accumulator + Number(currentValue.product_price) * Number(currentValue.product_quantity)
          , 0)},00
        </h2>
        <div className='container-btn-order'>
          <Button
            name='Cancelar pedido'
            className='btn-order-cancel'
            type='button'
            onClick={
              () => {
                cancelCallback()
              }
            }
          />
          <Button
            name='Confirmar pedido'
            className='btn-order-confirm'
            type='button'
            onClick={
              async (event) => {
                event.preventDefault()
                await openOrder(
                  localStorage.getItem('clientName'),
                  localStorage.getItem('tableNumber'),
                  items.map((item) => {
                    return {
                      'id': Number(item.product_id),
                      'qtd': Number(item.product_quantity)
                    }
                  })
                )
                confirmCallback()
              }
            }


          />
        </div>
      </section>
    </Fragment>
  )
}
