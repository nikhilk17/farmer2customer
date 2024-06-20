import { Grid } from '@mui/material'
import React, { useEffect } from 'react'
import OrderCard from './OrderCard'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderHistory } from '../../State/Order/Action'
import { Box } from 'mdi-material-ui'
const orderStatus=[
    {
        label:"On The Way",value:"on_the_way"
    },
    {
        label:"Delivered",value:"delivered"
    },
    {
        label:"Cancelled",value:"cancelled"
    },
    {
        label:"Returned",value:"returned"
    },
]
const Order = () => {  
    const dispatch = useDispatch();
    const jwt = localStorage.getItem("jwt");
    const {order}=useSelector(store=>store);
    console.log("order",order);
    useEffect(() => {
      dispatch(getOrderHistory({ jwt }));
    }, [jwt]);
  return (
    <div className='lg:px-20 min-h-screen'>
      <h1 className='mt-7 text-4xl font-josefin '>My Orders:</h1>
      <Grid container sx={{justifyContent:"space-between"}}>
        {/* <Grid item xs={2.5}>
            <div className='h-auto shadow-lg bg-white p-5 sticky top-5 mt-10 border rounded-md'>
               <h1 className='font-bold text-lg '>Filter

                </h1>
                <div className='space-y-4 mt-10'></div>
                <h1 className='font-semibold'>ORDER STATUS</h1>
                {orderStatus.map((option)=><div className='flex items-center'>
                    <input defaultValue={option.value} type="checkbox" className='h-10 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500' />
                    <label className='ml-3 text-sm text-gray-600' htmlFor={option.value}>
                    {option.label}
                    </label>
                </div>)}
            </div>
        </Grid> */}
        <Grid item xs={11}>
    <div className='py-9'>
    {order.orders?.map((singleOrder, index) => (
  <div key={index} className='space-y-3'>
    <h2 className='p-2 text-2xl font-josefin'>Order {index + 1}</h2>
    {singleOrder.orderItems.map((item, index) => (
      <OrderCard key={index} item={item} order={singleOrder} />
    ))}
  </div>
))}
    </div>
</Grid>
      </Grid>
    </div>
  )
}

export default Order
