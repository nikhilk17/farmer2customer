import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { findProductsByCategory } from '../../State/Product/Action'; // replace with the actual path
import ProductCard from '../Product/ProductCard';
import { useParams } from 'react-router-dom';
const CategoryProducts = ({ match }) => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loading);
    const error = useSelector(state => state.error);
    const { category } = useParams();
  
    useEffect(() => {
        dispatch(findProductsByCategory(category));
      }, [dispatch, category]);
      const products = useSelector(state => state.products.products);
    return (
    <div className='p-5 mb-5'>
      <h1 className='text-7xl p-5 font-normal font-josefin'>Products</h1>
      <hr />
      <div className='flex'>
        <div className='flex flex-wrap justify-center py-9 px-10 gap-[3rem]'>
          {loading ? (
            <div className='ml-[45vw]'>
            <HashLoader color="#36d7b7" 
             size={25}/>
          </div>
          ) : error ? (
            <h1>Please login to view products and make purchase....</h1>
          ) : (
            products?.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))
          )}
        </div>
      </div>
    </div> 
  );
};

export default CategoryProducts;
    