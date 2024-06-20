import React from 'react';
import './ProductCard.css';
import { useNavigate } from 'react-router-dom';
const ProductCard = ({ item }) => {
  if (!item) {
    return null; // or some loading indicator
  }
  const navigate=useNavigate();
  return (
    <div onClick={()=>navigate(`/product/${item.id}`)}  className='productCard h-[28rem] w-[17rem] m-3 transition-all cursor-pointer font-josefin rounded-xl'>
      <div className='h-[18rem]'>
        <img className='h-full w-full rounded-xl' src={item.imageUrl} alt="" />
      </div>
      <div className='textPart bg-white p-3 rounded-xl'>
        <div>
          <p className='font font-bold opacity-60'>{item.title}</p>
          <p>{item.description}</p>
        </div>
        <div className='flex items-center space-x-2'>
          <p className='font-semibold'>₹{item.discountedPrice}</p>
          <p className='line-through opacity-50'>₹{item.price}</p>
          <p className='text-green-600 font-semibold'>{item.discountPersent}% off</p>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;