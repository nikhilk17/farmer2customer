import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Avatar, AvatarGroup, Button, Card, CardHeader, Menu, MenuItem, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { getOrders } from '../../../State/Admin/Order/Action';

const OrdersTable = () => {
    const [anchorEl, setAnchorEl] = React.useState([]);
    const open = Boolean(anchorEl);

    const handleClick = (event, index) => {
        const newAnchorElArray = [...anchorEl];
        newAnchorElArray[index] = event.currentTarget
        setAnchorEl(newAnchorElArray);
    };
    const handleClose = (index) => {
        const newAnchorElArray = [...anchorEl];
        newAnchorElArray[index] = null
        setAnchorEl(newAnchorElArray);
    };

    const dispatch = useDispatch();
    const { adminOrder } = useSelector(store => store);
    useEffect(() => {
        dispatch(getOrders())
    }
        , [adminOrder.confirmed, adminOrder.shipped, adminOrder.delivered, adminOrder.deleted])
    console.log("adminOrders", adminOrder)
    const handleShippedOrder = (orderId, index) => {
        dispatch(shipOrder(orderId))
        handleClose(index)
    }

    const handleConfirmedOrder = (orderId, index) => {
        dispatch(confirmOrder(orderId))
        handleClose(index)
    }

    const handleDeliveredOrder = (orderId, index) => {
        dispatch(deliveredOrder(orderId))
        handleClose(index)
    }
    const handleDeleteOrder = (orderId) => {
        dispatch(deleteOrder(orderId))
    }

    return (
        <div className='p-5'>
            <Card
                className='mt-2'>
                <CardHeader title="Recent Orders" />
                <TableContainer component={Paper} >
                    <Table sx={{ minWidth: 550 }} aria-label="simple table " >
                        <TableHead>
                            <TableRow>
                                <TableCell sx={{ fontSize: 15, fontWeight: 600 }}>Products Images</TableCell>
                                <TableCell align="left">Title</TableCell>
                                <TableCell align="left">OrderId</TableCell>
                                <TableCell align="left">Price</TableCell>
                                <TableCell align="left">Order Status</TableCell>
                                {/* <TableCell align="left">Update</TableCell>
                                <TableCell align="left">Delete</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {adminOrder.orders?.map((item, index) => (
                                <TableRow
                                    key={item.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >
                                    <TableCell component="th" scope="row">
                                        <AvatarGroup max={4} sx={{ justifyContent: 'center' }}>
                                            {item.orderItems.map((orderItem) => <Avatar alt={orderItem.product.name} src={orderItem.product.imageUrl}></Avatar>)}
                                        </AvatarGroup>
                                    </TableCell>
                                    <TableCell align="left">
                                        {item.orderItems.map((orderItem) => <p>{orderItem.product.title}</p>)}
                                    </TableCell>
                                    <TableCell align="left" >{item.id}</TableCell>
                                    <TableCell align="left">{item.totalDiscountedPrice}</TableCell>
                                    <TableCell align="left"> <span
                                        className={`
              ${item.orderStatus == "CONFIRMED" ? "bg-green-300 text-black" :
                                                item.orderStatus == "SHIPPED" ? "bg-blue-500 text-white" :
                                                    item.orderStatus == "DELIVERED" ? "bg-green-500 text-black" :
                                                        item.orderStatus == "PENDING" ? "bg-slate-500 text-white" : "bg-yellow-500 text-white"}
              p-2 px-5 rounded-full text-xs}`
                                        } >{item.orderStatus}</span></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Card>
        </div>
    )
}

export default OrdersTable