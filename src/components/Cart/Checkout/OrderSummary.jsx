import React, { useEffect } from 'react'
import { Button } from '@mui/material'
import CartItem from '../CartItem'
import './checkout.css'
import AddressCard from './AddressCard/AddressCard'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import { getOrderById } from '../../../State/Order/Action'
import { createPayment } from '../../../State/Payment/Action'
const OrderSummary = () => {
  const dispatch=useDispatch();
  const location =useLocation();
  const searchParams=new URLSearchParams(location.search);
  const orderId=searchParams.get("order_id");
  const {order}=useSelector(store=>store)
  useEffect(() => {
    dispatch(getOrderById(orderId))
  },[orderId])
const handleCheckout=()=>{
  dispatch(createPayment(orderId))
}
  return (
    <div>
      <div className=' shadow-lg rounded-s-md border p-5'>
        <AddressCard address={order.order?.shippingAddress}/>
      </div>
      <div>
        <div className='lg:grid grid-cols-3 lg:px-1 p-1 relative mt-5 gap-2'>
            <div className='col-span-2'>
                {order.order?.orderItems.map((item)=><CartItem item={item}/>)}
            </div>
       
    <div className='px-2 sticky top-0 lg:h-[100vh] space-x-3 mt-5 lg:mt-0 sm:h-[20vw]'>
        <div className='border border-radius-10 rounded-md p-3'>
           <p className='uppercase font-vold opacity-60 pb-4' >Price Details</p>
            <hr />
            <div className='space-y-3 font-semibold p-2 md-10'>
            <div className='flex justify-between pt-3 text-black'>
                <span>Price</span>
                <span>₹{order.order?.totalPrice}</span>

            </div>
            
            <div className='flex justify-between pt-3 '>
                <span>Discount</span>
                <span className='text-green-600'>-₹{order.order?.discounte}</span>

            </div>
            <div className='flex justify-between pt-3'>
                <span>Delivery Charge</span>
                <span className='text-green-600'>FREE</span>

            </div>
            <div className='flex justify-between pt-3 font-bold'>
                <span>Total Amount</span>
                  <span className='text-green-600'>₹{order.order?.totalDiscountedPrice}</span>

            </div>
            </div>
            <Button
             variant="contained" 
             className='checkout-button w-full mt-5'
              sx={{px:"2rem",py:"1rem" ,bgcolor:"#28B463",color:"white"}}
              onClick={handleCheckout}
              >
                CheckOut
                </Button>
        </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default OrderSummary

