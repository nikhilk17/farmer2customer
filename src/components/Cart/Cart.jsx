import React, { useEffect } from 'react'
import CartItem from './CartItem'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../../State/Cart/Action';

const Cart = () => {
    const navigate=useNavigate();
    const {cart}=useSelector(store=>store);
    const dispatch=useDispatch();

    const handleCheckOut=()=>{
        navigate('/checkout?step=2')
    }

    useEffect(() => {
        dispatch(getCart())
    }, [cart.updateCartItem,cart.deleteCartItem])

    return (
        <div>
            <h1 className='text-3xl font-josefin font-semibold ml-[4.5rem] mt-9'>My Cart</h1>
            <div className='lg:grid grid-cols-3 lg:px-16 p-10 relative'>
                <div className='col-span-2 top-[10vh]'>
                    {cart.cart?.cartItems.length > 0 ? (
                        cart.cart?.cartItems.map((item) => <CartItem item={item} />)
                    ) : (
                        <p className='min-h-[75vh] text-2xl font-serif  '>Your cart is empty...</p>
                    )}
                </div>

                {cart.cart?.cartItems.length > 0 && (
                    <div className='px-5 sticky top-0 lg:h-[100vh] mt-5 lg:mt-0 max-sm:[20vw] '>
                        <div className='border p-3'>
                            <p className='uppercase font-bold opacity-60 pb-4'>Price Details</p>
                            <hr />
                            <div className='space-y-3 font-semibold mb-10'>
                                <div className='flex justify-between pt-3 text-black'>
                                    <span>Price</span>
                                    <span>₹{cart.cart?.totalPrice}</span>
                                </div>

                                <div className='flex justify-between pt-3 '>
                                    <span>Discount</span>
                                    <span className='text-green-600'>-₹{cart.cart?.discounte}</span>
                                </div>

                                <div className='flex justify-between pt-3'>
                                    <span>Delivery Charge</span>
                                    <span className='text-green-600'>FREE</span>
                                </div>

                                <div className='flex justify-between pt-3 font-bold'>
                                    <span>Total Amount</span>
                                    <span className='text-green-600'>₹{cart.cart?.totalDiscountedPrice}</span>
                                </div>
                            </div>
                            <Button
                                onClick={handleCheckOut}
                                variant="contained"
                                className='checkout-button w-full mt-5'
                                sx={{px:"2.5rem",py:".7rem" ,bgcolor:"#28B463",color:"white"}}
                            >
                                CheckOut
                            </Button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Cart