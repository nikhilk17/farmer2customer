import { Button, Card, CardHeader, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useEffect } from 'react'
import { deleteProduct, findAllProducts } from '../../State/Product/Action';
import { useDispatch, useSelector } from 'react-redux';

const ProductsTable = () => {
  const products = useSelector(state => state.products.products);
  const dispatch=useDispatch();
  console.log(products);
  useEffect(() => {
    dispatch(findAllProducts());
  }, [dispatch]);
  const handleProductDelete = (productId) => {
    console.log(`Attempting to delete product with id ${productId}...`);
    dispatch(deleteProduct(productId));
  }
  return (
    <div className='p-3'>
      <Card className='mt-2'>
      <CardHeader title="All Products"/>
      <TableContainer component={Paper} >
      <Table sx={{ minWidth: 550 }} aria-label="simple table " >
        <TableHead>
          <TableRow>
          <TableCell sx={{fontSize:15 ,fontWeight:600}}>Products</TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Quantity</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products?.map((item) => (
            <TableRow
              key={item.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
               <img src={item.imageUrl} alt="" className='h-[68px] w-20 object-cover rounded-xl'/>
              </TableCell>
              <TableCell align="left">{item.id}</TableCell>
              <TableCell align="left" >{item.category.name.charAt(0).toUpperCase() + item.category.name.slice(1)}</TableCell>
              <TableCell align="left">{item.discountedPrice}</TableCell>
              <TableCell align="left">{item.quantity}</TableCell>
              <TableCell align="left" >
                <Button variant='outlined' onClick={()=>handleProductDelete(item.id)}>Delete</Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      </Card>
    </div>
  )
}

export default ProductsTable
