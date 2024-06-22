import { Button, Grid, TextField } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../State/Auth/Action';
import { store } from '../State/store';
import { login } from '../State/Auth/Action';
const LoginForm = () => {
    const navigate=useNavigate();
    const jwt=localStorage.getItem('jwt')
    const dispatch=useDispatch();
    const auth = useSelector(store => store.auth);
    useEffect(()=>{
        if(jwt)
          dispatch(getUser(jwt))
    } ,[jwt,auth.jwt])
   
    const handleSubmit = (e) => {
        e.preventDefault()
        const data=new FormData(e.currentTarget);
        const userData={
            email:data.get('email'),
            password:data.get('password')
        }
        dispatch(login(userData))
        console.log("User data",userData)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
            <TextField
                    required
                    id='email'
                     name="email"
                     label="Email"
                     fullWidth
                     autoComplete='email'
                />
            </Grid>
            <Grid item xs={12}>
            <TextField
                    required
                    id='password'
                     name="password"
                     label="Password"
                     fullWidth
                     autoComplete='password'
                />
            </Grid>
            <Grid item xs={12}>
            <Button className='bg-[#9CB651] w-full'
            type='submit'
            variant='contained'
            size='large'
            sx={{padding:'0.8rem 0',color:'white',bgcolor:'#058A03','&:hover': {
                bgcolor: '#058A03',
            }}}
        
            >
                Login
            </Button>
            </Grid>


        </Grid>
      </form>
      <div className='flex justify-center items-center flex-col '>
        <div className='mt-4 flex items-center'>
            <p>If you don't have an account ?</p>
            <Button onClick={()=>navigate("/register")}>Register</Button>
        </div>
      </div>
    </div>
  )
}


export default LoginForm
