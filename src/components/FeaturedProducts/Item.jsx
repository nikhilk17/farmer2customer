import React from 'react'
import { useNavigate } from 'react-router-dom';

const Item = (props) => {
  const navigate=useNavigate();
  return (
    <div className='flex justify-center  p-10 gap-5 font-josefin flex-wrap'>
      {/* frist */}
      <div className='bg-zinc-200 lg:h-[400px] w-[600px] rounded-[35px] sm:[500px]'>
        <div className='flex flex-col justify-center gap-4 p-16 '>
          <h1 className='text-4xl font-poppins font-bold '>{props.name}</h1>
          <p className='text-xl font-poppins  font-light'>Discription:{props.desc}</p>
          <p className='text-xl font-poppins text-green-500 font-light'>Discounted Price:₹{props.new_price}</p>
          <p className='text-xl font-poppins font-light line-through'>₹{props.old_price}</p>
          <button onClick={()=>navigate(`/product/${props.id}`)} className='w-[8rem] border-solid border-2 border-black rounded-[35px] text-black px-2 py-2 font-semibold text-sm mt-4'>Know more</button>
        </div>
      </div>
      {/* second */}
      <div className='bg-zinc-0 h-[400px] w-[600px] px-10'>
        <div>
          <img src={props.image} alt='featured product' className='w-[500px] h-[350px] mt-6 rounded-[35px]' />
        </div>
      </div>
    </div>
  )
}

export default Item
