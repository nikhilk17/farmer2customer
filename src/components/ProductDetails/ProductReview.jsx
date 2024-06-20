import { Avatar, Box, Grid, Rating } from '@mui/material'
import React from 'react'

const ProductReview = () => {
  return (
    <div className='flex flex-wrap'>
      <Grid container spacing={2} gap={3}>
        <Grid item xs={1}>
            <Box>
                <Avatar className='text-white' sx={{width:56,height:56,bgcolor:"#9155fd"}}>R</Avatar>
            </Box>
        </Grid>
        <Grid item x={9}>
            <div className='space-y-2 ml-[2rem]'>
                <div>
                    <p className='font-semibold'>Ram</p>
                    <p className='opacity-70 '>April 5,2023</p>
                </div>
            </div>
            <div className='ml-[2rem]'>
            <Rating value={4.5} name='half-rating' readOnly precision={0.5}/>
            <p>Nice Quality</p>
            </div>
        </Grid>
      </Grid>
    </div>
  )
}

export default ProductReview
