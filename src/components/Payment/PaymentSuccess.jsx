import { Grid } from "@mui/material";
import { Alert, AlertTitle } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getOrderById } from "../../State/Order/Action";
import { updatePayment } from "../../State/Payment/Action";
import OrderTracker from "../Order/OrderTracker";
import AddressCard from "../Cart/Checkout/AddressCard/AddressCard";


const PaymentSuccess = () => {
  // razorpay_payment_link_reference_id
  // razorpay_payment_id
  const [paymentId, setPaymentId] = useState("");
  const [referenceId, setReferenceId] = useState("");
  const [paymentStatus, setPaymentStatus] = useState("");
  const {orderId}=useParams();

  
  const jwt = localStorage.getItem("jwt");
  const dispatch = useDispatch();
  const { order } = useSelector((store) => store);
  console.log("order",order)
  useEffect(() => {
    console.log("orderId",orderId)
    const urlParams = new URLSearchParams(window.location.search);
    setPaymentId(urlParams.get("razorpay_payment_id"));
    setReferenceId(urlParams.get("razorpay_payment_link_reference_id"));
    setPaymentStatus(urlParams.get("razorpay_payment_link_status"));
  }, []);
  useEffect(() => {
    if (paymentId && paymentStatus === "paid") {
      const data = { orderId, paymentId, jwt };
      dispatch(updatePayment(data));
      dispatch(getOrderById(orderId));
    }
  }, [orderId, paymentId]);

  return (
    <div className="px-2 lg:px-36 py-24">
      <div className="flex flex-col justify-center items-center">
        <Alert
          variant="filled"
          severity="success"
          sx={{ mb: 6, width: "fit-content" }}
        >
          <AlertTitle>Payment Success</AlertTitle>
          Congratulation Your Order Get Placed
        </Alert>
      </div>

      <OrderTracker activeStep={1}/>

      <Grid container className="space-y-5 py-5 pt-20">
        {order.error?.orderItems.map((item) => (
          <Grid
            container
            item
            className="shadow-xl rounded-md p-5 border"
            sx={{ alignItems: "center", justifyContent: "space-between" }}
          >
            <Grid item xs={6}>
              {" "}
              <div className="flex  items-center ">
                <img
                  className="w-[7rem] h-[7rem] object-cover object-top rounded-sm"
                  src={item?.product.imageUrl}
                  alt=""
                />
                <div className="ml-5 space-y-2">
                  <p className="">{item.product.title}</p>
                  <p className="opacity-50 text-xs font-semibold space-x-5">
                    <span>Quantity:{item.quantity}</span> <span>Size: {item.size}</span>
                  </p>
                  <p>Seller: {item.product.brand}</p>
                  <p>₹{item.product.discountedPrice}</p>
                </div>
              </div>
            </Grid>
            <Grid item>
              <AddressCard address={order.error?.shippingAddress} />
            </Grid>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PaymentSuccess;
