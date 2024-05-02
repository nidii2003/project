"use client"
import React from 'react';
import { Bounce, ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Button } from './ui/button';
import { ShoppingCart } from 'lucide-react';
import { useAppDispatch } from './store/hooks';
import { addToCart } from './store/features/cart';
const AddToCartToast=({cartItem}:any)=>{
  const dispatch=useAppDispatch()
    const notify = () => toast.info('Product Added Succesfully ', {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Bounce,
      });
      
   
    return(
        <div  className='w-fit' onClick={()=>dispatch(addToCart(cartItem))}>
        {/* <Button onClic={notify}k>Notify!</Button> */}
        <Button  onClick={notify} className='ml-5 mt-2 g-3 scroll-m-20 text-xs font-semibold text-myOrange tracking-tight group bg-myWhite hover:bg-myBlackpara text-myOrange hover:text-myOrange rounded-xl '><ShoppingCart></ShoppingCart>ADD TO CART </Button>
        <ToastContainer
position="top-right"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
      </div>

    )
}
export default AddToCartToast