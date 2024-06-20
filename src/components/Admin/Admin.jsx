
import { CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useTheme } from '@mui/material';
import { Box, useMediaQuery } from '@mui/system';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/Inbox';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CreateProductForm from './CreateProductForm';
import ProductsTable from './ProductsTable';
import OrdersTable from './OrdersTable';
import CustomersTable from './CustomersTable';
import Dashboard from './Dashboard';

const menu=[
  {
    name:"Dashboard",path:"/admin",icon:<DashboardIcon/>
  },
  {
    name:"Products",path:"/admin/products",icon:<DashboardIcon/>
  },
  // {
  //   name:"Customers",path:"/admin/customers",icon:<DashboardIcon/>
  // },
  {
    name:"Orders",path:"/admin/orders",icon:<DashboardIcon/>
  },
  {
    name:"AddProduct",path:"/admin/product/create",icon:<DashboardIcon/>
  },

]
const Admin = () => {
    const theme=useTheme();
    const isLargeScreen=useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible,setSideBarVisible]=useState(false);
    const navigate=useNavigate();
    const drawer=(
        <Box 
        sx={{overflow:"auto",
        display:"flex",
        flexDirection:"column",
        height:"100%",
        justifyContent:"space-between",
        }}>
            <>
                {/* {isLargeScreen&& <Toolbar/>} */}
                <List>
                    {menu.map((item,index)=>(
                        <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                        <ListItemButton>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>
                            {item.name}
                            </ListItemText >
                        </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </>
                <List>
                        <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                               <AccountCircleIcon/>
                            </ListItemIcon>
                            <ListItemText>
                            Account
                            </ListItemText >
                        </ListItemButton>
                        </ListItem>
                </List>
        </Box>
    )

  return (
    <div>
      <div className=' relative flex h-[100vh]'>
        <CssBaseline/>
        <div className='w-[17%] border border-r-gray-300 h-full fixed top-0'>
            {drawer}
          </div>
          <div className='w-[85%] h-full ml-[17%]'>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route path="/product/create" element={<CreateProductForm/>}/>
            <Route path="/products" element={<ProductsTable/>}/>
            <Route path="/orders" element={<OrdersTable/>}/>
            <Route path="/customers" element={<CustomersTable/>}/>
         </Routes>
    
         </div>
    </div>
    </div>
  )
}

export default Admin
