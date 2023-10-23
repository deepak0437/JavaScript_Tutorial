import React, { useContext } from 'react'
import '../CartItems/CartItems.css'
import { ShopContext } from '../../Context/ShopContext'
import remove_icon from '../Assets/cart_cross_icon.png'

function CartItems() {
    const {getTotalCartAmount,all_product, cartItems, removeFromCart} = useContext(ShopContext)
    console.log(cartItems,'wjhgfw guqrwg eirqough erqioghu qeoriu')
    // const [increaseQnty, setIncreaseQnty] = useState(0)
    // const [decreaseQnty, setDecreaseQnty] = useState(0)

    // function handleIncreaseItem(){
    //     setIncreaseQnty(increaseQnty+1)
    // }

    // function handleDecreaseItem(){
    //     setDecreaseQnty(decreaseQnty-1)
    // }

  return (
    <div className='cartitems'>
      <div className="cartitems-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />
      {all_product.map((item,index) => {
        if (cartItems[item.id]>0){
            return(
                <div key={index}>
                    <div className="cartitems-format cartitems-format-main">
                        <img className='carticon-product-icon' src={item.image} alt="" />
                        <p>{item.name}</p>
                        <p>${item.new_price}</p>
                        <div className='cartitems-qnty'>
                            {/* <span onClick={handleIncreaseItem} className='cartitems-increase'>+</span> */}
                            <button className='cartitems-quantity'>{cartItems[item.id]}</button>
                            {/* <span onClick={handleDecreaseItem} className='cartitems-decrease'>-</span> */}
                        </div>
                        
                        <p>${item.new_price*(cartItems[item.id])}</p>
                        <img className='carticon-remove-icon' src={remove_icon} onClick={() => removeFromCart(item.id)} alt="" />
                </div>
                <hr />
            </div>
            )
        }
        return null
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
            <div>
                <div className="cartitems-total-item">
                    <p>SubTotal</p>
                    <p>${getTotalCartAmount()}</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr />
                <div className="cartitems-total-item">
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>Proceed To Checkout</button>
        </div>
        <div className="cartitems-promocode">
            <p>If you have a promo code, Enter it here</p>
            <div className="cartitems-promobox">
                <input type="text" placeholder='PromoCode' />
                <button>Submit</button>
            </div>
        </div>
      </div>
    </div>
  )
}


export default CartItems
