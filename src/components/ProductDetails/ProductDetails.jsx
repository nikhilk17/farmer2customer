import { useEffect, useState } from 'react'
import { StarIcon } from '@heroicons/react/20/solid'
import { RadioGroup } from '@headlessui/react'
import { PiClipboard } from 'react-icons/pi'
import { Box, Grid, LinearProgress, Rating } from '@mui/material'
import ProductReview from './ProductReview'
import ProductCard from '../Product/ProductCard'
import items from '../../Data/FeaturedData'
import { useNavigate,useParams } from 'react-router-dom'
import { useDispatch,useSelector } from 'react-redux'
import { findProductsById } from '../../State/Product/Action';
import { addItemToCart } from '../../State/Cart/Action';
const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  href: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
  images: [
    {
      src: 'https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
const reviews = { href: '#', average: 4, totalCount: 117 }

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ProductDetails() {
  const params=useParams();
  const dispatch=useDispatch();
  const {products} = useSelector(store=>store);
  console.log(params.productId)


  useEffect(() => {
    const data={productId:params.productId}
    dispatch(findProductsById(data))
  }, [params.productId,dispatch])


  const navigate=useNavigate();
  const data={productId:params.productId,size:'M'}
  const handleAddToCart=(e)=>{
    dispatch(addItemToCart(data))
    navigate('/cart')
  }
  return (
    <div className="bg-white lg:px-[4rem]">
      <div className="pt-6">
        <h1 className='text-2xl ml-7 font-bold font-josefin'>Product Details</h1>
        <section className='grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-10 px-4 lg:pt-[5rem] sm:pt-0'>
          {/* Image gallery */}
          <div className="flex flex-col items-center mt-[8rem]">
            <div className="overflow-hidden rounded-lg max-w-[30rem] max-h-[35rem]">
            <img
      src={ products.product?.imageUrl}
      className="h-full w-full object-cover object-center"
/>
            </div>
          </div>

          {/* Product info */}
          <div className="lg:col-span-1 maxt-auto max-w-2xl px-4 pb-16 sm:px-6 lg:max-w-7xl lg:px-8 lg:pb-24 gap-9">
            <div className="lg:col-span-2">
              <h1 className="text-lg lg:text-3xl font-semibold text-gary-900 mb-5">{ products.product?.title}</h1>
              <h1 className='text-lg lg:text-xl text-gray-900 pt-1'>Discription:{ products.product?.description}</h1>
            </div>

            {/* Options */}
            <div className="mt-4 lg:row-span-3 lg:mt-0">
              <h2 className="sr-only">Product information</h2>
              <div className='flex space-x-5 items-center text-lg lg:text-xl text-gray-900 mt-6'>
                <p className='font-semibold'>
                  ₹{ products.product?.discountedPrice}
                </p>
                <p className='opacity-50 line-through'>
                  ₹{ products.product?.price}
                </p>
                <p className='text-green-600 font-semibold'>{ products.product?.discountPersent}% Off</p>
              </div>

              {/* Reviews */}
              <div className="mt-6">
                <div className='flex items-center space-x-3'>
                  <Rating name="read-only" value={3} readOnly />
                  <p className='opacity-50 text-sm'>56540 Ratings</p>
                  <p className='ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500'>3870 Reviews</p>
                </div>

              </div>

              <form className="mt-10">
                {/* Colors */}

                {/* Sizes */}
                <button
                onClick={handleAddToCart}
                  className="mt-10 flex w-1/2 items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 hover:scale-[0.98]"
                >
                  Add to bag
                </button>
              </form>
            </div>

            <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
              {/* Description and details */}
              <div>
                <h3 className="sr-only">Description</h3>

                <div className="space-y-6">
                  <p className="text-base text-gray-900">{product.description}</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

                <div className="mt-4">
                  <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                    {product.highlights.map((highlight) => (
                      <li key={highlight} className="text-gray-400">
                        <span className="text-gray-600">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-10">
                <h2 className="text-sm font-medium text-gray-900">Details</h2>

                <div className="mt-4 space-y-6">
                  <p className="text-sm text-gray-600">{product.details}</p>
                </div>
              </div>
            </div>
          </div>

        </section>
        {/* rating and review */}
        <section>
          <h1 className='font-semibold text-lg pb-4'>Recent Review & Rating</h1>
          <div className='border p-5'>
            <Grid container spacing={7}>
              <Grid item xs={7}>
                <div className='space-y-5'>
                  {[1, 1, 1].map((item) => <ProductReview />)}
                </div>
              </Grid>
              <Grid item xs={5}>
                <h1 className='text-xl font-semibold pb-1 '>Product Ratings</h1>
                <div className='flex items-center space-x-3 p-2'>
                  <Rating value={4.6} precision={.5} readOnly />
                  <p className='opacity-60 p-2'>54890 Ratings</p>
                </div>
                <Box className="mt-5 space-y-3">
                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Excellent</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant="determinate" value={40} color="success" />

                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Very Good</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant="determinate" value={30} color="success" />

                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Good'</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant="determinate" value={25} color="success" />

                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Avg</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant="determinate" value={20} color="warning" />

                    </Grid>
                  </Grid>
                  <Grid container alignItems="center" gap={2}>
                    <Grid items xs={2}>
                      <p>Poor</p>
                    </Grid>
                    <Grid item xs={7}>
                      <LinearProgress sx={{ bgcolor: "#d0d0d0", borderRadius: 4, height: 7 }} variant="determinate" value={15} color='error' />

                    </Grid>
                  </Grid>
                </Box>
              </Grid>
            </Grid>
          </div>
        </section>
        {/* similar products */}
        <section className='pt-10 pb-7 px-6'>
          <h1 className='py-5 text-2xl font-bold font-josefin'>Similar products</h1>
          <div className='flex flex-wrap space-y-5 gap-9'>
          {products.products?.slice(0, 4).map((item)=>
        <ProductCard key={item.id} item={item}/>
        )}
          </div>
        </section>

      </div>
    </div>
  )
}
