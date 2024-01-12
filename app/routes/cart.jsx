import styles from '~/styles/cart.css'
import { useOutletContext } from '@remix-run/react'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export function meta() {
  return [
    { title: 'Guitar Glide - Shopping Cart' },
    {
      description: 'Shopping Cart, music, blog, shop, ecommerce, guitars, guitar',
    },
  ]
}

const Cart = () => {
  const [total, setTotal] = useState(0)
  const { cart, updateQuantity, deleteFromCart } = useOutletContext()

  useEffect(() => {
    const totalCalc = cart.reduce((total, product) => total + product.price * product.quantity, 0)
    setTotal(totalCalc)
  }, [cart])  

  return (
    <main className='container'>
      <h1 className='heading'>Shopping Cart</h1>

      <div className='content'>
        <div className='cart'>
          <h2>Products</h2>
          {cart?.length === 0 ? (
            <p>Your shopping cart is Empty</p>
          ) : (
            cart?.map((product) => (
              <div key={product.id} className='product'>
                <div className='product-img-container'>
                  <img src={product.image} alt={`product ${product.name}`} />
                </div>
                <div className='product-info-container'>
                  <p className='name'>{product.name}</p>
                  <p className='quantity'>Quantity: </p>
                  <div className='quantity-details-container'>
                    <select
                      value={product.quantity}
                      className='select'
                      onChange={(e) =>
                        updateQuantity({
                          quantity: Number(e.target.value),
                          id: product.id,
                        })
                      }>
                      <option value='1'>1</option>
                      <option value='2'>2</option>
                      <option value='3'>3</option>
                      <option value='4'>4</option>
                      <option value='5'>5</option>
                    </select>
                    <div className='delete-btn-container'>
                      <FontAwesomeIcon className='delete-btn' icon={faTrash} onClick={() => deleteFromCart(product.id)} />
                    </div>
                  </div>

                  <p className='price'>$ {product.price}</p>
                  <p className='subtotal'>
                    Subtotal: <span>$ {product.price * product.quantity}</span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <aside className='resume'>
          <h3>Order Summary</h3>
          <p>Total to be paid: ${total}</p>
        </aside>
      </div>
    </main>
  )
}

export default Cart
