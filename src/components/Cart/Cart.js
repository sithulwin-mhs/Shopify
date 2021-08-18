import { Container } from '@material-ui/core'
import React from 'react'
import CartItem from './CartItem.js/CartItem'

const Cart = ({cart}) => {

    const renderEmptyCart = () => {
        <h5>You have no items in your shopping cart, start adding some</h5>
    }

    // if (!cart.line_items) return 'Loading';

    const renderCart = () => {
        <>
        <div class="container mt-5">
            <div class="row no-gutters">
                {cart.line_items.map((item)=>(
                <div class="col-md-2 col-lg-3">
                    <CartItem item={item} />
                    </div>
                ))}
            </div>
        </div>
        </>
    }


    return (
        <>
            <div class="container mt-5">
                <div class="row no-gutters">
                    {cart.line_items.map((item)=>(
                    <div class="col-md-2 col-lg-3">
                        <CartItem item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Cart
