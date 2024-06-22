import React from 'react'
import { useNavigate } from 'react-router-dom'

const Category = () => {
  const navigate=useNavigate();
  const fruit = 'fruit';
  const grain = 'grain';
  const vegetable = 'vegetable';
  const nut = 'nut';
  const dairy = 'dairy';
  const herbs = 'herb';

  return (
    <div>
      <div >
        <h1 className='p-4 text-center text-6xl font-josefin underline decoration-2 text-[#ff9902] ' >Categories</h1>
        <div className='flex flex-wrap px-10 gap-9 font-josefin'>
          {/* //first category */}
          <div className='flex border rounded-3xl h-[340px] w-[390px] bg-gradient-to-br from-green-300 to-green-100 p-5 md:w-[380px]'>
            <div>
              <p className='text-[#006b07] text-4xl mt-24'>Fresh</p>
              <p className='text-[#006b07] text-6xl mt-2'>Fruits</p>
              <button className='w-[9rem] border-solid border-2 border-black rounded-full text-black px-2 py-2 font-bold text-lg mt-4' onClick={()=>navigate(`/products/category/${fruit}`)}>Explore Now</button>
            </div>
            <div>
              <img src='https://i.postimg.cc/CL2cs9zH/fruits.png' alt='fresh fruits' className='w-[300px] h-[250px] mt-6' />
            </div>
          </div >
          {/* //second div */}
          <div className='flex border rounded-3xl h-[340px] w-[390px] bg-gradient-to-br from-yellow-300 to-yellow-100 p-5'>
            <div>
              <p className='text-yellow-600 text-4xl mt-24'>Fresh</p>
              <p className='text-yellow-600 text-6xl mt-3 max-sm:text-3xl'>Grains</p>
              <button className='w-[9rem] border-solid border-2 border-black rounded-full text-black px-2 py-2 font-bold text-lg mt-4' onClick={()=>navigate(`/products/category/${grain}`)} >Explore Now</button>
            </div>
            <div>
              <img src='https://i.postimg.cc/fWB2JVsP/grains.png' alt='fresh fruits' className='w-[300px] h-[350px] -mt-10 ml-[20px]' />
            </div>
          </div >
          {/* Third category */}
          <div className='flex border rounded-3xl h-[340px] w-[545px] bg-gradient-to-br from-red-300 to-red-100 p-5 md:w-[380px] max-md:w-[390px] lg:w-[530px]'>
            <div>
              <p className='text-red-600 text-4xl mt-24'>Fresh</p>
              <p className='text-red-600  mt-3 max-sm:text-2xl lg:text-4xl'>Vegetables</p>
              <button className='w-[9rem] border-solid border-2 border-black rounded-full text-black px-2 py-2 font-bold text-lg mt-6' onClick={()=>navigate(`/products/category/${vegetable}`)}>Explore Now</button>
            </div>
            <div>
              <img src='https://i.postimg.cc/y8SvQnRq/vegetables.png' alt='fresh fruits' className='w-[400px] h-[350px] -mt-10 ml-[20px] max-sm:w-[430px]' />
            </div>
          </div >
          {/* forth */}
          <div className='flex border rounded-3xl h-[340px] bg-gradient-to-br from-orange-300 to-orange-100 p-5 md:w-[390px] max-md:w-[390px] lg:w-[530px]'>
            <div>
              <p className='text-orange-600 text-4xl mt-24'>Fresh</p>
              <p className='text-orange-600 text-6xl mt-3 max-sm:text-3xl'>Nuts</p>
              <button className='w-[9rem] border-solid border-2 border-black rounded-full text-black px-2 py-2 font-bold text-lg mt-6' onClick={()=>navigate(`/products/category/${nut}`)}>Explore Now</button>
            </div>
            <div>
              <img src='https://i.postimg.cc/bNr6bqNw/nuts.png' alt='fresh fruits' className='w-[400px] h-[400px] -mt-10 ml-[20px]' />
            </div>
          </div >
          {/* //Fifth */}
          <div className='flex border rounded-3xl h-[340px] w-[380px] bg-gradient-to-br from-sky-300 to-sky-200 p-5'>
            <div>
              <p className='text-sky-600 text-4xl mt-24'>Dairy</p>
              <p className='text-sky-600 text-6xl mt-3 z-index-40 max-sm:text-4xl'>Products</p>
              <button className='w-[9rem] border-solid border-2 border-black rounded-full text-black px-2 py-2 font-bold text-lg mt-4' onClick={()=>navigate(`/products/category/${dairy}`)}>Explore Now</button>
            </div>
            <div>
              <img src='https://www.synergytaste.com/wp-content/uploads/sites/2/2022/02/Synergy_Taste-Solutions.png' alt='fresh fruits' className='w-[400px] h-[300px] -mt-2 ml-[20px]' />
            </div>
          </div >
          {/* six category */}
          <div className='flex border rounded-3xl h-[340px] w-[390px] bg-gradient-to-br from-green-300 to-green-100 p-5'>
            <div>
              <p className='text-green-600 text-4xl mt-24'>Fresh</p>
              <p className='text-green-600 text-6xl mt-3'>Herbs</p>
              <button className='w-[9rem] border-solid border-2 border-black rounded-full text-black px-2 py-2 font-bold text-lg mt-4' onClick={()=>navigate(`/products/category/${herbs}`)}>Explore Now</button>
            </div>
            <div>
              <img src='https://pngimg.com/d/spinach_PNG5.png' alt='fresh fruits' className='w-[300px] h-[320px]  -mt-5 ml-[20px]' />
            </div>
          </div >
          {/* End category */}
        </div>
      </div>
    </div>
  )
}

export default Category