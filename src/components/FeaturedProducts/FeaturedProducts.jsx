import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { findAllProducts } from '../../State/Product/Action';
import Item from './Item';
import { HashLoader } from 'react-spinners';
const FeaturedProducts = () => {
    const dispatch = useDispatch();
    const products = useSelector(state => state.products.products);
    const loading = useSelector(state => state.products.loading);
    const error = useSelector(state => state.products.error);
  
    useEffect(() => {
      dispatch(findAllProducts());
    }, [dispatch]);
    return (
        <div className='p-5'>
          <h1 className='p-4 text-center text-6xl font-josefin underline decoration-2 text-green-500 tracking-wide'>Featured Products</h1>
          <div>
            {loading ? (
               <div className='ml-[45vw] space-y-48'>
               <HashLoader color="#36d7b7" 
                size={25}/>
             </div>
            ) : error ? (
           <h1>Please login to view products and make purchase....</h1>
            ) : (
              products.slice(0, 4).map((product, i) => (
                <Item key={i} id={product.id} name={product.title} image={product.imageUrl} desc={product.description} new_price={product.discountedPrice} old_price={product.price} />
              ))
            )}
          </div>
        </div>
      );
}
      export default FeaturedProducts;