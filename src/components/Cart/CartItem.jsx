import React from 'react'
import IconButton from '@mui/material/IconButton';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Button from '@mui/material/Button';
import './cart.css';
import { useDispatch } from 'react-redux';
import { removeCartItem, updateCartItem } from '../../State/Cart/Action';
const CartItem = ({item}) => {
    const dispatch = useDispatch();
    const handleUpdateCartItem=(num)=>{
        const data={data:{quantity:item.quantity+num},cartItemId:item?.id}
        dispatch(updateCartItem(data))
    }
    const handleRemoveCartItem=()=>{
        dispatch(removeCartItem(item.id))
    }
  return (
    <div className='p-5 shadow-lg border rounded-xl gap-4'>
        <div className='flex items-center'>
        <div className='w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]'>
            <img className='w-full h-full object-cover object-top rounded-md' src={item.product.imageUrl}/>
        </div>
     <div className='ml-5 space-y-1'>
        <p className='font-sesmi-bold'>{item.product.title}</p>
        <p className='opactit-70'>Size:{item.size}</p>
        <p className='opacity-70 mt-2'>Seller:{item.product.brand}</p>
        <div className="flex space-x-5 items-center text-gray-900 pt-6">
                <p className='font-semibold'>₹{item.product.discountedPrice}</p>
                <p className='opacity-50 line-through'>₹{item.product.price}</p>
                <p className='text-green-600 font-semibold'>{item.product.discountPersent}% Off</p>
        </div>
     </div>
     </div>
     <div className='lg:flex items-center lg:space-x-10 pt-4'>
    <div className='flex items-center space-x-2'>
<IconButton sx={{color:"#28B463"}} onClick={()=>handleUpdateCartItem(-1)} disabled={item.quantity<=1}>
    <RemoveCircleIcon/>
</IconButton>
<span className='py-1 px-7 border rounded-sm'>{item.quantity}</span>
<IconButton sx={{color:"#28B463"}} onClick={()=>handleUpdateCartItem(1)}>
    <AddCircleIcon/>
</IconButton>
</div>
<div>
    <Button onClick={handleRemoveCartItem} vaiant="contained" sx={{color:"#28B463"}}>Remove</Button>
</div>
 </div>
    </div>
  )
}

export default CartItem