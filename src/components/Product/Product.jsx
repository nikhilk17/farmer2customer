import { findAllProducts } from '../../State/Product/Action';
import React, { useEffect } from 'react';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { HashLoader } from 'react-spinners';
const Product = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);
  const loading = useSelector(state => state.products.loading);
  const error = useSelector(state => state.products.error);
  useEffect(() => {
    dispatch(findAllProducts());
  }, [dispatch]);
  return (
    <div className='p-5 mb-5 min-h-[85vh]'>
      <h1 className='text-7xl p-8 font-normal font-josefin'>Products</h1>
      <hr />
      <div className='flex '>
        <div className='flex flex-wrap  py-9 px-10 gap-[3rem]'>
          {loading ? (
           <div className='ml-[45vw]'>
           <HashLoader color="#36d7b7" 
            size={25}/>
         </div>
          ) : error ? (
          //   <div className='ml-[45vw]'>
          //   <HashLoader color="#36d7b7" 
          //    size={25}/>
          // </div>
          <h1>Please login to view products and make purchase.....</h1>
          ) : (
            products.map(product => (
              <ProductCard key={product.id} item={product} />
            ))
          )}
        </div>
      </div>
    </div> 
  );
};

export default Product;