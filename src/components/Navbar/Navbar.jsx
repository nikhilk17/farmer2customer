import React, { useEffect } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import { useLocation, useNavigate } from 'react-router-dom';
import AuthModal from '../../Auth/AuthModal';
import { Avatar, Button, Hidden, Menu, MenuItem, useMediaQuery } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, logout } from '../../State/Auth/Action';
import { store } from '../../State/store';
import { useTheme } from '@mui/material/styles';

const MenuLinks = [
  {
    id: 1,
    name: 'Home',
    navigate: "/",
  },
  {
    id: 2,
    name: 'Products',
    navigate: "/products",
  },
  {
    id: 3,
    name: 'Services',
    navigate: "/#services",
  },
  {
    id: 4,
    name: 'Contact',
    navigate: "/#footer",
  },
  {
    id: 5,
    name: 'About',
    navigate: "/#",
  },
  // {
  //   id: 6,
  //   name: 'My orders',
  //   link: "/account/order",
  // },
  
]
const Navbar = () => {
  const [openAuthModal,setOpenAuthModal]=React.useState(false);
  const navigate=useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl); 
 const jwt = localStorage.getItem('jwt');
 const auth= useSelector(store => store.auth)
  const dispatch=useDispatch();
 const location=useLocation();
  const handleClose=()=>{
    setOpenAuthModal(false)
  }
  const handleOpen=()=>{
    setOpenAuthModal(true)
  }
  
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl(null);
  };

 
  const handleAddToCart=(e)=>{
    navigate('/cart')
  }


  useEffect(()=>
  {
    if(jwt){
      dispatch(getUser(jwt))
    }
  },[jwt,auth.jwt])

  useEffect(()=>
    {
      if(auth.user){
       handleClose()
      }
      if(location.pathname==="/login" || location.pathname==="/register")
        {
          navigate("/")
        }
    },[auth.user])

    const handleLogout=()=>{
      dispatch(logout())
      handleClose2()
    }
    const handleMyOrder=()=>{
      navigate("/account/order")
      handleClose2()
    }

    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div className='px-10 py-2 relative flex justify-between border-solid border-2 border-silver-50 font-merienda h-25'>
    <div className='text-[#396C03] font-black text-4xl'>
      F2c
    </div>
    <Hidden smDown>
      <div className='flex items-center justify-items-center'>
        <ul>
          {/* <p >products</p> */}
          {/* {MenuLinks.map((menu) => (
            <li key={menu.id} className='inline-block mx-5 '>
              <a className='hover:text-green-500  text-lg hover:border-b-2 hover:border-green-400 font-semibold'>
                {menu.name}
              </a>
            </li>
          ))} */}
          <li className='inline-block mx-5 '>
              <a onClick={()=>navigate(`/`)} className='hover:text-green-500  text-lg hover:border-b-2 hover:border-green-400 font-semibold p-3'>
                Home
              </a>
              <a onClick={()=>navigate(`/products`)} className='hover:text-green-500  text-lg hover:border-b-2 hover:border-green-400 font-semibold p-3'>
                Products
              </a>
              <a onClick={()=>navigate(`/services`)} className='hover:text-green-500  text-lg hover:border-b-2 hover:border-green-400 font-semibold p-3'>
                Services
              </a>
              <a onClick={()=>navigate(`/#footer`)} className='hover:text-green-500  text-lg hover:border-b-2 hover:border-green-400 font-semibold p-3'>
                Contact
              </a>
              <a onClick={()=>navigate(`/#footer`)} className='hover:text-green-500  text-lg hover:border-b-2 hover:border-green-400 font-semibold p-3'>
                About
              </a>
            </li>
        </ul>
      </div>
    </Hidden>
    <div className='flex items-center justify-items-center gap-9' >
      { auth.user ?.firstName ?(  
          <div>
      <Avatar id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick} className='text-white' sx={{width:35,height:35,bgcolor:"#386C03"}}>
          {auth.user?.firstName[0].toUpperCase()}
          </Avatar>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose2}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem onClick={handleMyOrder}>My Orders</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
        </div>
        ):(
        <div className='max-sm:pl-10'>
        <button onClick={handleOpen} className='w-[8rem] border-solid border-2 rounded-full text-black px-4 py-1  hover:text-white hover:bg-green-400 hover:scale-90 '>
          Login
        </button >
        </div>)}
        <FaCartShopping onClick={handleAddToCart} className='hover:text-green-500'/>
        <AuthModal handleClose={handleClose} open={openAuthModal}/>
       
      </div>
    </div>
  )
}

export default Navbar
